import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    url: "/tractor-front.png",
    title: "FarmRobo Mini Bot",
    description: "Next-gen autonomous tractor",
    className: "col-span-2 row-span-2",
    isMain: true
  },
  {
    url: "./blade.png",
    title: "Crop Blades",
    description: "Smart field operations",
    className: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
    title: "Smart Farming",
    description: "AI-powered systems",
    className: "col-span-1 row-span-2"
  },
  {
    url: "/sprayer.png",
    title: "Sprayers",
    description: "Advanced robotics",
    className: "col-span-1 row-span-1"
  },
  {
    url: "./rotavator.png",
    title: "Field Operations",
    description: "Precision control",
    className: "col-span-2 row-span-1"
  },
  {
    url: "./farm2.png",
    title: "Future Farming",
    description: "Next-gen technology",
    className: "col-span-1 row-span-1"
  }
];

const PhotoCollage = () => {
  return (
    <div className="min-h-screen bg-black py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
            Innovation in Action
          </h2>
          <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">
            Explore our cutting-edge autonomous farming solutions
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-4 auto-rows-[200px] gap-0.5 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${photo.className}`}
            >
              {/* Green overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
              
              <div className="relative h-full overflow-hidden bg-gray-900">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className={`w-full h-full object-cover ${photo.isMain ? 'object-cover' : ''}`}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transform group-hover:-translate-y-2 transition-transform duration-500"
                  >
                    {/* Tech elements */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <div className="text-xs font-mono text-green-500/70 group-hover:text-green-400 transition-colors duration-300">
                        
                      </div>
                    </div>

                    <motion.h3 
                      className={`font-bold text-white mb-1 transition-all duration-500 ${
                        photo.isMain ? 'text-2xl group-hover:text-3xl' : 'text-lg group-hover:text-xl'
                      }`}
                    >
                      {photo.title}
                    </motion.h3>
                    <motion.p 
                      className={`text-gray-300 transition-all duration-500 ${
                        photo.isMain ? 'text-base group-hover:text-lg' : 'text-sm group-hover:text-base'
                      } opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
                    >
                      {photo.description}
                    </motion.p>

                    {/* Animated tech decorations */}
                    <div className="absolute top-2 right-2 w-8 h-8 border border-green-500/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 border border-green-500/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  </motion.div>
                </div>

                {/* Tech HUD elements */}
                <div className="absolute top-2 left-2 text-xs font-mono text-white/30 group-hover:text-green-500/70 transition-colors duration-300">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
                <div className="absolute top-2 right-2 flex gap-0.5">
                  <div className="w-1 h-1 bg-green-500/50 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-green-500/50 rounded-full animate-pulse delay-75" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-green-500/30 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-green-500/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
