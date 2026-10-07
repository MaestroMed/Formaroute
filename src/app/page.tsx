import { Hero } from '@/components/sections/Hero';
import { Activities } from '@/components/sections/Activities';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { PhotoStrip } from '@/components/sections/PhotoStrip';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Activities />
      <Services />
      <PhotoStrip />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
