
import { Users, Target, TrendingUp, Calendar, CheckCircle, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Fill out onboarding form",
      description: "We understand more about you and your business to create the perfect strategy."
    },
    {
      step: "02", 
      title: "Setup infrastructure",
      description: "We set up all the technical infrastructure to ensure high deliverability and inbox placement."
    },
    {
      step: "03",
      title: "Kickoff call",
      description: "We brainstorm markets, ideas, and angles to maximize your campaign success."
    },
    {
      step: "04",
      title: "Create campaigns",
      description: "We build your lead lists and initial campaigns based on our strategy session."
    },
    {
      step: "05",
      title: "Launch campaigns",
      description: "Our team launches your first campaigns after final approval."
    },
    {
      step: "06",
      title: "Book qualified meetings",
      description: "We start booking qualified leads directly into your calendar."
    },
    {
      step: "07",
      title: "Optimize & improve",
      description: "Monthly check-ins and campaign adjustments to maximize performance."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            A proven 7-step process to fill your calendar with qualified meetings from decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-electric-500 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">
                    Step {step.step.replace('0', '')}
                  </h3>
                </div>
                
                <h4 className="text-lg font-semibold text-navy-900 mb-3">
                  {step.title}
                </h4>
                
                <p className="text-navy-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
