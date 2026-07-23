import { Counter } from "@/components/common/Counter";
import { FadeIn } from "@/components/common/FadeIn";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-card gold-border-glow rounded-3xl px-8 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1} className="text-center">
                <Counter value={s.value} />
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  {s.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
