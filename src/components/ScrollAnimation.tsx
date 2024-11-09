// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const ScrollAnimation = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 70%", "end start"]
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

//   return (
//     <div 
//       ref={containerRef}
//       className="h-[60vh] bg-black relative overflow-hidden"
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
//       </div>

//       {/* Tech grid lines */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
//         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
//       </div>

//       {/* Animated Road */}
//       <div className="absolute left-0 right-0 bottom-0 h-20">
//         {/* Road base */}
//         <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-green-900/30 to-transparent">
//           {/* Animated lines */}
//           <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_45%,rgba(34,197,94,0.3)_50%,transparent_55%,transparent_100%)] bg-[length:200px_100%] animate-[roadMove_2s_linear_infinite]" />
          
//           {/* Road glow */}
//           <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent blur-sm" />
          
//           {/* Tech lines */}
//           <div className="absolute top-0 left-0 right-0 h-px bg-green-500/30" />
//           <div className="absolute bottom-0 left-0 right-0 h-px bg-green-500/30" />
//         </div>

//         {/* Road reflection */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-green-500/5 to-transparent" />
//       </div>

//       {/* Moving tractor */}
//       <motion.div
//         style={{ x, opacity, scale }}
//         className="absolute  top-[21%] -translate-y-1/2 w-full flex items-center justify-center"
//       >
//         <div className="relative">
//           <img 
//             src="/01.png" 
//             alt="Autonomous Tractor"
//             className="w-[600px] h-auto"
//           />
          
//           {/* Tech HUD elements */}
//           <div className="absolute -top-4 left-1/4 w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />
//           <div className="absolute -bottom-4 right-1/4 w-px h-16 bg-gradient-to-t from-green-500/30 to-transparent" />
          
//           {/* Status indicators */}
//           <div className="absolute top-4 left-4 flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//             <span className="text-xs font-mono text-green-500">SYSTEM.ACTIVE</span>
//           </div>
          
//           {/* Scanning effect */}
//           {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-[scan_2s_ease-in-out_infinite]" /> */}

//           {/* Ground reflection */}
//           <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-8 bg-green-500/20 blur-xl" />
//         </div>
//       </motion.div>

//       <style>{`
//         @keyframes scan {
//           0%, 100% { transform: translateX(-100%); }
//           50% { transform: translateX(100%); }
//         }
//         @keyframes roadMove {
//           0% { background-position: 200px 0; }
//           100% { background-position: 0 0; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ScrollAnimation;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Adjust the opacity of the text based on the scroll progress.
  // It will fade out the text as the car reaches the center and moves away.
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 0, 0]);

  return (
    <div 
      ref={containerRef}
      className="h-[60vh] bg-black relative overflow-hidden"
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

      {/* Center Text */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white text-center"
      >
        <span>Welcome to the Future! <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500"
              >
                FarmRobo
              </motion.div></span>
      </motion.div>

      {/* Animated Road */}
      <div className="absolute left-0 right-0 bottom-0 h-20">
        {/* Road base */}
        <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-green-900/30 to-transparent">
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
        className="absolute  top-[21%] -translate-y-1/2 w-full flex items-center justify-center"
      >
        <div className="relative">
          <img 
            src="/01.png" 
            alt="Autonomous Tractor"
            className="w-[600px] h-auto"
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
        @keyframes scan {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        @keyframes roadMove {
          0% { background-position: 200px 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};

export default ScrollAnimation;
