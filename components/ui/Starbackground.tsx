function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = mulberry32(2024);

const stars = Array.from({ length: 220 }, (_, i) => ({
  id: i,
  left: random() * 100,
  top: random() * 100,
  size: random() * 2 + 0.5,
  opacity: random() * 0.5 + 0.2,
}));

export default function StarBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-[url('/images/noise.png')] bg-repeat opacity-60 mix-blend-screen"
        aria-hidden="true"
      />
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-md bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}