interface RoadmapItem {
  year: string;
  title: string;
  description: string;
  icon:
    | "layers"
    | "server"
    | "cpu"
    | "chart"
    | "globe"
    | "satellite"
    | "orbit";
  accent: "emerald" | "orange" | "indigo";
}
export default function RoadmapCard({ item }: { item: RoadmapItem }) {
  return (
    <article
      className="group relative min-h-[190px] rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/[0.09]"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <span
            className={`text-sm font-semibold tracking-widest ${
              item.accent === "orange"
                ? "text-[#E46A2A]"
                : "text-[#5FAF82]"
            }`}
          >
            {item.year}
          </span>

          <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
            {item.title}
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/60 md:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}