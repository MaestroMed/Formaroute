import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { PromoBanner } from '@/components/sections/PromoBanner';

export default function HomePage() {
  return (
    <>
      <PromoBanner />
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
