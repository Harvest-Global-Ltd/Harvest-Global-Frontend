import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "emerald" | "orange";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  accent = "emerald",
  className,
}: SectionHeaderProps) {
  const dotColor =
    accent === "orange" ? "bg-[#E46A2A]" : "bg-[#E46A2A]";

  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className={cn("inline-block h-1.5 w-1.5 rounded-md", dotColor)} />
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white leading-[1.1] sm:text-5xl md:text-4glxl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
