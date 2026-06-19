"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */
const CANVAS_W = 700;
const CANVAS_H = 300;
const GROUND_Y = 260; // top of ground line (px from top)
const PLAYER_SIZE = 28;
const PLAYER_X = 80;
const GRAVITY = 0.5;
const JUMP_VEL = -9;
const MIN_OBS_H = 18; // obstacle height
const MAX_OBS_H = 36;
const OBS_W = 14;
const OBS_SPEED = 3.8;
const SPAWN_INTERVAL = 1100; // ms between obstacles
const SPEED_INCREASE = 0.0005; // speed increases per frame

/* Ocean-blue palette matching the site */
const COLORS = {
  sky: "#caf0f8",
  ground: "#0077b6",
  player: "#023e8a",
  playerEye: "#ffffff",
  obstacle: "#023047",
  score: "#023e8a",
  gameOver: "#fb8500",
  restartBtn: "#0096c7",
  restartText: "#ffffff",
};

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */
interface Obstacle {
  x: number;
  w: number;
  h: number;
}

/* ------------------------------------------------------------------ */
/*  Helper: draw a simple running character                           */
/* ------------------------------------------------------------------ */
function drawPlayer(
  ctx: CanvasRenderingContext2D,
  frame: number,
  playerY: number,
) {
  const x = PLAYER_X;
  const y = playerY;
  const s = PLAYER_SIZE;

  // Body
  ctx.fillStyle = COLORS.player;
  ctx.beginPath();
  ctx.roundRect(x, y, s, s - 4, 4);
  ctx.fill();

  // Eye
  ctx.fillStyle = COLORS.playerEye;
  ctx.beginPath();
  ctx.arc(x + s - 8, y + 8, 3, 0, Math.PI * 2);
  ctx.fill();

  // Legs – simple alternating animation
  ctx.fillStyle = COLORS.player;
  const legOffset = Math.sin(frame * 0.15) * 4;
  ctx.fillRect(x + 4, y + s - 4, 5, 8 + legOffset);
  ctx.fillRect(x + s - 9, y + s - 4, 5, 8 - legOffset);
}

/* ------------------------------------------------------------------ */
/*  Helper: draw a cactus-like obstacle                                */
/* ------------------------------------------------------------------ */
function drawObstacle(ctx: CanvasRenderingContext2D, o: Obstacle) {
  ctx.fillStyle = COLORS.obstacle;
  ctx.fillRect(o.x, GROUND_Y - o.h, o.w, o.h);

  // little arms
  ctx.fillRect(o.x - 4, GROUND_Y - o.h + 6, 6, 4);
  ctx.fillRect(o.x + o.w - 2, GROUND_Y - o.h + 10, 6, 4);
}

/* ------------------------------------------------------------------ */
/*  Helper: draw the static scene background (sky + ground)           */
/* ------------------------------------------------------------------ */
function drawBackground(ctx: CanvasRenderingContext2D) {
  // Sky
  ctx.fillStyle = COLORS.sky;
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // Ground
  ctx.fillStyle = COLORS.ground;
  ctx.fillRect(0, GROUND_Y, CANVAS_W, 4);
}

