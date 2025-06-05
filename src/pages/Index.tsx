
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SectionBreak from '@/components/SectionBreak';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SectionBreak variant="gradient" />
      <ServicesSection />
      <SectionBreak variant="dots" />
      <WorkSection />
      <SectionBreak variant="line" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
