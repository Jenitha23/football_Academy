import { ArrowRight, GraduationCap, Trophy, Users } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  { icon: GraduationCap, label: "Elite curriculum" },
  { icon: Users, label: "Small squad focus" },
  { icon: Trophy, label: "Proven results" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <FadeIn>
          <SectionEyebrow>About</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            About <span className="text-gold-gradient">SJD Elite</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            SJD Elite Football Academy is committed to developing talented
            football players through professional coaching, discipline,
            teamwork, and modern training methods. We create confident athletes
            ready for competition and life.
          </p>
          <p className="mt-4 text-white/60">
            Our methodology blends European tactical philosophy with
            high-performance sport science, giving every player the tools to
            succeed on the pitch and beyond it.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {highlights.map((i) => (
              <div key={i.label} className="glass-card rounded-xl p-4">
                <i.icon className="text-primary" size={20} />
                <div className="mt-2 text-xs font-semibold text-white/80">
                  {i.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#programs"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold hover:brightness-110"
          >
            Read More <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" />
            <div className="gold-border-glow relative overflow-hidden rounded-[2rem]">
              <img
                src={aboutTeam}
                alt="SJD Elite academy team on the pitch"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">
                    Class of 2026
                  </div>
                  <div className="font-display text-2xl font-bold text-white">
                    Our future stars
                  </div>
                </div>
                <div className="glass-card rounded-full px-4 py-2 text-xs font-semibold text-white">
                  22 players
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
