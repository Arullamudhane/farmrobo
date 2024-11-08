import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
// import

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene}  scale='1.7'/>;
}

const ModelViewer = () => {
  return (
    // <motion.div 
    //   className="relative w-full h-full bg-black/30 rounded-xl overflow-hidden"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    // >
    //   <Canvas
    //     camera={{ position: [5, 2, 5], fov: 50 }}
    //     style={{ width: '100%', height: '100%' }}
    //   >
    //     <Suspense fallback={null}>
    //       <ambientLight intensity={0.5} />
    //       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
    //       <pointLight position={[-10, -10, -10]} color="#22c55e" intensity={1} />
    //       <Model url="/models/minibot2.glb" />
    //       <OrbitControls 
    //         enableZoom={true}
    //         enablePan={true}
    //         autoRotate={true}
    //         autoRotateSpeed={1}
    //       />
    //     </Suspense>
    //   </Canvas>

    //   {/* Tech overlay */}
    //   <div className="absolute inset-0 pointer-events-none">
    //     {/* Scanning line effect */}
    //     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-scan" />
        
    //     {/* Grid pattern */}
    //     <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
        
    //     {/* Status indicators */}
    //     <div className="absolute top-4 left-4 flex items-center gap-2">
    //       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    //       <span className="text-xs font-mono text-green-500">MODEL.ACTIVE</span>
    //     </div>
        
    //     <div className="absolute top-4 right-4 flex items-center gap-2">
    //       <span className="text-xs font-mono text-green-500">RENDER.QUALITY</span>
    //       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    //     </div>

    //     {/* Tech lines */}
    //     <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-green-500/50 to-transparent" />
    //     <div className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-green-500/50 to-transparent" />
    //   </div>
    // </motion.div>
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative h-[600px] bg-gradient-to-br from-black-500/10 to-red-500/10 rounded-2xl overflow-hidden border border-white/10"
  >
    <Canvas
      camera={{ position: [5, 2, 5], fov: 50 }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} color="#ff4c4c" />
      <pointLight position={[-10, -10, -10]} color="#ff4c4c" intensity={0.5} />
      <pointLight position={[10, -10, 10]} color="#ff4c4c" intensity={0.5} />
      <Environment preset="studio" background />

      <Model url="/models/minibot2.glb" />
     
      <OrbitControls 
        enableZoom={true} 
        enablePan={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
      <gridHelper args={[20, 20, "#ff4c4c", "#1f2937"]} />
    </Canvas>

    {/* Tech overlay elements */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Scanning line effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-scan" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-scan" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/15 to-transparent animate-scan" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,76,76,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,76,76,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
      
      {/* Status indicators */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-xs font-mono text-red-500">MODEL.ACTIVE</span>
      </div>
      
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="text-xs font-mono text-red-500">RENDER.QUALITY</span>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </div>

      {/* Tech lines */}
      <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-red-500/50 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-red-500/50 to-transparent" />
    </div>
  </motion.div>
  );
};

export default ModelViewer;