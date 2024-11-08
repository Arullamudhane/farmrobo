import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const configurations = [
  {
    image: "/tractor.png",
    title: "AUTONOMOUS TRACTOR",
    description: "Next-Generation Robotic Farming"
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
    title: "FIELD OPERATIONS",
    description: "AI-Powered Navigation System"
  },
  {
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80",
    title: "PRECISION CONTROL",
    description: "High-Precision GPS Guidance"
  }
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black/95 py-32 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-500/10 animate-pulse" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
            Advanced Configurations
          </h2>
          <p className="text-gray-400 mt-6 text-xl">
            Experience the future of autonomous farming
          </p>
        </motion.div>

        {/* Horizontal scrolling container */}
        <motion.div 
          style={{ x }}
          className="flex gap-8 pl-[15%]"
        >
          {configurations.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group min-w-[500px]"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-black rounded-xl overflow-hidden border border-white/10">
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={config.image}
                    alt={config.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  {/* Tech lines decoration */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-24 h-[1px] bg-orange-500/30" />
                    <div className="absolute top-0 left-0 w-[1px] h-24 bg-orange-500/30" />
                    <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-green-500/30" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-24 bg-green-500/30" />
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold tracking-wider text-white mb-2">
                      {config.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {config.description}
                    </p>
                  </motion.div>
                </div>

                {/* Tech overlay elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-16 h-16 border border-orange-500/20 rounded-full" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border border-green-500/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech decoration elements */}
        <div className="absolute -bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <div className="absolute -top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </div>
    </div>
  );
};

export default Gallery;