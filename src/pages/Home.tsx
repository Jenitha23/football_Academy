import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { Coaches } from "@/components/sections/Coaches";
import { News } from "@/components/sections/News";
import { Testimonials } from "@/components/sections/Testimonials";
import { JoinBanner } from "@/components/sections/JoinBanner";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Programs />
        <Stats />
        <Gallery />
        <Coaches />
        <News />
        <Testimonials />
        <JoinBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
