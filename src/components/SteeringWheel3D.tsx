'use client';

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, RoundedBox, Torus, Cylinder } from "@react-three/drei";
import * as THREE from "three";

const SteeringWheel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.y * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.y * 0.2,
        0.05
      );
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        setMousePosition({
          x: (e.point.x / 5),
          y: (e.point.y / 5)
        });
      }}
    >



      <Cylinder args={[0.5, 0.5, 0.15, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.02}
        />
      </Cylinder>

      <Cylinder args={[0.3, 0.3, 0.16, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.95}
          roughness={0.05}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Cylinder>

      {[0, 120, 240].map((angle, i) => (
        <group key={i}>
          <mesh
            position={[
              Math.cos((angle * Math.PI) / 180) * 1.2,
              Math.sin((angle * Math.PI) / 180) * 1.2,
              0
            ]}
            rotation={[0, 0, (angle * Math.PI) / 180]}
          >
            <boxGeometry args={[0.15, 1.5, 0.12]} />
            <meshStandardMaterial
              color="#0d0d0d"
              metalness={0.85}
              roughness={0.15}
            />
          </mesh>

          <mesh
            position={[
              Math.cos((angle * Math.PI) / 180) * 1.2,
              Math.sin((angle * Math.PI) / 180) * 1.2,
              0.08
            ]}
            rotation={[0, 0, (angle * Math.PI) / 180]}
          >
            <boxGeometry args={[0.12, 1.45, 0.04]} />
            <meshStandardMaterial
              color="#1a1a1a"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        </group>
      ))}


      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={`grip-${i}`}
            position={[
              Math.cos(angle) * 2,
              Math.sin(angle) * 2,
              0.15
            ]}
            rotation={[Math.PI / 2, 0, angle]}
          >
            <cylinderGeometry args={[0.03, 0.03, 0.05, 8]} />
            <meshStandardMaterial
              color="#333333"
              metalness={0.4}
              roughness={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export const SteeringWheel3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a9eff" />
        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />

        <SteeringWheel />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};
