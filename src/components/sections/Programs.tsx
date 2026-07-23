import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programs" className="relative py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Programs</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            Pathways for every{" "}
            <span className="text-gold-gradient">ambition</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div className="hover-lift group relative h-full overflow-hidden rounded-2xl bg-card p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-6 -top-6 text-8xl font-black text-white/[0.03]">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="inline-flex rounded-xl bg-white/5 p-3 text-primary ring-1 ring-white/10 transition-all group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                    <p.icon size={22} />
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-[0.25em] text-primary">
                    {p.age}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">{p.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all group-hover:opacity-100">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
