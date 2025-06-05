
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'Lead Generation', href: '#' },
      { label: 'Outbound Campaigns', href: '#' },
      { label: 'Meeting Booking', href: '#' },
      { label: 'Performance Marketing', href: '#' },
    ],
    company: [
      { label: 'About Lars', href: '#about' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Success Stories', href: '#' },
      { label: 'Lead Gen Tips', href: '#' },
      { label: 'Book a Call', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:lars@coldform.agency', label: 'Email' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-playfair font-semibold">coldform</span>
            </div>
            <p className="text-navy-300 mb-6 leading-relaxed max-w-md">
              Performance-based lead generation. Only pay for qualified meetings with decision-makers ready to talk.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-navy-800 hover:bg-electric-500 text-navy-300 hover:text-white rounded-lg transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-navy-400 text-sm mb-4 md:mb-0">
              © 2025 coldform. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-navy-400 hover:text-electric-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-navy-400 hover:text-electric-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
