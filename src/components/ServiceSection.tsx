import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, Tool, Cog } from 'lucide-react';

const ServiceSection = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-32">
      {/* Animated background with mechanical elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
        
        {/* Rotating gears background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Cog size={50 + i * 20} className="text-orange-500/30" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
            24/7 Service Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous support and monitoring for uninterrupted farming operations
          </p>
        </motion.div>

        {/* Animated service display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central rotating mechanism */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
          >
            <div className="absolute inset-0 border-4 border-dashed border-orange-500/40 rounded-full" />
            <motion.div
              className="absolute inset-0 border-t-4 border-orange-500/60"
              style={{ borderRadius: "50%" }}
            />
          </motion.div>

          {/* Animated wrenches */}
          {[0, 120, 240].map((rotation, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
              style={{ rotate: `${rotation}deg` }}
            >
              <motion.div
                className="absolute -left-20 top-1/2 -translate-y-1/2"
                animate={{
                  rotate: [-15, 15, -15],
                  x: [-10, 10, -10],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Wrench size={48} className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
              </motion.div>
            </motion.div>
          ))}

          {/* Service text displays */}
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {["24/7 Support", "Expert Team", "Quick Response"].map((text, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4 bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  <Settings size={36} className="text-orange-500" />
                </motion.div>
                <span className="text-xl font-bold text-white text-center">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated status indicator */}
        <motion.div
          className="max-w-xs mx-auto mt-32 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-green-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="mt-2 text-center text-sm text-gray-500 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SYSTEM.OPERATIONAL
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;