function HeroBackground() {
  return (
    <>
      {/* Main Glow */}
      <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[180px]" />

      {/* Small Glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
        `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Radial Overlay */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#090909_75%)]"></div>

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 0.8px, transparent 0.8px)",
          backgroundSize: "18px 18px",
        }}
      ></div>
    </>
  );
}

export default HeroBackground;