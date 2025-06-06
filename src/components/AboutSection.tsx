
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

  const whyChooseUs = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Performance-Based",
      description: "Only pay for actual qualified meetings booked. No retainers or setup fees."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Decision-Makers Only", 
      description: "We target and book meetings with actual decision-makers ready to talk."
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Proven Results",
      description: "Track record of scaling agencies from €0 to €100k+ monthly revenue."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-100 via-blue-50/80 to-slate-50 dark:from-slate-900 dark:via-blue-950/50 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Coldform Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            WHY <span className="text-green-400">COLDFORM?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 rounded-2xl hover:border-green-400/50 transition-all duration-300 text-center group shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-green-400/10 text-green-400 rounded-2xl mb-4 mx-auto group-hover:bg-green-400/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Lars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              ABOUT <span className="text-green-400">LARS</span>
            </h2>
            
            <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
              <p>
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
                That's why I wanted to go back out on my own. Creating a model and agency that's much more sustainable, both for clients and myself. We work on a <strong className="text-green-400">performance-based model</strong>, only charging for actual results generated, minimizing the risk for you.
              </p>

              <p>
                Which I believe is a much better structure for a long, successful partnership than ridiculously high setup fees or retainers.
              </p>
            </div>

            <div className="mt-6">
              <Button 
                size="lg" 
                onClick={handleBookCall}
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-10 py-5 text-xl rounded-full"
              >
                Book a call with Lars
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-green-500 p-8 rounded-2xl text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4">👋</div>
                <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Let's chat about how we can fill your calendar with qualified meetings.
                </p>
                <div className="text-lg font-semibold">
                  - Lars, Founder of Coldform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
