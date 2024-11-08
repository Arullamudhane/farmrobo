import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute inset-0 opacity-50"
      >
        <source src="https://player.vimeo.com/external/517090081.hd.mp4?s=60c105876db13ae73a6297219eca455ae4f19019&profile_id=175" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
              Precision Farming
              <br />
              Redefined
            </h2>
            <p className="text-xl text-gray-300">
              Experience the future of agriculture with our autonomous farming solutions. 
              Increase efficiency, reduce costs, and maximize yields with smart technology.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;