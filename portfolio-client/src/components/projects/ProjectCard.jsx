import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#111] transition-all duration-500 hover:-translate-y-3 hover:border-blue-500">

      {/* Top */}

      <div className="h-56 bg-gradient-to-br from-blue-600 via-slate-900 to-black flex items-center justify-center">

        <h2 className="text-3xl font-bold text-white opacity-70 group-hover:scale-110 transition">
          {project.title}
        </h2>

      </div>

      {/* Content */}

      <div className="p-8">

        <p className="text-blue-400 text-sm font-semibold mb-3">
          {project.tech}
        </p>

        <p className="text-gray-400 leading-7">
          {project.description}
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-700 px-5 py-3 hover:border-blue-500 transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;