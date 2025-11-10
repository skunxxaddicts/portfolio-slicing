import { Hero } from '@/components/sections/hero';
import { Intro } from '@/components/sections/intro';
import { Features } from '@/components/sections/features';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';
import { Experience } from '@/components/sections/experience';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { FAQCTATransition } from '@/components/sections/faq-cta-transition';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Intro />
      <Features />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <FAQ />
      <FAQCTATransition />
      <CTA />
      <Footer />
    </div>
  );
}
