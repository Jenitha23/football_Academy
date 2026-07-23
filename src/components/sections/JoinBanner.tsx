import { ArrowRight } from "lucide-react";

import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import heroStadium from "@/assets/hero-stadium.jpg";

export function JoinBanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-graphite p-12 md:p-20">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroStadium}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
          </div>
          <div className="max-w-2xl">
            <SectionEyebrow>Take the first step</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Become the next{" "}
              <span className="text-gold-gradient">football star</span>
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Join hundreds of players who have unlocked their potential at SJD
              Elite. Register today and start your journey.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
            >
              Register Today <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
