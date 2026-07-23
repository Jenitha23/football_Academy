import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () =>
    setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn className="text-center">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            Voices of our <span className="text-gold-gradient">champions</span>
          </h2>
        </FadeIn>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card gold-border-glow rounded-3xl p-8 md:p-12"
            >
              <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
                <div className="relative mx-auto">
                  <div className="absolute -inset-2 rounded-full bg-gradient-gold opacity-40 blur-xl" />
                  <img
                    src={t.img}
                    alt={t.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="relative h-32 w-32 rounded-full object-cover ring-4 ring-primary/40 md:h-40 md:w-40"
                  />
                </div>
                <div>
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display text-xl leading-snug text-white md:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-5">
                    <div className="font-display text-lg font-bold text-white">
                      {t.name}
                    </div>
                    <div className="text-sm text-primary">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-primary/40 hover:text-primary"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-white/25"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-primary/40 hover:text-primary"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
