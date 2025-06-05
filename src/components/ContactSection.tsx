
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "lars@coldform.agency",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Book a Call",
      content: "Schedule directly",
      description: "Pick a time that works for you"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            BOOK A <span className="text-green-400">CALL</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to fill your calendar with qualified meetings? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-card border border-border shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-6 text-foreground">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-foreground mb-2 text-lg">Your Name *</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-foreground mb-2 text-lg">Your Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-foreground mb-2 text-lg">Company Name</label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Enter your company name (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-foreground mb-2 text-lg">Tell us about your project *</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your business and what you're looking to achieve..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold text-xl py-6 group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-foreground">Get in touch</h3>
              <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                We're here to help you fill your calendar with qualified meetings. Whether you have specific questions 
                or want to explore how we can work together, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card border border-border p-6 rounded-xl hover:border-green-400/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-400/20 text-green-400 rounded-xl">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-green-400 font-medium mb-1 text-lg">
                        {info.content}
                      </p>
                      <p className="text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-green-400 rounded-2xl p-8 text-black">
              <h4 className="text-2xl font-bold mb-4">
                Ready to get started?
              </h4>
              <p className="text-lg mb-6 opacity-90">
                Book a free consultation call to discuss your lead generation needs and how we can help fill your calendar.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4">
                Schedule a Call with Lars
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
