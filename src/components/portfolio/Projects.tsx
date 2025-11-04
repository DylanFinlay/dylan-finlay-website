import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function PortfolioProjects() {
  const projects = [
    {
      title: "Docs Dynamic Chatbot",
      description:
        "First place Solace hackathon project. Developed a dynamic chatbot custom-trained on the user's current page. Leveraged Anthropic's Claude-3-Sonnet LLM to generate quick responses.",
      github: "https://github.com/DylanFinlay/SuperChargedChatBot",
      image: "/assets/portfolio/solaceChatbot.png",
    },
    {
      title: "AI Workflow Analyzer",
      description:
        "Created an AI-Enhanced Github Actions Workflow Analyzer that uses RAG to reference workflow logs and source code, to then explain any previous failures and present possible solutions.",
      github: "https://github.com/DylanFinlay/ai-workflow-analysis",
      image: "/assets/portfolio/log_analyzer.png",
    },
    {
      title: "Web Scraping API",
      description:
        "Python Web Scraper built to grab OG tags from thousands of websites, implemented as an API with Flask, and showcased through an intricate React Web App.",
      github: "https://github.com/DylanFinlay/OpenGraph-Web-Scraper",
      demo: "https://open-graph-web-scraper.vercel.app/",
      image: "/assets/portfolio/WebScraper.png",
    },
    {
      title: "STM32 Two-Axis Machine",
      description:
        "Developed a control system for a two-axis machine using an STM32 microcontroller, enabling precise control of stepper motors using potentiometers, and limit switches for edges.",
      image: "/assets/portfolio/twoAxisMachine.png",
    },
    {
      title: "The BarBot",
      description:
        "The BarBot is an autonomous drink delivery robot built using Lego EV3 Mindstorm hardware, and programmed with embedded C to deliver drinks on a custom grid system.",
      github: "https://github.com/DylanFinlay/BarBot",
      image: "/assets/portfolio/BarBot.jpg",
    },
    {
      title: "Machine Vision Project",
      description:
        "Worked with four others in the Toyota Software design challenge, creating a machine vision solution to detect holes for the automation of sticker placement.",
      github: "https://github.com/Ethan118/toyota-software-challenge",
      image: "/assets/portfolio/machinevision.PNG",
    },
    {
      title: "Snack Track",
      description:
        "Collaborated in a team of 5 to create a React App with a clean UI, that allows users to search for and access detailed nutritional information about various foods.",
      github: "https://github.com/DylanFinlay/Snack-track",
      demo: "https://snack-track.vercel.app/",
      image: "/assets/portfolio/SnackTrack.png",
    },
    {
      title: "Sudoku Solver",
      description:
        "Developed a back-tracking algorithm capable of solving any sudoku board, and further implemented a full sudoku game with a PyGame graphical user interface.",
      github: "https://github.com/DylanFinlay/Sudoku-Solver-Game",
      image: "/assets/portfolio/SudokuSolver1.png",
    },
    {
      title: "Mobile 3-Axis Robotic Arm",
      description:
        "Awarded first place in a University of Waterloo competition by designing a fully mobile 3-Axis Robotic Arm. The arm is controlled remotely to pick up and move small items.",
      image: "/assets/portfolio/TronDaysRobot.jpg",
    },
  ];

  return (
    <section className="container-custom section-spacing">
      <h2 className="mb-12">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="tile-light group"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
