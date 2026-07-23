import { ArrowRight, Award } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { features } from "@/data/features";

export function Features() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Why SJD Elite</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            The complete{" "}
            <span className="text-gold-gradient">academy experience</span>
          </h2>
          <p className="mt-4 text-white/60">
            Five pillars that shape every player who walks through our gates.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="glass-card gold-border-glow hover-lift group h-full rounded-2xl p-7">
                <div className="mb-5 inline-flex rounded-xl bg-gradient-gold p-3 text-primary-foreground shadow-gold transition-transform group-hover:scale-110">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.4}>
            <a
              href="#programs"
              className="hover-lift flex h-full flex-col justify-between rounded-2xl bg-gradient-gold p-7 text-primary-foreground"
            >
              <div>
                <Award size={24} />
                <h3 className="mt-5 font-display text-xl font-bold">
                  Ready to level up?
                </h3>
                <p className="mt-2 text-sm opacity-80">
                  Explore programs across every age group and ability.
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                See programs <ArrowRight size={16} />
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
