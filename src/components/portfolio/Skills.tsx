import AnimatedTile from "@/components/AnimatedTile";
import Image from "next/image";

export default function PortfolioSkills() {
  const skills = [
    { name: "Python", img: "/assets/portfolio/Python.png" },
    { name: "C++", img: "/assets/portfolio/Cpp.png" },
    { name: "C", img: "/assets/portfolio/C.png" },
    { name: "Java", img: "/assets/portfolio/java.png" },
    { name: "JavaScript", img: "/assets/portfolio/JavaScript.png" },
    { name: "Bash", img: "/assets/portfolio/bash.png" },
    { name: "React.js", img: "/assets/portfolio/React.png" },
    { name: "Node.js", img: "/assets/portfolio/Node.png" },
    { name: "HTML", img: "/assets/portfolio/Html.png" },
    { name: "Tailwind CSS", img: "/assets/portfolio/Tailwind.png" },
    { name: "Git", img: "/assets/portfolio/Git.png" },
    { name: "GitHub", img: "/assets/portfolio/Github.png" },
    { name: "Docker", img: "/assets/portfolio/Docker.png" },
    { name: "Linux", img: "/assets/portfolio/Linux.png" },
    { name: "VS Code", img: "/assets/portfolio/VScode.png" },
    { name: "Postman", img: "/assets/portfolio/Postman.png" },
    { name: "SolidWorks", img: "/assets/portfolio/Solidworks.png" },
    { name: "AutoCAD", img: "/assets/portfolio/Autocad.png" },
  ];

  return (
    <section className="container-custom section-spacing">
      <AnimatedTile className="tile-dark-yellow">
        <h2 className="mb-8 border-b-4 border-ob-6 inline-block">Skills</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="tile flex flex-col items-center justify-center p-3 hover:scale-105 transition-transform"
            >
              <Image
                src={skill.img}
                alt={`${skill.name} icon`}
                width={48}
                height={48}
                className="mb-2 object-contain"
              />
              <p className="text-xs font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </AnimatedTile>
    </section>
  );
}
