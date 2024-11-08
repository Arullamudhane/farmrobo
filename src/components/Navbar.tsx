import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { title: 'About Us', href: '/#about' },
  { title: 'Mini Bot', href: '/mini-bot' },
  { title: 'Hybrid Drone', href: '/#hybrid-drone' },
  { title: 'Battery Drone', href: '/#battery-drone' },
  { title: 'R1', href: '/#r1' },
  { title: 'Career', href: '/#career' },
  { title: 'Contact', href: '/#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500"
              >
                FarmRobo
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href.replace(/^\/#/, '/')}
                  onClick={() => handleNavClick(item.href)}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item.title}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Tech decoration */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-lg z-50 lg:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col p-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href.replace(/^\/#/, '/')}
              onClick={() => handleNavClick(item.href)}
            >
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.1 }}
                className="block text-gray-300 hover:text-white py-3 border-b border-white/10 transition-colors duration-300 cursor-pointer"
              >
                {item.title}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile menu decorations */}
        <div className="absolute top-4 right-4 w-32 h-32 border border-orange-500/10 rounded-full" />
        <div className="absolute bottom-4 left-4 w-32 h-32 border border-green-500/10 rounded-full" />
      </motion.div>
    </>
  );
};

export default Navbar;