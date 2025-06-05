
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const whyChooseUs = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Performance-Based",
      description: "Only pay for actual qualified meetings booked. No retainers or setup fees."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Decision-Makers Only", 
      description: "We target and book meetings with actual decision-makers ready to talk."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Results",
      description: "Track record of scaling agencies from €0 to €100k+ monthly revenue."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Coldform Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHY <span className="text-green-400">COLDFORM?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-700 p-8 rounded-2xl hover:border-green-400/50 transition-all duration-300 text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-400/10 text-green-400 rounded-2xl mb-6 mx-auto group-hover:bg-green-400/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Lars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ABOUT <span className="text-green-400">COLDFORM</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Hey! I'm Lars</strong>, the founder & owner of coldform.
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

            <div className="mt-8">
              <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-full">
                Book a call with Lars
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-green-500 p-8 rounded-2xl text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">👋</div>
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's chat about how we can fill your calendar with qualified meetings.
                </p>
                <div className="text-sm font-semibold">
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
