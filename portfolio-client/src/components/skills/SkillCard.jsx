function SkillCard({ skill }) {
  return (
    <div
      className="group rounded-2xl border border-gray-800 bg-[#111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,.2)]"
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-600/15 text-2xl font-bold text-blue-400 mx-auto">
        {skill.charAt(0)}
      </div>

      <h3 className="mt-5 text-center text-lg font-semibold text-white">
        {skill}
      </h3>
    </div>
  );
}

export default SkillCard;