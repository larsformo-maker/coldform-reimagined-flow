
import { Award, Users, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description: "Award-winning designs and development recognized by industry leaders"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled professionals with diverse expertise and proven track records"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and support"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cutting-Edge Tech",
      description: "Leveraging the latest technologies to deliver future-proof solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-6">
              Crafting Digital
              <span className="block gradient-text">Experiences</span>
              <span className="block">That Matter</span>
            </h2>
            
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              At Coldform Agency, we believe that exceptional digital experiences are born from the perfect 
              blend of strategy, creativity, and technology. Our team of passionate designers and developers 
              work collaboratively to transform your vision into reality.
            </p>

            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              Since our founding, we've been dedicated to pushing the boundaries of what's possible in 
              digital design and development. We don't just create websites and apps – we craft experiences 
              that connect, engage, and convert.
            </p>

            <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-electric-100 text-electric-600 rounded-xl mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-navy-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team values */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-playfair font-semibold text-navy-900 mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-navy-900 mb-3">Precision</h4>
              <p className="text-navy-600">
                Every pixel, every line of code, and every interaction is crafted with meticulous attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold text-navy-900 mb-3">Innovation</h4>
              <p className="text-navy-600">
                We embrace emerging technologies and creative solutions to stay ahead of industry trends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-navy-900 mb-3">Partnership</h4>
              <p className="text-navy-600">
                Your success is our success. We work as an extension of your team to achieve shared goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
