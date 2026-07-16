import { portfolio } from "../../data/portfolioData";

function Experience() {
  const { experience } = portfolio;

  return (
    <section
      id="experience"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
          Career
        </p>

        <h2 className="heading text-7xl md:text-8xl mb-16">
          EXPERIENCE
        </h2>

        <div className="relative border-l-2 border-blue-500 pl-10">

          <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-blue-500"></div>

          <div className="rounded-3xl border border-gray-800 bg-[#111] p-8 hover:border-blue-500 transition">

            <div className="flex flex-col md:flex-row md:justify-between">

              <div>

                <h3 className="text-3xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-2 text-blue-400">
                  {experience.company}
                </p>

              </div>

              <p className="text-gray-500 mt-3 md:mt-0">
                {experience.duration}
              </p>

            </div>

            <p className="mt-8 text-gray-400 leading-8">
              {experience.description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;