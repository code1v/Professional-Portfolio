import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#111] transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.25)]">

      <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-700 via-slate-900 to-black">

        <h2 className="px-6 text-center text-3xl font-bold text-white transition duration-300 group-hover:scale-105">
          {project.title}
        </h2>

      </div>

      <div className="p-8">

        <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
          {project.tech}
        </span>

        <p className="mt-6 leading-7 text-gray-400">
          {project.description}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <FaGithub />
          View Source Code
        </a>

      </div>

    </div>
  );
}

export default ProjectCard;