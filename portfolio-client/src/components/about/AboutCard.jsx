function AboutCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,.15)]">
      <p className="text-sm uppercase tracking-[4px] text-blue-400">
        {title}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}

export default AboutCard;