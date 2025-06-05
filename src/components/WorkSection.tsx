import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "A comprehensive financial dashboard with real-time analytics and intuitive user experience.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "Full-Stack Development",
      description: "Modern e-commerce solution with seamless checkout and inventory management.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      featured: false
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Secure and user-friendly mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "OAuth", "Push Notifications"],
      featured: false
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "Design & Branding",
      description: "Complete brand identity redesign for a sustainable technology company.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      tags: ["Brand Design", "Logo", "Guidelines", "Print Design"],
      featured: false
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-navy-900 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Project */}
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="lg:col-span-2">
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors duration-300"></div>
                  </div>
                  
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-electric-500 font-medium mb-2">{project.category}</div>
                    <h3 className="text-3xl font-playfair font-semibold text-navy-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-navy-600 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Button>
                      <Button variant="outline" size="lg" className="border-navy-300 text-navy-700 hover:bg-navy-50">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => !project.featured).map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-colors duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-electric-500 font-medium mb-2 text-sm">{project.category}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-navy-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-navy-100 text-navy-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-electric-500 hover:bg-electric-600 text-white">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="border-navy-300 text-navy-700">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-navy-300 text-navy-700 hover:bg-navy-50">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
