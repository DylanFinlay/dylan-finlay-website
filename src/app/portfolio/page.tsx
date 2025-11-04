import PortfolioAbout from "@/components/portfolio/About";
import PortfolioDesignTeam from "@/components/portfolio/DesignTeam";
import PortfolioExperience from "@/components/portfolio/Experience";
import PortfolioProjects from "@/components/portfolio/Projects";
import PortfolioSkills from "@/components/portfolio/Skills";

export default function PortfolioPage() {
  return (
    <div>
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioDesignTeam />
      <PortfolioProjects />
      <PortfolioSkills />
    </div>
  );
}
