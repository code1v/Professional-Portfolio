import { portfolio } from "../../data/portfolioData";

function Education() {

  const { education } = portfolio;

  return (

    <section
      id="education"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
          Academic
        </p>

        <h2 className="heading text-7xl md:text-8xl mb-16">
          EDUCATION
        </h2>

        <div className="space-y-8">

          {education.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-[#111] p-8 hover:border-blue-500 transition hover:-translate-y-2 duration-300"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between">

                <div>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-blue-400">
                    {item.institute}
                  </p>

                </div>

                <div className="mt-5 lg:mt-0 text-right">

                  <p className="text-white font-semibold">
                    {item.score}
                  </p>

                  <p className="text-gray-500">
                    {item.year}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Education;