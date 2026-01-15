import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
