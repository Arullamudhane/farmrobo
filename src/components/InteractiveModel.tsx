import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const { scene, nodes, materials } = useGLTF(url);
  const [scale, setScale] = useState(1);

  // Use effect to increase the size of the model after loading
  useEffect(() => {
    setScale(1.6);  // Set a slightly larger scale
  }, []);

  return <primitive object={scene} scale={scale} />;
}

const InteractiveModel = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] bg-gradient-to-br from-red-500/10 to-red-500/10 rounded-2xl overflow-hidden border border-white/10"
          >
            <Canvas
              camera={{ position: [5, 2, 5], fov: 50 }}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.3} />
              <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} color="#ff4c4c" />
              <pointLight position={[-10, -10, -10]} color="#ff4c4c" intensity={0.5} />
              <pointLight position={[10, -10, 10]} color="#ff4c4c" intensity={0.5} />
              <Environment preset="park" background />

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

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-500">
              Interactive Experience
            </h2>
            <p className="text-xl text-gray-300">
              Explore our autonomous farming solutions in stunning 3D detail. Rotate, zoom, and examine every aspect of our cutting-edge technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-gray-300">Drag to rotate the model</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-gray-300">Scroll to zoom in/out</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-gray-300">Right-click to pan</span>
              </div>
            </div>

            {/* Tech decorations */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-red-500/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default InteractiveModel;



// speeed control



// up


// ----
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import * as THREE from 'three';

// // Define props type for the Model component
// interface ModelProps {
//   url: string;
// }

// function Model({ url }: ModelProps) {
//   // Load the GLTF model and check if scene is available
//   const gltf = useGLTF(url);

//   if (!gltf || !gltf.scene) {
//     console.error("Failed to load GLTF model.");
//     return null; // Placeholder if model fails to load
//   }

//   // Update materials to make them respond to light better
//   gltf.scene.traverse((child) => {
//     if ((child as THREE.Mesh).isMesh) {
//       const mesh = child as THREE.Mesh;
//       const material = mesh.material as THREE.MeshPhysicalMaterial;
      
//       // Safely access and modify the material properties
//       if (material && 'color' in material) {
//         material.color = new THREE.Color(0xffffff);
//         material.roughness = 0.5;
//         material.metalness = 0.8;
//         material.clearcoat = 0.2;
//       }
//     }
//   });

//   return <primitive object={gltf.scene} />;
// }

// const InteractiveModel: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden py-32">
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* 3D Model Viewer */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[600px] bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-2xl overflow-hidden border border-white/10"
//           >
//             <Canvas
//               camera={{ position: [5, 2, 5], fov: 50 }}
//               gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
//               onCreated={({ gl }) => {
//                 gl.toneMappingExposure = 1.3; // Adjust exposure for brightness
//               }}
//             >
//               <ambientLight intensity={0.3} />
//               <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} color="#ffdf80" />
//               <pointLight position={[-10, -10, -10]} color="#ff6b00" intensity={0.5} />
//               <pointLight position={[10, -10, 10]} color="#22c55e" intensity={0.5} />

//               {/* Load HDR environment for realistic reflections */}
//               <Environment preset="sunset" background />

//               <Model url="/models/minibot2.glb" />

//               <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={0.5} />
//             </Canvas>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
//               Interactive Experience
//             </h2>
//             <p className="text-xl text-gray-300">
//               Explore our autonomous farming solutions in stunning 3D detail. Rotate, zoom, and examine every aspect of our cutting-edge technology.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full" />
//                 <span className="text-gray-300">Drag to rotate the model</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 <span className="text-gray-300">Scroll to zoom in/out</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                 <span className="text-gray-300">Right-click to pan</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InteractiveModel;


// Forest
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import * as THREE from 'three';

// // Define props type for the Model component
// interface ModelProps {
//   url: string;
// }

// function Model({ url }: ModelProps) {
//   // Load the GLTF model and check if scene is available
//   const gltf = useGLTF(url);

//   if (!gltf || !gltf.scene) {
//     console.error("Failed to load GLTF model.");
//     return null; // Placeholder if model fails to load
//   }

//   // Update materials to make them respond to light better
//   gltf.scene.traverse((child) => {
//     if ((child as THREE.Mesh).isMesh) {
//       const mesh = child as THREE.Mesh;
//       const material = mesh.material as THREE.MeshPhysicalMaterial;
      
//       // Safely access and modify the material properties
//       if (material && 'color' in material) {
//         material.color = new THREE.Color(0xffffff);
//         material.roughness = 0.5;
//         material.metalness = 0.8;
//         material.clearcoat = 0.2;
//       }
//     }
//   });

//   return <primitive object={gltf.scene} />;
// }

// const InteractiveModel: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden py-32">
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* 3D Model Viewer */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[600px] bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-2xl overflow-hidden border border-white/10"
//           >
//             <Canvas
//               camera={{ position: [5, 2, 5], fov: 50 }}
//               gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
//               onCreated={({ gl }) => {
//                 gl.toneMappingExposure = 1.3; // Adjust exposure for brightness
//               }}
//             >
//               <ambientLight intensity={0.3} />
//               <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} color="#ffdf80" />
//               <pointLight position={[-10, -10, -10]} color="#ff6b00" intensity={0.5} />
//               <pointLight position={[10, -10, 10]} color="#22c55e" intensity={0.5} />

//               {/* Load HDR environment for realistic reflections */}
//               <Environment preset="park" background />

//               <Model url="/models/minibot2.glb" />

//               <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={0.5} />
//             </Canvas>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
//               Interactive Experience
//             </h2>
//             <p className="text-xl text-gray-300">
//               Explore our autonomous farming solutions in stunning 3D detail. Rotate, zoom, and examine every aspect of our cutting-edge technology.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full" />
//                 <span className="text-gray-300">Drag to rotate the model</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 <span className="text-gray-300">Scroll to zoom in/out</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                 <span className="text-gray-300">Right-click to pan</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InteractiveModel;



// park zoomout
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import * as THREE from 'three';

// // Define props type for the Model component
// interface ModelProps {
//   url: string;
// }

// function Model({ url }: ModelProps) {
//   // Load the GLTF model and check if the scene is available
//   const { scene } = useGLTF(url);

//   if (!scene) {
//     console.error("Failed to load GLTF model.");
//     return null;
//   }

//   // Update materials to make them respond to light better
//   scene.traverse((child) => {
//     if ((child as THREE.Mesh).isMesh) {
//       const mesh = child as THREE.Mesh;
//       const material = mesh.material as THREE.MeshStandardMaterial;

//       // Safely access and modify the material properties
//       material.color = new THREE.Color(0xffffff);
//       material.roughness = 0.5;
//       material.metalness = 0.8;
//     }
//   });

//   return <primitive object={scene} />;
// }

// const InteractiveModel: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden py-32">
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* 3D Model Viewer */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[600px] bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-2xl overflow-hidden border border-white/10"
//           >
//             <Canvas
//               camera={{ position: [5, 2, 5], fov: 50 }}
//               gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
//               onCreated={({ gl }) => {
//                 gl.toneMappingExposure = 1.3; // Adjust exposure for brightness
//               }}
//             >
//               <ambientLight intensity={0.3} />
//               <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} color="#ffdf80" />
//               <pointLight position={[-10, -10, -10]} color="#ff6b00" intensity={0.5} />
//               <pointLight position={[10, -10, 10]} color="#22c55e" intensity={0.5} />
              

//               {/* HDR environment for realistic reflections */}
//               <Environment preset="park" background />

//               {/* Model loader with suspense for loading state */}
//               <Suspense fallback={null}>
//                 <Model url="/models/minibot2.glb" />
//               </Suspense>

//               <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={0.5} />
//             </Canvas>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
//               Interactive Experience
//             </h2>
//             <p className="text-xl text-gray-300">
//               Explore our autonomous farming solutions in stunning 3D detail. Rotate, zoom, and examine every aspect of our cutting-edge technology.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full" />
//                 <span className="text-gray-300">Drag to rotate the model</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 <span className="text-gray-300">Scroll to zoom in/out</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                 <span className="text-gray-300">Right-click to pan</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InteractiveModel;









// final

// import React, { Suspense, useRef, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment, Line } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import * as THREE from 'three';

// // Define props type for the Model component
// interface ModelProps {
//   url: string;
// }

// function Model({ url }: ModelProps) {
//   // Load the GLTF model and check if the scene is available
//   const { scene } = useGLTF(url);

//   if (!scene) {
//     console.error("Failed to load GLTF model.");
//     return null;
//   }

//   // Update materials to make them respond to light better
//   scene.traverse((child) => {
//     if ((child as THREE.Mesh).isMesh) {
//       const mesh = child as THREE.Mesh;
//       const material = mesh.material as THREE.MeshStandardMaterial;

//       // Safely access and modify the material properties
//       material.color = new THREE.Color(0xffffff);
//       material.roughness = 0.5;
//       material.metalness = 0.8;
//     }
//   });

//   return <primitive object={scene} />;
// }

// const InteractiveModel: React.FC = () => {
//   const lineRef = useRef<THREE.Line>(null);

//   useEffect(() => {
//     if (lineRef.current) {
//       // Update line positions if needed
//       const line = lineRef.current;
//       // Modify line logic if necessary, but this setup will create the green ray
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden py-32">
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* 3D Model Viewer */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[600px] bg-gradient-to-br from-orange-500/10 to-green-500/10 rounded-2xl overflow-hidden border border-white/10"
//           >
//             <Canvas
//               camera={{ position: [2.5, 2, 3], fov: 45 }} // Adjusted for zoom-in effect
//               gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
//               onCreated={({ gl }) => {
//                 gl.toneMappingExposure = 1.3; // Adjust exposure for brightness
//               }}
//             >
//               <ambientLight intensity={0.3} />
//               <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} color="#ffdf80" />
//               <pointLight position={[-10, -10, -10]} color="#ff6b00" intensity={0.5} />
//               <pointLight position={[10, -10, 10]} color="#22c55e" intensity={0.5} />

//               <pointLight position={[10, -10, 10]} color="#22c55e" intensity={1} />

//               {/* HDR environment with lowered opacity */}
//               <Environment preset="park" background={true}>
//                 <meshBasicMaterial attach="background" color="black" opacity={0.2} transparent />
//               </Environment>

//               {/* Line component to create a green ray */}
//               {/* <Line
//                 ref={lineRef}
//                 points={[
//                   new THREE.Vector3(-2, -2, 0), // Starting point (corner 1)
//                   new THREE.Vector3(2, 2, 0), // Ending point (corner 2)
//                 ]}
//                 color="green"
//                 lineWidth={2}
//                 // Add more points as needed to create rays across all 4 corners
//               /> */}

//               {/* Model loader with suspense for loading state */}
//               <Suspense fallback={null}>
//                 <Model url="/models/minibot2.glb" />
//               </Suspense>

//               <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={0.5} />
//             </Canvas>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">
//               Interactive Experience
//             </h2>
//             <p className="text-xl text-gray-300">
//               Explore our autonomous farming solutions in stunning 3D detail. Rotate, zoom, and examine every aspect of our cutting-edge technology.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-orange-500 rounded-full" />
//                 <span className="text-gray-300">Drag to rotate the model</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-green-500 rounded-full" />
//                 <span className="text-gray-300">Scroll to zoom in/out</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                 <span className="text-gray-300">Right-click to pan</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InteractiveModel;
