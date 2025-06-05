
import { Code, Palette, Smartphone, TrendingUp, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand & Design",
      description: "Crafting compelling visual identities that resonate with your audience and set you apart from the competition.",
      features: ["Logo Design", "Brand Guidelines", "UI/UX Design", "Visual Strategy"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Building fast, secure, and scalable websites that deliver exceptional user experiences across all devices.",
      features: ["Custom Development", "E-commerce", "CMS Integration", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Creating native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Implementing data-driven marketing strategies that increase visibility and drive qualified traffic.",
      features: ["SEO Strategy", "Content Marketing", "Social Media", "Analytics & Reporting"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Developing comprehensive digital roadmaps that align with your business goals and market opportunities.",
      features: ["Market Analysis", "Competitive Research", "Technology Consulting", "Growth Planning"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consulting",
      description: "Providing expert guidance to help you navigate digital transformation and optimize your technology stack.",
      features: ["Technical Audits", "Process Optimization", "Team Training", "Strategic Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions designed to elevate your brand and drive sustainable growth in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-electric-100 text-electric-600 rounded-2xl mb-6 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-navy-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-navy-700">
                      <div className="w-2 h-2 bg-electric-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
