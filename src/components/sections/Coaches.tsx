import { Facebook, Instagram, Linkedin } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { coaches } from "@/data/coaches";

const socialIcons = [Instagram, Facebook, Linkedin];

export function Coaches() {
  return (
    <section id="coaches" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Our Team</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            Meet our <span className="text-gold-gradient">coaches</span>
          </h2>
          <p className="mt-4 text-white/60">
            World-class coaches from top academies and pro leagues.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {coaches.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.1}>
              <div className="hover-lift group relative overflow-hidden rounded-3xl bg-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="relative -mt-16 p-6">
                  <div className="text-xs uppercase tracking-widest text-primary">
                    {c.role}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    {c.name}
                  </h3>
                  <div className="mt-1 text-sm text-white/60">{c.exp}</div>
                  <div className="mt-4 flex gap-2">
                    {socialIcons.map((Icon, k) => (
                      <a
                        key={k}
                        href="#"
                        className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                        aria-label="social"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
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
