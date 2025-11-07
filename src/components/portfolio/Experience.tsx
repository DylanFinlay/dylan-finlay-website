"use client";

import AnimatedTile from "@/components/AnimatedTile";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function PortfolioExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const professionalExperience = [
    {
      title: "Incoming Software Engineer Intern",
      company: "German Aerospace Center (DLR)",
      period: "Jan 2026 - Apr 2026",
      description:
        "I am excited to soon be joining the DLR team in Stuttgart, Germany, where I will be working on a python-based simulation framework for hydrogen and electric powered trains.",
    },
    {
      title: "Software Engineer Intern",
      company: "Ford Pro",
      period: "May 2025 - Aug 2025",
      description:
        "Worked on Ford Pro's Order Management team, where I helped build and maintain fulfillment services across the stack. I focused on developing a Java Spring API for syncing legacy orders, modernizing microservices, and improving CI/CD pipelines with Tekton in GCP.",
    },
    {
      title: "Software Developer Intern",
      company: "Solace",
      period: "Sept 2024 - Dec 2024",
      description:
        "Worked on Solace's Micro-Integrations (MI) team, where I worked on test automation and development. I focused on developing the E2E Java test suite for the newest Cloud Integrations, along with improving the Python tooling for automation through Github Actions.",
    },
    {
      title: "Software Developer Intern",
      company: "Solace",
      period: "Jan 2024 - Apr 2024",
      description:
        "Focused on enhancing back-end infrastructure for testing tools, particularly supporting Solace's EDA messaging solution. Leveraging my proficiency in Python, C, and bash scripting, I contributed to optimizing efficiency and functionality during my term.",
    },
    {
      title: "Software Engineer Intern",
      company: "Shyftlabs",
      period: "May 2023 - Aug 2023",
      description:
        "Designed, implemented and deployed the REST API for a robust python web scraper empowering developers to effortlessly extract open graph tags from diverse websites.",
    },
  ];

  return (
    <section id="experience" className="container-custom section-spacing">
      <AnimatedTile className="tile-light-orange">
        <h2 className="mb-8 border-b-4 border-ob-4 inline-block">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line - only visible on md+ screens, starts at first dot and ends at last dot */}
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-ob-3"></div>

          <div className="space-y-6">
            {professionalExperience.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline dot - centered vertically with the tile content */}
                  <div className="hidden md:block absolute left-6 top-12 w-5 h-5 rounded-full bg-ob-3 border-4 border-med-sand"></div>

                  <AnimatedTile
                    className="tile-sand relative cursor-pointer"
                    animation="fade-left"
                    delay={index * 50}
                  >
                    <div onClick={() => toggleExpand(index)}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <span className="text-sm font-medium whitespace-nowrap md:ml-4">
                          {exp.period}
                        </span>
                      </div>
                      <h5 className="text-lg font-medium mb-1">
                        {exp.company}
                      </h5>

                      {isExpanded && (
                        <p className="leading-relaxed mt-3">
                          {exp.description}
                        </p>
                      )}
                    </div>

                    <div className="absolute bottom-4 right-4 p-2 rounded-full bg-ob-3 text-white pointer-events-none">
                      {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </AnimatedTile>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedTile>
    </section>
  );
}
