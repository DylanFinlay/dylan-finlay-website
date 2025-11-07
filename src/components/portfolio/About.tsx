"use client";

import AnimatedTile from "@/components/AnimatedTile";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function PortfolioAbout() {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="container-custom section-spacing">
      <AnimatedTile className="tile-light-blue">
        <div className="grid gap- md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="mb-10 border-b-4 border-rsf-orange inline-block">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              Hi, I&apos;m Dylan—a Mechatronics Engineering student at the
              University of Waterloo. I&apos;m passionate about building
              autonomous systems, robotics, and pushing the boundaries of what
              technology can do.
            </p>
            <p className="leading-relaxed">
              I have a strong foundation in software development, particularly
              in autonomous systems, backend development, and embedded
              programming. I&apos;m deeply involved in projects related to
              robotics and software, such as designing autonomous drones and
              creating a fleet of robots to autonomously compete in soccer
              games.
            </p>
          </div>
          <div className="flex justify-center pt-6 md:pt-0">
            <Image
              src="/assets/portfolio/dettifoss-selfie.jpg"
              alt="Dylan Finlay"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </AnimatedTile>

      {/* Scroll button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={scrollToExperience}
          className="btn-primary rounded-full p-4 hover:scale-110 transition-transform"
          aria-label="Scroll to experience section"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
