
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-green-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ONLY PAY FOR
              <span className="block text-green-400">MEETINGS</span>
              <span className="block text-white">THAT MATTER</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              No retainers, no massive setup fees. Only pay for qualified meetings with decision-makers ready to talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black px-8 py-4 text-lg font-semibold rounded-full border-2 border-green-400 group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Client logos section */}
            <div className="mb-12">
              <p className="text-gray-400 mb-8 text-lg">We've booked meetings with market-leaders like:</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl opacity-60">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-700 h-12 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">Logo</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">Lars from Coldform</div>
                    <div className="text-gray-400 text-sm">Lead Generation</div>
                  </div>
                </div>
                <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-3 text-green-400 text-sm">
                  Hey! We've just booked a qualified meeting with your ideal prospect!
                </div>
              </div>

              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-green-400 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                47
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white text-sm">
                Meetings Booked
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-green-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
