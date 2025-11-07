import AnimatedTile from "@/components/AnimatedTile";
import Image from "next/image";

export default function PortfolioDesignTeam() {
  const designTeams = [
    {
      title: "Co-Founder & Software Team Lead",
      company: "UW RoboSoccer",
      period: "Aug 2024 - present",
      description:
        "Co-Founder of Waterloo's newest SDC design team. Our group aims to compete in the global RoboCup competition, where we will present a group of humanoid robots to autonomously compete in 4v4 soccer matches. The Software/ML/AI Team is responsible for developing the algorithms that drive our humanoid robots. This includes computer vision for recognizing the ball and opponents, decision-making algorithms for strategic play, and machine learning models to improve robot performance over time.",
      image: "/assets/portfolio/robocup_robot.png",
    },
    {
      title: "Autonomous Airside Project Manager",
      company: "WARG",
      period: "Sept 2023 - Sept 2024",
      description:
        "A project manager in the Waterloo Aerial Robotics Group design team, leading the team in charge of writing code for the autonomous flight of WARG's custom drone. My focus revolves around Python software development for drone autonomy. This encompasses computer vision code, path planning, and more.",
      image: "/assets/portfolio/warg_drone.jpg",
    },
  ];

  return (
    <section className="container-custom section-spacing">
      <AnimatedTile className="tile-dark-yellow">
        <h2 className="mb-8">Design Team Experience</h2>
        <div className="space-y-6">
          {designTeams.map((exp, index) => (
            <AnimatedTile
              key={index}
              className="tile-sand"
              animation="flip-left"
              delay={index * 50}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <span className="text-sm font-medium whitespace-nowrap md:ml-4">
                      {exp.period}
                    </span>
                  </div>
                  <h5 className="text-lg font-medium mb-1">{exp.company}</h5>
                  <p className="leading-relaxed">{exp.description}</p>
                </div>
                <div className="flex justify-center md:col-span-1">
                  <Image
                    src={exp.image}
                    alt={`${exp.company} project`}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </AnimatedTile>
          ))}
        </div>
      </AnimatedTile>
    </section>
  );
}
