import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface MiniBotPageProps {
  onPurchase: () => void;
}

const MiniBotPage = ({ onPurchase }: MiniBotPageProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source src="https://player.vimeo.com/external/451837085.sd.mp4?s=ff4123c14303dd7c52214af8b292bee3ee628926&profile_id=164" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-6 font-['Space_Grotesk'] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  MINI BOT
                </span>
                <br />
                <span className="text-4xl text-gray-400">
                  QUANTUM SERIES X-1
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-light">
                Advanced autonomous micro-robotics with quantum processing capabilities
              </p>
              <div className="flex gap-6">
                <motion.button
                  onClick={onPurchase}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-blue-600 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors group"
                >
                  Configure & Order
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 border border-blue-500 rounded-full hover:bg-blue-500/20 transition-colors"
                >
                  Technical Specs
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniBotPage;