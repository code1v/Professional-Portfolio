import { portfolio } from "../../data/portfolioData";
import AboutCard from "./AboutCard";

function About() {
  const { personal, about, experience, education } = portfolio;

  return (
    <section
      id="about"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            About Me
          </p>

          <h2 className="heading text-7xl md:text-8xl">
            WHO I AM
          </h2>

          <p className="mt-8 text-gray-400 leading-9 text-lg">
            {about.description}
          </p>

          <div className="mt-10 border-l-4 border-blue-500 pl-6">

            <h3 className="text-2xl font-semibold">
              {personal.name}
            </h3>

            <p className="mt-2 text-gray-400">
              {personal.title}
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <AboutCard
            title="Education"
            value={education[0].degree}
          />

          <AboutCard
            title="CGPA"
            value={education[0].score}
          />

          <AboutCard
            title="Experience"
            value={experience.role}
          />

          <AboutCard
            title="Location"
            value={personal.location}
          />

        </div>

      </div>
    </section>
  );
}

export default About;