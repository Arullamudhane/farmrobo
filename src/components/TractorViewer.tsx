import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const TractorViewer = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 h-[500px] bg-black/50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls />
          {/* Add your GLB model here using useGLTF */}
        </Canvas>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 p-12"
      >
        <h2 className="text-4xl font-bold mb-6 text-orange-500">
          Meet FarmroboTech
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Our autonomous tractor combines cutting-edge robotics with advanced IoT technology to revolutionize farming operations. With precision GPS navigation and AI-powered decision making, it operates 24/7 while reducing labor costs and environmental impact.
        </p>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Autonomous Operation
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Real-time Monitoring
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Precision Agriculture
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default TractorViewer;