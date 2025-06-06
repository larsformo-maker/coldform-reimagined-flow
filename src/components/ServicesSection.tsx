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
    <section id="process" className="min-h-screen flex items-center justify-center py-16 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-slate-100/50 dark:from-slate-800/50 dark:via-blue-900/20 dark:to-slate-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            OUR <span className="text-green-400">PROCESS</span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto animate-fade-in">
            A proven 4-step process to fill your calendar with qualified meetings from decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border border-border bg-card hover:-translate-y-4 hover:scale-105 cursor-pointer animate-fade-in min-h-[320px]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 relative h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-400 text-black rounded-xl flex items-center justify-center font-bold text-2xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed text-lg flex-grow group-hover:text-foreground transition-colors duration-300">
                  {step.description}
                </p>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Step connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-400/30 group-hover:bg-green-400 transition-colors duration-300"></div>
                )}

                {/* Floating animation on hover */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-12 py-6 text-2xl rounded-full hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl animate-fade-in"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
