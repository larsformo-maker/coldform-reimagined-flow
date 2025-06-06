
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const AboutSection = () => {
  const location = useLocation();

  const handleBookCall = () => {
    // If we're not on the home page, go to home page with contact section
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }
    
    // If we're on the home page, smooth scroll to contact
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* About Lars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                ABOUT <span className="text-green-400">LARS</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p className="text-2xl">
                <strong className="text-foreground">Hey! I'm Lars</strong>, the founder & owner of coldform.
              </p>
              
              <p>
                Over the last 18 months, I helped found and grow a lead generation agency from €0-100k/m.
              </p>

              <p>
                But, after scaling to over €100k/m, I decided to leave and start coldform. Why?
              </p>

              <p>
                I didn't agree with the normal models for running a lead gen agency, charging massive setup fees or retainers.
              </p>

              <p>
                That's why I wanted to go back out on my own. Creating a model and agency that's much more sustainable, both for clients and myself. We work on a <strong className="text-green-400 font-semibold">performance-based model</strong>, only charging for actual results generated, minimizing the risk for you.
              </p>

              <p>
                Which I believe is a much better structure for a long, successful partnership than ridiculously high setup fees or retainers.
              </p>
            </div>

            <div className="pt-6">
              <Button 
                size="lg" 
                onClick={handleBookCall}
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a call with Lars
              </Button>
            </div>
          </div>

          <div className="relative lg:mt-16">
            <div className="bg-gradient-to-br from-green-400 to-green-500 p-10 rounded-3xl text-black relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-black/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
              <div className="relative z-10 space-y-6">
                <div className="text-8xl mb-6">👋</div>
                <h3 className="text-4xl font-bold mb-6">Ready to get started?</h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Let's chat about how we can fill your calendar with qualified meetings.
                </p>
                <div className="text-lg font-semibold opacity-80">
                  - Lars, Founder of Coldform
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Coldform Section */}
        <div className="pt-16 border-t border-border/20">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              WHY <span className="text-green-400">COLDFORM?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're different from other agencies. Here's what sets us apart and why clients choose to work with us.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-3xl hover:border-green-400/50 transition-all duration-300 text-center group shadow-lg hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center justify-center w-24 h-24 bg-green-400/10 text-green-400 rounded-3xl mb-6 mx-auto group-hover:bg-green-400/20 transition-colors group-hover:scale-110 duration-300">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                Performance-Based
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Only pay for actual qualified meetings booked. No retainers or setup fees.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl hover:border-green-400/50 transition-all duration-300 text-center group shadow-lg hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center justify-center w-24 h-24 bg-green-400/10 text-green-400 rounded-3xl mb-6 mx-auto group-hover:bg-green-400/20 transition-colors group-hover:scale-110 duration-300">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                Decision-Makers Only
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We target and book meetings with actual decision-makers ready to talk.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl hover:border-green-400/50 transition-all duration-300 text-center group shadow-lg hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center justify-center w-24 h-24 bg-green-400/10 text-green-400 rounded-3xl mb-6 mx-auto group-hover:bg-green-400/20 transition-colors group-hover:scale-110 duration-300">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                Proven Results
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Track record of scaling agencies from €0 to €100k+ monthly revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
