import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { ShieldLogo } from "@/components/common/ShieldLogo";
import { navLinks } from "@/data/navigation";
import { programs } from "@/data/programs";

const socialIcons = [Facebook, Instagram, Youtube, Linkedin];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <ShieldLogo />
          <p className="mt-5 text-sm text-white/60">
            Developing the next generation of football champions with elite
            coaching and world-class facilities.
          </p>
          <div className="mt-5 flex gap-2">
            {socialIcons.map((Icon, k) => (
              <a
                key={k}
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                aria-label="social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Quick Links
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Programs
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            {programs.map((p) => (
              <li key={p.name}>
                <a href="#programs" className="hover:text-primary">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-primary" />
              12 Stadium Way, London
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 text-primary" />
              +44 20 7946 0000
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 text-primary" />
              hello@sjdelite.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-white/40">
          © 2026 SJD Elite Football Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
