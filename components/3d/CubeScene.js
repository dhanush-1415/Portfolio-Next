import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ position, color, wobble }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState([1, 1, 1]);
  const [currentColor, setCurrentColor] = useState(color);
  
  // Animate with useFrame
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
      mesh.current.rotation.y += 0.01;
      
      // Handle hover animation
      if (hovered) {
        setScale([
          THREE.MathUtils.lerp(scale[0], 1.2, 0.1),
          THREE.MathUtils.lerp(scale[1], 1.2, 0.1),
          THREE.MathUtils.lerp(scale[2], 1.2, 0.1)
        ]);
        setCurrentColor(new THREE.Color(currentColor).lerp(new THREE.Color('#FFD700'), 0.1).getStyle());
      } else {
        setScale([
          THREE.MathUtils.lerp(scale[0], 1, 0.1),
          THREE.MathUtils.lerp(scale[1], 1, 0.1),
          THREE.MathUtils.lerp(scale[2], 1, 0.1)
        ]);
        setCurrentColor(new THREE.Color(currentColor).lerp(new THREE.Color(color), 0.1).getStyle());
      }
    }
  });

  return (
    <mesh 
      ref={mesh}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.1} smoothness={4}>
        <MeshWobbleMaterial 
          color={currentColor} 
          factor={wobble ? 0.5 : 0} 
          speed={wobble ? 1 : 0}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
    </mesh>
  );
};

const CubeScene = ({ cubeColor, wobble, isDarkMode }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight 
        position={[0, 5, 5]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1}
        castShadow 
      />
      
      <AnimatedShape 
        position={[0, 0, 0]} 
        color={cubeColor} 
        wobble={wobble}
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
};

export default CubeScene;