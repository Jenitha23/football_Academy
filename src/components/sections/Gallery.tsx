import { FadeIn } from "@/components/common/FadeIn";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            Moments that <span className="text-gold-gradient">define us</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {gallery.map((g, i) => (
            <FadeIn key={i} delay={i * 0.05} className={g.span}>
              <div className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl bg-card">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-xs uppercase tracking-widest text-primary">
                    SJD Elite
                  </div>
                  <div className="font-display text-lg font-bold text-white">
                    {g.alt}
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
