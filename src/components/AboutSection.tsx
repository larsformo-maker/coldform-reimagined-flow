
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const whyChooseUs = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Performance-Based",
      description: "Only pay for actual qualified meetings booked. No retainers or setup fees."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Decision-Makers Only", 
      description: "We target and book meetings with actual decision-makers ready to talk."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Results",
      description: "Track record of scaling agencies from €0 to €100k+ monthly revenue."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Coldform Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-4">
            Why <span className="gradient-text">Coldform?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-electric-100 text-electric-600 rounded-2xl mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                {item.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Lars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-6">
              About <span className="gradient-text">Coldform</span>
            </h2>
            
            <div className="space-y-6 text-lg text-navy-600 leading-relaxed">
              <p>
                <strong className="text-navy-900">Hey! I'm Lars</strong>, the founder & owner of coldform.
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
                That's why I wanted to go back out on my own. Creating a model and agency that's much more sustainable, both for clients and myself. We work on a <strong className="text-navy-900">performance-based model</strong>, only charging for actual results generated, minimizing the risk for you.
              </p>

              <p>
                Which I believe is a much better structure for a long, successful partnership than ridiculously high setup fees or retainers.
              </p>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white">
                Book a call with Lars
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-electric-500 to-navy-600 p-8 rounded-2xl text-white">
              <div className="text-6xl mb-4">👋</div>
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let's chat about how we can fill your calendar with qualified meetings.
              </p>
              <div className="text-sm opacity-80">
                - Lars, Founder of Coldform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
