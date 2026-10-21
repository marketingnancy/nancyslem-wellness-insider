import { useHalloweenCountdown } from "@/lib/halloween";

/** Big red MIN : SEC countdown for the Halloween variants. Disappears at 0:00. */
export function HalloweenTimer({ title = "Your $89 Halloween price is reserved for", size = "md" }: { title?: string; size?: "md" | "lg" }) {
  const c = useHalloweenCountdown();
  if (c.ended) return null;
  const box = size === "lg" ? "w-20 h-20 text-5xl" : "w-16 h-16 text-4xl";
  return (
    <div className={`rounded-xl border-2 border-red-600 bg-red-50 px-4 py-3 text-center ${c.urgent ? "animate-pulse" : ""}`}>
      <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
        {title}
      </p>
      <div className="mt-2 flex items-start justify-center gap-2">
        {[
          [c.mm, "MIN"],
          [c.ss, "SEC"],
        ].map(([v, l], i) => (
          <div key={l} className="flex items-start gap-2">
            {i > 0 && <span className={`font-mono font-bold text-red-600 ${size === "lg" ? "text-5xl leading-[5rem]" : "text-4xl leading-[4rem]"}`}>:</span>}
            <div className="flex flex-col items-center">
              <span className={`${box} flex items-center justify-center rounded-lg bg-red-600 text-white font-mono font-bold shadow-lg`}>{v}</span>
              <span className="mt-1 text-[10px] font-bold tracking-widest text-red-700">{l}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs font-semibold text-red-700">
        {c.urgent ? "Hurry, your reserved price is almost up." : "Free discreet shipping included while the timer runs."}
      </p>
    </div>
  );
}
