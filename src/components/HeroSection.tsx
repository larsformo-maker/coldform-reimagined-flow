
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-navy-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-semibold text-navy-900 mb-6 leading-tight">
            Only pay for meetings
            <span className="block gradient-text">that matter</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            No retainers, no massive setup fees. Only pay for qualified meetings with decision-makers ready to talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 text-lg group">
              Book a call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Client logos section */}
          <div className="mb-12">
            <p className="text-navy-600 mb-8 text-lg">We've booked meetings with market-leaders like:</p>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-8 max-w-4xl mx-auto opacity-60">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-navy-200 h-12 rounded-lg flex items-center justify-center">
                  <span className="text-navy-400 font-medium text-sm">Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-navy-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
