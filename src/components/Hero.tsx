import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img 
        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
        // src='./intro1.gif'
        alt="Smart Farming"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
              Future of Farming
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Revolutionizing agriculture with autonomous robotic tractors and IoT solutions
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-orange-500 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors"
              >
                Explore Now <ChevronRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 border-2 border-green-500 rounded-full hover:bg-green-500/20 transition-colors"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;