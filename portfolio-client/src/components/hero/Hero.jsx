import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import CodeWindow from "./CodeWindow";
import FloatingBadge from "./FloatingBadge";
import { portfolio } from "../../data/portfolioData";

function Hero() {
  const { personal } = portfolio;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#090909] flex items-center"
    >
      {/* Background */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <div>

            <p className="uppercase tracking-[8px] text-blue-500 text-sm font-semibold mb-5">
              {personal.subtitle}
            </p>

            <h1 className="heading leading-none">

              <span className="block text-[85px] md:text-[130px] lg:text-[175px]">
                FULL
              </span>

              <span className="block text-[85px] md:text-[130px] lg:text-[175px] text-white">
                STACK
              </span>

              <span className="block mt-2 text-[32px] md:text-[45px] tracking-[10px] text-blue-500">
                DEVELOPER
              </span>

            </h1>

            <p className="mt-10 max-w-xl text-gray-400 text-lg leading-9">

              {personal.description}

            </p>

            {/* Buttons */}

            <HeroButtons />

            {/* Stats */}

            <HeroStats />

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative flex justify-center">

            <CodeWindow />

            {/* Floating Badges */}

            <FloatingBadge
              title="React"
              color="bg-sky-500"
              top="5%"
              left="-35px"
            />

            <FloatingBadge
              title="Node.js"
              color="bg-green-500"
              top="68%"
              left="-25px"
            />

            <FloatingBadge
              title="Express"
              color="bg-yellow-500"
              top="15%"
              right="-25px"
            />

            <FloatingBadge
              title="Tailwind"
              color="bg-cyan-500"
              bottom="-15px"
              left="35%"
            />

            <FloatingBadge
              title="REST API"
              color="bg-pink-500"
              bottom="80px"
              right="-25px"
            />

            {/* Terminal */}

            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-72 rounded-2xl border border-gray-800 bg-[#111] p-5 shadow-xl backdrop-blur-xl">

              <p className="font-mono text-green-400">
                &gt; npm run dev
              </p>

              <p className="mt-2 text-xs text-gray-500">
                ✔ Portfolio Running
              </p>

              <p className="text-xs text-gray-500">
                ✔ React + Express
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <span className="text-xs tracking-[5px] uppercase text-gray-500">
          Scroll
        </span>

        <div className="mt-2 h-10 w-[2px] bg-blue-500 animate-pulse"></div>

      </div>

    </section>
  );
}

export default Hero;