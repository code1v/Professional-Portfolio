function FloatingBadge({
  title,
  color,
  top,
  left,
  right,
  bottom,
}) {
  return (
    <div
      className={`absolute ${color}
rounded-full
px-5
py-3
text-sm
font-semibold
text-white
shadow-2xl
border
border-white/20
backdrop-blur-xl
hover:scale-110
transition
animate-pulse
float
glow`}
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      {title}
    </div>
  );
}

export default FloatingBadge;