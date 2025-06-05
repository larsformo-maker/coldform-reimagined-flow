
import { Users, Target, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Onboarding & Setup",
      description: "Fill out your onboarding form so we can understand your business and set up the technical infrastructure for maximum deliverability."
    },
    {
      step: "02", 
      title: "Strategy & Campaign Creation",
      description: "We schedule a kickoff call to brainstorm markets and angles, then create your lead lists and initial campaigns."
    },
    {
      step: "03",
      title: "Launch & Book Meetings",
      description: "After approval, we launch campaigns and start booking qualified leads directly into your calendar."
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Monthly check-ins and campaign adjustments to maximize performance and keep your calendar full."
    }
  ];

  return (
    <section id="process" className="min-h-screen flex items-center justify-center py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            OUR <span className="text-green-400">PROCESS</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            A proven 4-step process to fill your calendar with qualified meetings from decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border border-border bg-card hover:-translate-y-2">
              <CardContent className="p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-green-400 text-black rounded-xl flex items-center justify-center font-bold text-xl mr-4">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Step connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-400/30"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black font-semibold px-10 py-5 text-xl rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