/* ------------------------------------------------------------------ */
/*  Helper: draw the idle preview scene                                */
/* ------------------------------------------------------------------ */
function drawIdleScene(ctx: CanvasRenderingContext2D) {
  drawBackground(ctx);

  // Player standing on ground
  drawPlayer(ctx, 0, GROUND_Y - PLAYER_SIZE);

  // A sample obstacle in the distance
  const sampleObs: Obstacle = { x: 280, w: OBS_W, h: 30 };
  drawObstacle(ctx, sampleObs);

  // "Press Space to start" text on the canvas
  ctx.fillStyle = COLORS.score;
  ctx.font = "bold 18px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Press Space or Tap to Start", CANVAS_W / 2, 120);

  // Hint arrow / decorative text
  ctx.fillStyle = "#023e8a";
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText("Jump over the obstacles!", CANVAS_W / 2, 145);
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */
export default function DinoRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameState, setGameState] = useState<"idle" | "playing" | "over">(
    "idle",
  );

  // Refs that the game loop reads/writes without triggering re-renders
  const stateRef = useRef(gameState);
  stateRef.current = gameState;

  const scoreRef = useRef(score);
  scoreRef.current = score;

  // Load high score from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("dinorunner_highscore");
    if (stored) setHighScore(Number(stored));
  }, []);

  // Draw the idle preview on mount and whenever gameState returns to idle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (gameState === "idle") {
      drawIdleScene(ctx);
    }
  }, [gameState]);

  /* ---- Global keyboard handler for start/restart ---- */
  useEffect(() => {
    const onGlobalKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
        const state = stateRef.current;
        if (state === "idle" || state === "over") {
          e.preventDefault();
          startGame();
        }
      }
    };
    window.addEventListener("keydown", onGlobalKey);
    return () => window.removeEventListener("keydown", onGlobalKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---- Game loop ---- */
  const startGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let playerY = GROUND_Y - PLAYER_SIZE; // top of player
    let velocity = 0;
    let isJumping = false;
    let frame = 0;
    let obsSpeed = OBS_SPEED;
    let obstacles: Obstacle[] = [];
    let lastSpawn = 0;
    let currentScore = 0;
    let animId = 0;

    const jump = () => {
      if (!isJumping) {
        velocity = JUMP_VEL;
        isJumping = true;
      }
    };

    // Jump handlers (attached to window so they work during the game)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault();
        jump();
      }
    };
    const onTouch = (e: TouchEvent | MouseEvent) => {
      e.preventDefault();
      jump();
    };

    window.addEventListener("keydown", onKey);
    canvas.addEventListener("click", onTouch);
    canvas.addEventListener("touchstart", onTouch, { passive: false });

    const loop = (time: number) => {
      if (stateRef.current !== "playing") {
        cancelAnimationFrame(animId);
        return;
      }

      frame++;
      currentScore = Math.floor((frame * obsSpeed) / (OBS_SPEED * 5));
      scoreRef.current = currentScore;
      setScore(currentScore);

      obsSpeed += SPEED_INCREASE;

      // Physics
      velocity += GRAVITY;
      playerY += velocity;
      if (playerY >= GROUND_Y - PLAYER_SIZE) {
        playerY = GROUND_Y - PLAYER_SIZE;
        velocity = 0;
        isJumping = false;
      }

      // Spawn obstacles
      if (time - lastSpawn > SPAWN_INTERVAL / (obsSpeed / OBS_SPEED)) {
        const h = MIN_OBS_H + Math.random() * (MAX_OBS_H - MIN_OBS_H);
        obstacles.push({ x: CANVAS_W, w: OBS_W, h });
        lastSpawn = time;
      }

      // Move obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= obsSpeed;
        if (obstacles[i].x + obstacles[i].w < 0) {
          obstacles.splice(i, 1);
        }
      }

      // Collision detection
      const px = PLAYER_X;
      const py = playerY;
      const ps = PLAYER_SIZE;
      for (const o of obstacles) {
        if (
          px < o.x + o.w &&
          px + ps > o.x &&
          py < GROUND_Y &&
          py + ps > GROUND_Y - o.h
        ) {
          // Game over!
          setGameState("over");
          const stored = localStorage.getItem("dinorunner_highscore");
          if (currentScore > Number(stored || 0)) {
            localStorage.setItem("dinorunner_highscore", String(currentScore));
            setHighScore(currentScore);
          }
          cancelAnimationFrame(animId);
          return;
        }
      }

      // ---- Draw ----
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      drawBackground(ctx);

      // Score
      ctx.fillStyle = COLORS.score;
      ctx.font = "bold 16px system-ui, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(`Score: ${currentScore}`, CANVAS_W - 12, 24);

      // Obstacles
      for (const o of obstacles) drawObstacle(ctx, o);

      // Player
      drawPlayer(ctx, frame, playerY);

      animId = requestAnimationFrame(loop);
    };

    // Reset state
    playerY = GROUND_Y - PLAYER_SIZE;
    velocity = 0;
    isJumping = false;
    frame = 0;
    obsSpeed = OBS_SPEED;
    obstacles = [];
    lastSpawn = 0;
    currentScore = 0;
    setScore(0);
    setGameState("playing");

    animId = requestAnimationFrame(loop);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("click", onTouch);
      canvas.removeEventListener("touchstart", onTouch);
    };
  }, []);

  /* ---- Handlers ---- */
  const handleStart = () => {
    if (gameState === "idle" || gameState === "over") {
      startGame();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        className="rounded-xl shadow-md max-w-full h-auto cursor-pointer"
        style={{ aspectRatio: `${CANVAS_W}/${CANVAS_H}` }}
        onClick={handleStart}
        onTouchStart={(e) => {
          if (gameState === "idle" || gameState === "over") {
            e.preventDefault();
            handleStart();
          }
        }}
      />

      {/* Overlay / controls */}
      <div className="flex flex-col items-center gap-2 text-center">
        {gameState === "idle" && (
          <p className="text-slate-600 text-sm">
            Press <kbd className="font-semibold">Space</kbd> /{" "}
            <kbd className="font-semibold">↑</kbd> or tap to start
          </p>
        )}

        {gameState === "over" && (
          <>
            <p
              className="text-lg font-semibold"
              style={{ color: COLORS.gameOver }}
            >
              Game Over
            </p>
            <p className="text-sm text-slate-600">
              Score: {score} &middot; Best: {highScore}
            </p>
            <button
              onClick={handleStart}
              className="px-6 py-2 rounded-lg font-medium text-white text-sm transition-transform active:scale-95"
              style={{ backgroundColor: COLORS.restartBtn }}
            >
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
