import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Gallery from "@/components/landing/Gallery";
import {Testimonials} from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";

export default function HomePage() {
  return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
      </div>
  );
}