export default function PortfolioExperience() {
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
      {/* Professional Experience */}
      <div className="mb-16">
        <h2 className="mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {professionalExperience.map((exp, index) => (
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

      {/* Design Team Experience */}
      <div>
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
