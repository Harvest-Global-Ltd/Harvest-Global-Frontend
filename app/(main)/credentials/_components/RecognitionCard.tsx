import Image from "next/image";
import type { CredentialRecognition } from "@/data";

interface RecognitionCardProps {
  item: CredentialRecognition;
}

export default function RecognitionCard({ item }: RecognitionCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-neutral-950/70 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50">
      <div className="absolute top-0 inset-x-0 z-10 h-px bg-linear-to-r from-transparent via-[#E46A2A]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {item.image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#E46A2A]/90">
              <span className="h-1 w-1 rounded-md bg-[#E46A2A]/80" />
              {item.category}
            </span>
            {item.year && (
              <span className="rounded-md border border-white/10 bg-[#123C2B]/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-white/70 backdrop-blur-sm">
                {item.year}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {!item.image && (
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#E46A2A]/80">
              <span className="h-1 w-1 rounded-md bg-[#E46A2A]/80" />
              {item.category}
            </span>
            {item.year && (
              <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500">
                {item.year}
              </span>
            )}
          </div>
        )}

        <h3 className="text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-500 line-clamp-3">
          {item.description}
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-white/6 pt-4">
          <span className="h-1 w-1 rounded-md bg-[#E46A2A]/50" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
            Verified
          </span>
        </div>
      </div>
    </article>
  );
}