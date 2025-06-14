
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50/80 to-slate-50 dark:from-slate-900 dark:via-blue-950/50 dark:to-slate-800"></div>
      
      {/* Background decoration with improved gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/30 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-green-400/5 via-blue-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              ONLY PAY FOR
              <span className="block text-green-400">MEETINGS</span>
              <span className="block text-foreground">THAT MATTER</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              No retainers, no massive setup fees. Only pay for qualified meetings with decision-makers ready to talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black px-10 py-5 text-xl font-semibold rounded-full border-2 border-green-400 group">
                Get Started
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="text-foreground font-semibold text-lg">Lars from Coldform</div>
                    <div className="text-muted-foreground">Lead Generation</div>
                  </div>
                </div>
                <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 text-green-400">
                  Hey! We've just booked a qualified meeting with your ideal prospect!
                </div>
              </div>

              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-green-400 text-black rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl">
                47
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 text-foreground">
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
