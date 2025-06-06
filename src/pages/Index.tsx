
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
      <div id="process">
        <ServicesSection />
      </div>
      <SectionBreak variant="dots" />
      <div id="work">
        <WorkSection />
      </div>
      <SectionBreak variant="line" />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
