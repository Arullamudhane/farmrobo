import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    title: "Autonomous Navigation",
    description: "Advanced GPS and computer vision systems work in harmony to deliver precise navigation across any terrain. Our AI-powered pathfinding ensures optimal coverage while avoiding obstacles.",
    icon: "🛰️",
  },
  {
    title: "IoT Integration",
    description: "Seamlessly connect with your entire farming ecosystem through our advanced IoT platform. Monitor real-time data, control operations remotely, and receive intelligent insights.",
    icon: "📡",
  },
  {
    title: "Smart Analytics",
    description: "Harness the power of AI to transform raw data into actionable farming insights. Our analytics engine provides predictive maintenance, yield optimization, and resource management.",
    icon: "📊",
  },
  {
    title: "Precision Control",
    description: "Experience unmatched accuracy with our centimeter-level precision control system. Perfect for row crops, specialized farming, and complex field operations.",
    icon: "🎯",
  },
  {
    title: "24/7 Operation",
    description: "Maximize efficiency with round-the-clock autonomous operation. Our advanced lighting and sensing systems ensure safe and productive farming at any hour.",
    icon: "⚡",
  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
          Advanced Features
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500/20 p-4 rounded-full hover:bg-orange-500/40 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500/20 p-4 rounded-full hover:bg-orange-500/40 transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          <div className="overflow-hidden px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-2xl p-16 backdrop-blur-sm min-h-[600px] border border-white/10"
              >
                <div className="text-8xl mb-8">{features[currentIndex].icon}</div>
                <h3 className="text-4xl font-bold mb-8 text-orange-500">
                  {features[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {features[currentIndex].description}
                </p>
                
                {/* Tech decoration */}
                <div className="absolute top-8 right-8 w-32 h-32 border border-orange-500/20 rounded-full" />
                <div className="absolute bottom-8 left-8 w-32 h-32 border border-green-500/20 rounded-full" />
                <div className="absolute top-1/2 right-16 w-1 h-32 bg-gradient-to-b from-orange-500/20 to-transparent" />
                <div className="absolute top-1/2 left-16 w-1 h-32 bg-gradient-to-b from-green-500/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;