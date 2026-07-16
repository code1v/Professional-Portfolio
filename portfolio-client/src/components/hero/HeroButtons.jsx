import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../../data/portfolioData";

function HeroButtons() {

  const { personal } = portfolio;

  return (

    <div className="flex flex-wrap gap-5 mt-12">

      <a
        href={personal.github}
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full font-semibold"
      >
        GitHub
      </a>

      <a
        href={personal.linkedin}
        target="_blank"
        rel="noreferrer"
        className="border border-gray-600 hover:border-blue-500 transition px-8 py-4 rounded-full"
      >
        LinkedIn
      </a>

      

    </div>

  );

}

export default HeroButtons;