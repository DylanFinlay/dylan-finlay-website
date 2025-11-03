import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "Python", img: "/assets/portfolio/Python.png", py: "py-1" },
    { name: "C++", img: "/assets/portfolio/Cpp.png", py: "py-1" },
    { name: "C", img: "/assets/portfolio/C.png", py: "py-1" },
    { name: "Java", img: "/assets/portfolio/java.png", py: "py-1" },
    { name: "Bash", img: "/assets/portfolio/bash.png", py: "py-1" },
    { name: "Javascript", img: "/assets/portfolio/JavaScript.png", py: "py-2" },
    { name: "HTML", img: "/assets/portfolio/Html.png", py: "py-1" },
    { name: "Tailwind CSS", img: "/assets/portfolio/Tailwind.png", py: "py-1" },
    { name: "React.js", img: "/assets/portfolio/React.png", py: "py-3" },
    { name: "Node.js", img: "/assets/portfolio/Node.png", py: "py-1" },
    { name: "VS Code", img: "/assets/portfolio/VScode.png", py: "py-1" },
    { name: "Postman", img: "/assets/portfolio/Postman.png", py: "py-1" },
    { name: "Git", img: "/assets/portfolio/Git.png", py: "py-1" },
    { name: "GitHub", img: "/assets/portfolio/Github.png", py: "py-1" },
    { name: "Linux", img: "/assets/portfolio/Linux.png", py: "py-1" },
    {
      name: "Docker",
      img: "/assets/portfolio/Docker.png",
      py: "py-4",
      w: "w-28",
    },
    { name: "SolidWorks", img: "/assets/portfolio/Solidworks.png", py: "py-1" },
    { name: "AutoCAD", img: "/assets/portfolio/Autocad.png", py: "py-1" },
  ];

  return (
    <div
      id="skills"
      className="w-full py-12 min-h-screen flex items-center bg-[#0a192f] text-gray-300"
    >
      {/*Container*/}
      <div className="max-w-[1500px] mx-auto xl:px-40 lg:px-20 md:px-12 sm:px-8 px-4 p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            {/* These are some of the technologies I&apos;ve worked with */}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center py-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <Image
                className={`${skill.w || "w-20"} mx-auto`}
                src={skill.img}
                alt={`${skill.name} Icon`}
                width={80}
                height={80}
              />
              <p className={skill.py}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
