/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress, Environment, useGLTF } from "@react-three/drei";

// Loader while model is loading
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white bg-gray-800 px-4 py-2 rounded shadow-lg">
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
};

// 3D Model component
const Model = ({ modelPath }: { modelPath: string }) => {
  const gltf = useGLTF(modelPath);

  if (!gltf?.scene) {
    console.error("Model failed to load:", modelPath);
    return null;
  }

return React.createElement('primitive' as any, { object: gltf.scene, scale: 1.2 });
};

const ThreeDLayoutViewer: React.FC<{ file: string }> = ({ file }) => {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model modelPath={file} />
          <Environment preset="apartment" />
        </Suspense>
        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  );
};

// Preload the model
useGLTF.preload("/models/low_poly_desert_builing.glb");

export default ThreeDLayoutViewer;
