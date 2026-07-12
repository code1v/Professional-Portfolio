function HeroStats() {
  const stats = [
    {
      number: "10+",
      label: "Projects Built",
    },
    {
      number: "8.66",
      label: "CGPA",
    },
    {
      number: "15+",
      label: "Technologies",
    },
    {
      number: "1",
      label: "Internship",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-5">

      {stats.map((item, index) => (

        <div
          key={index}
          className="rounded-2xl border border-gray-800 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500"
        >

          <h2 className="text-4xl font-bold text-blue-400">

            {item.number}

          </h2>

          <p className="mt-2 text-gray-400">

            {item.label}

          </p>

        </div>

      ))}

    </div>
  );
}

export default HeroStats;