import React from 'react';
import { motion } from 'framer-motion';
import ModelViewer from '../components/ModelViewer';

const MiniBotPurchase = () => {
  return (
    <div className="min-h-screen bg-black py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Model Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <ModelViewer />
          </motion.div>

          {/* Right side - Purchase Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              MiniBot X1
            </h1>
            
            <p className="text-xl text-gray-300">
              Experience the future of precision farming with our advanced autonomous MiniBot.
            </p>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-8 border border-green-500/20">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-green-400">$29,999</span>
                <span className="text-gray-400">USD</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Includes standard warranty and support</p>
            </div>

            {/* Purchase Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-green-500 rounded-full text-xl font-bold hover:bg-green-600 transition-colors"
            >
              Pre-order Now
            </motion.button>

            {/* Specifications */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-400">Technical Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Operating Range", value: "12 hours" },
                  { label: "Max Speed", value: "15 km/h" },
                  { label: "AI Processing", value: "Neural Engine" },
                  { label: "Navigation", value: "GPS + Computer Vision" },
                  { label: "Battery Type", value: "Li-ion 100kWh" },
                  { label: "Charging Time", value: "2 hours" }
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="bg-black/50 p-4 rounded-lg border border-green-500/20"
                  >
                    <div className="text-sm text-gray-400">{spec.label}</div>
                    <div className="text-lg font-mono text-green-400">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-green-400">Key Features</h2>
              <ul className="space-y-2">
                {[
                  "Autonomous Operation",
                  "Real-time Monitoring",
                  "Advanced Obstacle Avoidance",
                  "Remote Control via Mobile App",
                  "24/7 Support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MiniBotPurchase;