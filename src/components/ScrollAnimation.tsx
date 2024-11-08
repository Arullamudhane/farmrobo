import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end start"]  // Trigger scroll animation when the page reaches mid-screen
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div 
      ref={containerRef}
      className="h-screen bg-green relative overflow-hidden"  // Set the height to 100vh
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      {/* Tech grid lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>

      {/* Animated Road */}
      <div className="absolute left-0 right-0 bottom-0 h-10">
        {/* Road base */}
        <div className="absolute bottom-[200px] left-0 right-0 h-10 bg-gradient-to-t from-green-900/30 to-transparent">
          {/* Animated lines */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_45%,rgba(34,197,94,0.3)_50%,transparent_55%,transparent_100%)] bg-[length:200px_100%] animate-[roadMove_2s_linear_infinite]" />
          
          {/* Road glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent blur-sm" />
          
          {/* Tech lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-green-500/30" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-green-500/30" />
        </div>

        {/* Road reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-green-500/5 to-transparent" />
      </div>

      {/* Moving tractor */}
      <motion.div
        style={{ x, opacity, scale }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full flex items-center justify-center"  // Adjusted positioning
      >
        <div className="relative">
          <img 
            src="/01.png" 
            alt="Autonomous Tractor"
            className="w-[600px] h-[25rem]"
          />
          
          {/* Tech HUD elements */}
          <div className="absolute -top-4 left-1/4 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />
          <div className="absolute -bottom-4 right-1/4 w-px h-16 bg-gradient-to-t from-green-500/30 to-transparent" />
          
          {/* Status indicators */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-green-500">Mr. Mini Bot</span>
          </div>

          {/* Ground reflection */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-8 bg-green-500/20 blur-xl" />
        </div>
      </motion.div>

      <style>{`
        @keyframes roadMove {
          0% { background-position: 200px 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};

export default ScrollAnimation;
