"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

function Particles() {
  const count = 1500; // Un poco menos de partículas para mejorar el rendimiento
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * 5; // radius 5
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#E63946"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]} style={{ background: 'transparent' }}>
      <Particles />
    </Canvas>
  );
}
