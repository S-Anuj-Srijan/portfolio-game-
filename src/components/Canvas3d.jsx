// src/components/Canvas3D.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import '../styles/mainaboutme.css';

function Model() {
  const { scene } = useGLTF('/models/4.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Slow rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

function Canvas3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  return (
    <motion.div
      className="canvas-wrapper"
      style={{
        rotateX,
        rotateY,
        backgroundPosition: "center",
      }}
      onMouseMove={(e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        const newX = (clientX - left) / width;
        const newY = (clientY - top) / height;
        x.set(newX);
        y.set(newY);
      }}
    >
      <Canvas
        style={{ width: '100%', height: '400px', background: 'transparent' }}
        camera={{ position: [0, 1.5, 5], fov: 50 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
}

export default Canvas3D;
