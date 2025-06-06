
import { Mail, Phone, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleSmoothScroll = (href: string) => {
    // If we're not on the home page and trying to access a section, go to home first
    if (location.pathname !== '/' && href.startsWith('#')) {
      window.location.href = '/' + href;
      return;
    }
    
    // If we're on the home page, smooth scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const footerLinks = {
    services: [
      { label: 'Lead Generation', href: '#process' },
      { label: 'Outbound Campaigns', href: '#process' },
      { label: 'Meeting Booking', href: '#process' },
      { label: 'Performance Marketing', href: '#process' },
    ],
    company: [
      { label: 'About Lars', href: '/about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Success Stories', href: '#work' },
      { label: 'Lead Gen Tips', href: '#process' },
      { label: 'Book a Call', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/company/coldform', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/coldform', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/coldform', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com/coldform', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="text-4xl font-bold">coldform</Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-lg">
              Performance-based lead generation. Only pay for qualified meetings with decision-makers ready to talk business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">lars@coldform.agency</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-green-400 text-gray-300 hover:text-black rounded-lg transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleSmoothScroll(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleSmoothScroll(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleSmoothScroll(link.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg mb-4 md:mb-0">
              © 2025 coldform. All rights reserved.
            </p>
            <div className="flex space-x-6 text-lg">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
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
