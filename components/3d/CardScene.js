import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const CardMesh = ({ color, text, hoverColor, isDarkMode }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const { size, viewport } = useThree();
  const [currentColor, setCurrentColor] = useState(color);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.08;
      
      // Handle color transition
      if (hovered) {
        setCurrentColor(
          new THREE.Color(currentColor).lerp(
            new THREE.Color(hoverColor), 
            0.1
          ).getStyle()
        );
      } else {
        setCurrentColor(
          new THREE.Color(currentColor).lerp(
            new THREE.Color(color), 
            0.1
          ).getStyle()
        );
      }
    }
  });
  
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={1}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh
        ref={mesh}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <RoundedBox args={[3, 1.8, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color={currentColor}
            roughness={0.3}
            metalness={0.8}
            envMapIntensity={0.8}
          />
        </RoundedBox>
      </mesh>
    </Float>
  );
};

const CardScene = ({ color, hoverColor, text, isDarkMode }) => {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 35 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color={isDarkMode ? '#9370DB' : '#4B0082'} />
      <pointLight position={[0, 0, 2]} intensity={0.5} color={isDarkMode ? '#FFFFFF' : '#000000'} />
      
      <CardMesh 
        color={color}
        hoverColor={hoverColor}
        text={text}
        isDarkMode={isDarkMode}
      />
    </Canvas>
  );
};

export default CardScene;