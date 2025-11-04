export default function PortfolioDesignTeam() {
  const designTeams = [
    {
      title: "Co-Founder & Software Team Lead",
      company: "UW RoboSoccer",
      period: "Aug 2024 - present",
      description:
        "Co-Founder of Waterloo's newest SDC design team. Our group aims to compete in the global RoboCup competition, where we will present a group of humanoid robots to autonomously compete in 4v4 soccer matches. The Software/ML/AI Team is responsible for developing the algorithms that drive our humanoid robots. This includes computer vision for recognizing the ball and opponents, decision-making algorithms for strategic play, and machine learning models to improve robot performance over time.",
    },
    {
      title: "Autonomous Airside Project Manager",
      company: "WARG",
      period: "Sept 2023 - Sept 2024",
      description:
        "A project manager in the Waterloo Aerial Robotics Group design team, leading the team in charge of writing code for the autonomous flight of WARG's custom drone. My focus revolves around Python software development for drone autonomy. This encompasses computer vision code, path planning, and more.",
    },
  ];

  return (
    <section className="container-custom section-spacing">
      <div className="tile-dark-yellow">
        <h2 className="mb-8">Design Team Experience</h2>
        <div className="space-y-6">
          {designTeams.map((exp, index) => (
            <div key={index} className="tile-light-blue">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <span className="text-sm font-medium">{exp.period}</span>
              </div>
              <p className="text-lg font-medium mb-3">{exp.company}</p>
              <p className="leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
