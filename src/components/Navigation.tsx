
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Process', href: '#process' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-foreground">
              cold<span className="text-green-400">form</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.label}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-muted-foreground hover:text-green-400 px-3 py-2 text-lg font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-green-400 px-3 py-2 text-lg font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <ThemeToggle />
              <button
                onClick={() => handleSmoothScroll('#contact')}
                className="ml-4 bg-green-400 hover:bg-green-500 text-black font-semibold text-lg px-6 py-3 rounded-full transition-colors"
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-green-400 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg mt-2 rounded-lg border border-border">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.label}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-muted-foreground hover:text-green-400 block px-3 py-2 text-lg font-medium w-full text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-green-400 block px-3 py-2 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => handleSmoothScroll('#contact')}
                  className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold text-lg rounded-full py-2"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
