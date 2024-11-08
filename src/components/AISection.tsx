import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Cpu, Network, Lock, Zap, LineChart } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced deep learning models for autonomous decision making"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Real-time processing at the edge for instant responses"
  },
  {
    icon: Network,
    title: "Distributed Systems",
    description: "Scalable architecture for fleet management"
  },
  {
    icon: Lock,
    title: "Secure Operations",
    description: "Enterprise-grade security protocols"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Millisecond decision making capabilities"
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Future-proof farming decisions"
  }
];

const AISection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  // Generate more particles with increased visibility
  const particles = [...Array(50)].map(() => ({
    size: Math.random() * 4 + 3, // Larger size range (3-7px)
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 10 + 8, // Slower movement (8-18s)
  }));

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-32">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
        >
          <source src="https://player.vimeo.com/external/451837085.sd.mp4?s=ff4123c14303dd7c52214af8b292bee3ee628926&profile_id=164" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Enhanced Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle at center, rgb(34 197 94 / 1), rgb(34 197 94 / 0.4))`,
              boxShadow: `0 0 ${particle.size * 3}px rgb(34 197 94 / 0.8)`,
              filter: 'blur(0.5px)',
            }}
            initial={{ 
              x: particle.initialX,
              y: particle.initialY,
              opacity: 0 
            }}
            animate={{
              x: [particle.initialX, particle.initialX + (Math.random() * 300 - 150)],
              y: [particle.initialY, particle.initialY + (Math.random() * 300 - 150)],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 0.8, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1]
            }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [transform-origin:0_0] [animation:grid_6s_linear_infinite]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            Cutting Edge Technology
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Integrated with Advanced AI & Software Stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/0 rounded-xl group-hover:from-green-500/20 group-hover:to-green-500/5 transition-all duration-500" />
              <div className="relative p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors duration-500">
                <div className="mb-6">
                  <tech.icon className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {tech.description}
                </p>
                
                {/* Tech decorations */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-green-500/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border border-green-500/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100px);
          }
        }
      `}</style>
    </div>
  );
};

export default AISection;