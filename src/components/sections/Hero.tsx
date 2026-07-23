import { motion } from "motion/react";
import { ArrowRight, Play, Trophy, Zap } from "lucide-react";

import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import heroStadium from "@/assets/hero-stadium.jpg";
import heroPlayers from "@/assets/hero-players.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroStadium}
          alt="Stadium under dramatic floodlights"
          width={1920}
          height={1200}
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pt-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionEyebrow>Elite Football Development</SectionEyebrow>
          </motion.div>

          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
            {["TRAIN.", "PLAY.", "WIN."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block ${i === 2 ? "text-gold-gradient" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 max-w-lg text-lg text-white/70"
          >
            Building Champions On and Off the Pitch. Professional coaching,
            elite facilities, and a proven pathway from grassroots to pro
            football.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
            >
              Join the Academy
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-primary/50 hover:text-primary"
            >
              <Play size={14} /> Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-14 flex items-center gap-8"
          >
            <div>
              <div className="font-display text-3xl font-bold text-primary">
                500+
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                Players Trained
              </div>
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="font-display text-3xl font-bold text-primary">
                10+
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                Years Elite
              </div>
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="font-display text-3xl font-bold text-primary">
                50+
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                Titles Won
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-hero blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <img
            src={heroPlayers}
            alt="Three SJD Elite players in black and gold"
            width={1200}
            height={1400}
            className="relative h-auto w-full drop-shadow-[0_40px_60px_oklch(0_0_0/0.6)]"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card gold-border-glow absolute -left-4 top-10 hidden rounded-2xl p-4 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-gold p-2 text-primary-foreground">
                <Trophy size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Champions
                </div>
                <div className="font-display text-sm font-bold text-white">
                  Regional League 2025
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card gold-border-glow absolute -right-2 bottom-16 hidden rounded-2xl p-4 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-gold p-2 text-primary-foreground">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Live Training
                </div>
                <div className="font-display text-sm font-bold text-white">
                  6 days a week
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
