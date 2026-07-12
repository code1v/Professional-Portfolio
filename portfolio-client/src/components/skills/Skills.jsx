import { portfolio } from "../../data/portfolioData";
import SkillCard from "./SkillCard";

function Skills() {
  const { skills } = portfolio;

  return (
    <section
      id="skills"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
          Expertise
        </p>

        <h2 className="heading text-7xl md:text-8xl">
          SKILLS
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 leading-8">
          Technologies and tools I use to build responsive,
          scalable and modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">

          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;