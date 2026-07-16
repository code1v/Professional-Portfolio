import { portfolio } from "../../data/portfolioData";
import AboutCard from "./AboutCard";

function About() {
  const { personal, about } = portfolio;

  const cards = [
    {
      title: "Education",
      value: "B.Tech Computer Engineering",
    },
    {
      title: "University",
      value: "MM(DU), Mullana",
    },
    {
      title: "CGPA",
      value: "8.66",
    },
    {
      title: "Experience",
      value: "Frontend Developer Intern",
    },
    {
      title: "Location",
      value: "Saharanpur, UP",
    },
    {
      title: "Focus",
      value: "Full Stack Development",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[8px] text-blue-500 text-sm">
          About
        </p>

        <h2 className="heading text-7xl md:text-8xl mt-3">
          ABOUT ME
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 mt-16">

          {/* LEFT */}

          <div>

            <p className="text-gray-400 leading-9 text-lg">

              {about.description}

            </p>

            <div className="mt-10 border-l-4 border-blue-500 pl-6">

              <h3 className="text-3xl font-semibold text-white">

                {personal.name}

              </h3>

              <p className="mt-3 text-gray-400">

                {personal.title}

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {cards.map((card, index) => (

              <AboutCard
                key={index}
                title={card.title}
                value={card.value}
              />

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;