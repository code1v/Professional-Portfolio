import { portfolio } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { projects } = portfolio;

  return (
    <section
      id="projects"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
          Portfolio
        </p>

        <h2 className="heading text-7xl md:text-8xl">
          PROJECTS
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl leading-8">
          A collection of projects showcasing my skills in
          frontend development, backend development and
          full stack application development.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;