import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';

function HeroObject() {
  const groupRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouseRef.current.y =
        -((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (!groupRef.current) {
      return;
    }

    const targetRotationX = mouseRef.current.y * 0.45;
    const targetRotationY = mouseRef.current.x * 0.65;

    groupRef.current.rotation.x +=
      (targetRotationX - groupRef.current.rotation.x) * 0.12;

    groupRef.current.rotation.y +=
      (targetRotationY - groupRef.current.rotation.y) * 0.12;
  });

  return (
    <Float
      speed={0.8}
      rotationIntensity={0}
      floatIntensity={0.12}
    >
      <group
        ref={groupRef}
        position={[2.2, 0, 0]}
      >
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />

          <meshStandardMaterial
            color="#111111"
            metalness={0.9}
            roughness={0.18}
          />
        </mesh>

        <mesh scale={1.02}>
          <icosahedronGeometry args={[1.35, 1]} />

          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.65}
          />
        </mesh>
      </group>
    </Float>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-3, -2, 2]}
        intensity={0.8}
      />

      <HeroObject />

      <Environment preset="studio" />
    </Canvas>
  );
}

export default HeroScene;