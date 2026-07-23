import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { news } from "@/data/news";

export function News() {
  return (
    <section id="news" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Latest News</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
              From the <span className="text-gold-gradient">clubhouse</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-primary hover:brightness-110"
          >
            View all articles →
          </a>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <FadeIn key={n.title} delay={i * 0.1}>
              <a
                href="#"
                className="hover-lift group block overflow-hidden rounded-2xl bg-card"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-primary">
                    {n.date}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-white group-hover:text-primary">
                    {n.title}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-primary">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
