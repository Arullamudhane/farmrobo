import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden pt-20 border-t border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
                FarmRobo
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Revolutionizing agriculture with autonomous robotic solutions and cutting-edge technology.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {['Hybrid Drone', 'Battery Drone', 'Mini Bot', 'R1'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Career', 'About', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <Mail size={16} className="text-orange-500" />
                info@farmrobo.in
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-2 text-gray-400"
              >
                <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Patancheruvu, Hyderabad,<br />India - 502319</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 FarmRobo. All rights reserved.
            </div>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;