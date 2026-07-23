import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { FadeIn } from "@/components/common/FadeIn";
import { Field } from "@/components/common/Field";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "12 Stadium Way, Elite District, London",
  },
  { icon: Phone, label: "Phone", value: "+44 20 7946 0000" },
  { icon: Mail, label: "Email", value: "hello@sjdelite.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 08:00 – 21:00" },
];

export function Contact() {
  const [status, setStatus] = useState<null | "sent">(null);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl">
            Get in <span className="text-gold-gradient">touch</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn>
            <div className="space-y-4">
              {info.map((i) => (
                <div
                  key={i.label}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5"
                >
                  <div className="rounded-xl bg-gradient-gold p-2.5 text-primary-foreground">
                    <i.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary">
                      {i.label}
                    </div>
                    <div className="mt-1 text-sm text-white/80">{i.value}</div>
                  </div>
                </div>
              ))}
              <div className="gold-border-glow overflow-hidden rounded-2xl">
                <iframe
                  title="Academy location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.14%2C51.5%2C-0.11%2C51.52&amp;layer=mapnik"
                  className="h-64 w-full grayscale-[0.6] contrast-125"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sent");
                setTimeout(() => setStatus(null), 3000);
              }}
              className="glass-card gold-border-glow rounded-3xl p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 …"
                />
                <Field label="Age Group" name="age" placeholder="e.g. 12" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your goals..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
              >
                {status === "sent" ? "Message sent ✓" : "Send Message"}
                {status !== "sent" && <ArrowRight size={16} />}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
