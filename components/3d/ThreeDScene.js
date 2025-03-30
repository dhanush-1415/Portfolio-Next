import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { resumeData } from '../../utils/resumeData';

// Custom text object using Three.js sprite for better compatibility
const FloatingText = ({ text, position, size = 0.25, color = '#FFD700' }) => {
  const textRef = useRef();
  
  useEffect(() => {
    if (!textRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const fontSize = 64; // Higher for better quality
    canvas.width = 512;
    canvas.height = 128;
    
    // Set canvas background to transparent
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw text
    ctx.font = `bold ${fontSize}px Raleway, Arial, sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    // Apply texture to sprite
    textRef.current.material.map = texture;
    textRef.current.material.needsUpdate = true;
  }, [text, color]);
  
  return (
    <group position={position}>
      <Float 
        speed={2} 
        rotationIntensity={0.2} 
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <sprite 
          ref={textRef}
          scale={[size * 4, size, 1]}
        >
          <spriteMaterial
            transparent={true}
            opacity={1}
            depthTest={false}
            depthWrite={false}
          />
        </sprite>
      </Float>
    </group>
  );
};

// The actual 3D avatar model component that will be rendered inside Canvas
const AvatarModel = ({ isDarkMode }) => {
  const avatarGroup = useRef();
  const { clock } = useThree();
  
  useFrame(() => {
    if (!avatarGroup.current) return;
    
    const elapsedTime = clock.getElapsedTime();
    
    // Rotate the avatar slowly
    avatarGroup.current.rotation.y += 0.002 * (1 + Math.sin(elapsedTime * 0.5) * 0.2);
    avatarGroup.current.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1;
    
    // Breathing/floating animation
    avatarGroup.current.position.y = Math.sin(elapsedTime * 0.8) * 0.1;
    
    // Pulse scale slightly
    const scale = 0.7 + Math.sin(elapsedTime * 1.2) * 0.01;
    avatarGroup.current.scale.set(scale, scale, scale);
  });
  
  // Use different colors based on theme mode
  const primaryColor = isDarkMode ? "#9370DB" : "#4B0082";
  const glowColor = "#9c5bff";
  
  return (
    <group ref={avatarGroup} scale={[0.7, 0.7, 0.7]}>
      {/* Core shape */}
      <mesh>
        <icosahedronGeometry args={[1.8, 4]} />
        <meshPhysicalMaterial 
          color={primaryColor}
          roughness={0.3}
          metalness={0.8}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transmission={0.2}
          reflectivity={0.5}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh>
        <icosahedronGeometry args={[1.85, 4]} />
        <meshBasicMaterial
          color={glowColor}
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Orbital rings */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh rotation={[Math.PI / 2, Math.PI / 6, 0]}>
          <torusGeometry args={[2.8, 0.02, 16, 100]} />
          <meshBasicMaterial color={glowColor} transparent={true} opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
          <torusGeometry args={[2.5, 0.03, 16, 100]} />
          <meshBasicMaterial color="#7c4dff" transparent={true} opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      </Float>
      
      {/* Orbital objects */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[2.8, 0, 0]}>
          <icosahedronGeometry args={[0.2, 1]} />
          <meshPhysicalMaterial color={glowColor} roughness={0.3} metalness={0.8} clearcoat={0.5} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-1.4, 2.0, 0.5]}>
          <icosahedronGeometry args={[0.2, 1]} />
          <meshPhysicalMaterial color="#7c4dff" roughness={0.3} metalness={0.8} clearcoat={0.5} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.7} floatIntensity={0.7}>
        <mesh position={[0, -2.4, 1.0]}>
          <icosahedronGeometry args={[0.2, 1]} />
          <meshPhysicalMaterial color="#5d36be" roughness={0.3} metalness={0.8} clearcoat={0.5} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[1.4, 1.2, -2.0]}>
          <icosahedronGeometry args={[0.2, 1]} />
          <meshPhysicalMaterial color="#4b2e99" roughness={0.3} metalness={0.8} clearcoat={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

// Particles system for atmosphere
const ParticleField = ({ count = 300, color = "#9c5bff", size = 0.08, radius = 2.5 }) => {
  const points = useRef();
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
    }
  });
  
  // Create particles in a spherical distribution
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  
  const threeColor = new THREE.Color(color);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const r = radius + (Math.random() * 0.5);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);
    
    // Color variation
    colors[i3] = threeColor.r * (1 + (Math.random() * 0.2 - 0.1));
    colors[i3 + 1] = threeColor.g * (1 + (Math.random() * 0.2 - 0.1));
    colors[i3 + 2] = threeColor.b * (1 + (Math.random() * 0.2 - 0.1));
    
    // Size variation
    sizes[i] = size * (1 + Math.random() * 0.5);
  }
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

// Lighting setup
const Lighting = ({ isDarkMode }) => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        color={isDarkMode ? "#9c5bff" : "#ffffff"}
        castShadow
      />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.6}
        color="#7c4dff"
      />
      <spotLight
        position={[0, 5, 0]}
        angle={Math.PI / 6}
        penumbra={0.2}
        distance={10}
        intensity={0.8}
        color="#ffffff"
      />
      <pointLight
        position={[2, 0, 2]}
        intensity={0.8}
        distance={5}
        color="#9c5bff"
      />
      <pointLight
        position={[-2, 0, -2]}
        intensity={0.5}
        distance={5}
        color="#4b2e99"
      />
    </>
  );
};

// Orbiting skills component
const SkillsOrbit = ({ skills, radius, height, color, size, rotationSpeed, isDarkMode }) => {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed;
    }
  });
  
  return (
    <group ref={group}>
      {skills.map((skill, index) => {
        const angle = (index * Math.PI * 2) / skills.length;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = height + Math.sin(angle * 2) * 0.2; // Vary height slightly
        
        return (
          <FloatingText 
            key={skill.name} 
            text={skill.name} 
            position={[x, y, z]} 
            size={size} 
            color={color}
          />
        );
      })}
    </group>
  );
};

// Resume info component
const ResumeInfo = ({ isDarkMode }) => {
  // Get personal info from resume data
  const { name, title } = resumeData.personalInfo;
  
  // Using actual group positioning instead of nested positioning
  return (
    <>
      <FloatingText 
        text={name} 
        position={[0, 3.6, 0]} 
        size={0.4} 
        color="#FFD700" 
      />
      <FloatingText 
        text={title} 
        position={[0, 3.2, 0]} 
        size={0.25} 
        color={isDarkMode ? "#ffffff" : "#000000"} 
      />
    </>
  );
};

// Main scene component
const ThreeDScene = ({ isDarkMode }) => {
  // Get skill data from resume
  const frontendSkills = resumeData.frontendSkills.slice(0, 4);
  const backendSkills = resumeData.backendSkills.slice(0, 4);
  
  // Colors based on theme
  const primaryColor = isDarkMode ? "#9370DB" : "#4B0082";
  const secondaryColor = "#FFD700";
  const textColor = isDarkMode ? "#ffffff" : "#000000";
  
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <Lighting isDarkMode={isDarkMode} />
      <AvatarModel isDarkMode={isDarkMode} />
      
      {/* Skills orbits */}
      <SkillsOrbit 
        skills={frontendSkills} 
        radius={3.5} 
        height={0.8} 
        color={secondaryColor} 
        size={0.25} 
        rotationSpeed={0.08}
        isDarkMode={isDarkMode}
      />
      
      <SkillsOrbit 
        skills={backendSkills} 
        radius={3.2} 
        height={-0.8} 
        color={secondaryColor} 
        size={0.25} 
        rotationSpeed={-0.05}
        isDarkMode={isDarkMode}
      />
      
      {/* Resume information */}
      <ResumeInfo isDarkMode={isDarkMode} />
      
      {/* Core skill badges */}
      <FloatingText text="React Expert" position={[2.5, 2.2, 0]} size={0.3} color={secondaryColor} />
      <FloatingText text="App Wizard" position={[-2.5, 1.8, 0]} size={0.25} color={secondaryColor} />
      <FloatingText text="UI/UX Designer" position={[2, -2, 0]} size={0.25} color={secondaryColor} />
      <FloatingText text="Full Stack Dev" position={[-2, -2.2, 0]} size={0.3} color={secondaryColor} />
      
      {/* Particle effects */}
      <ParticleField count={300} color="#9c5bff" size={0.08} radius={2.1} />
      <ParticleField count={500} color="#7c4dff" size={0.05} radius={2.5} />
      <ParticleField count={100} color="#ffffff" size={0.1} radius={3.0} />
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
};

export default ThreeDScene;