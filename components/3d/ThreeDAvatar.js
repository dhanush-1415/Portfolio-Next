// import React from 'react';
// import { motion } from 'framer-motion';
// import { Box, Typography, useTheme } from '@mui/material';
// import { resumeData } from '../../utils/resumeData';

// // Simpler fallback component for 3D scene without using Three.js
// // This provides visual interest without risking crashes
// const ThreeDAvatar = () => {
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === 'dark';
  
//   // Get resume data for display
//   const { name, title } = resumeData.personalInfo;
//   const frontendSkills = resumeData.frontendSkills.slice(0, 4);
//   const backendSkills = resumeData.backendSkills.slice(0, 4);
  
//   return (
//     <Box 
//       sx={{ 
//         width: '100%',
//         height: '100%',
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       {/* Central pulsing orb */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: '12rem',
//           height: '12rem',
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${isDarkMode ? '#9370DB' : '#4B0082'} 0%, rgba(75,0,130,0.2) 70%)`,
//           boxShadow: `0 0 60px 20px ${isDarkMode ? 'rgba(147,112,219,0.3)' : 'rgba(75,0,130,0.3)'}`,
//           zIndex: 1,
//         }}
//       >
//         <Box
//           component={motion.div}
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           sx={{
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//           }}
//         />
//       </Box>
      
//       {/* Name and title */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         sx={{
//           position: 'absolute',
//           top: '25%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           textAlign: 'center',
//           zIndex: 5,
//         }}
//       >
//         <Typography
//           variant="h3"
//           component={motion.h3}
//           sx={{
//             fontWeight: 700,
//             color: '#FFD700',
//             textShadow: `0 0 10px ${isDarkMode ? 'rgba(147,112,219,0.5)' : 'rgba(75,0,130,0.5)'}`,
//             mb: 1,
//           }}
//         >
//           {name}
//         </Typography>
//         <Typography
//           variant="h5"
//           component={motion.h5}
//           sx={{
//             fontWeight: 500,
//             color: isDarkMode ? '#fff' : '#000',
//           }}
//         >
//           {title}
//         </Typography>
//       </Box>
      
//       {/* Orbiting skills */}
//       <Box sx={{ position: 'absolute', inset: 0, zIndex: 2 }}>
//         {/* Frontend skills on top */}
//         {frontendSkills.map((skill, index) => {
//           const angle = (index * (360 / frontendSkills.length)) * (Math.PI / 180);
//           const radius = 140;
//           const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
//           const top = `calc(35% + ${Math.sin(angle) * radius}px)`;
          
//           return (
//             <Box
//               key={skill.name}
//               component={motion.div}
//               initial={{ opacity: 0 }}
//               animate={{ 
//                 opacity: 1,
//                 x: [0, Math.random() * 10 - 5],
//                 y: [0, Math.random() * 10 - 5],
//               }}
//               transition={{ 
//                 opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
//                 x: {
//                   duration: 3 + Math.random(),
//                   repeat: Infinity,
//                   repeatType: 'mirror',
//                   delay: index * 0.2
//                 },
//                 y: {
//                   duration: 4 + Math.random(),
//                   repeat: Infinity,
//                   repeatType: 'mirror',
//                   delay: index * 0.3
//                 }
//               }}
//               sx={{
//                 position: 'absolute',
//                 left,
//                 top,
//                 transform: 'translate(-50%, -50%)',
//                 background: '#FFD700',
//                 color: isDarkMode ? '#000' : '#4B0082',
//                 padding: '6px 12px',
//                 borderRadius: '20px',
//                 fontWeight: 'bold',
//                 fontSize: '0.85rem',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//                 textAlign: 'center',
//                 minWidth: '80px',
//               }}
//             >
//               {skill.name}
//             </Box>
//           );
//         })}
        
//         {/* Backend skills on bottom */}
//         {backendSkills.map((skill, index) => {
//           const angle = (index * (360 / backendSkills.length)) * (Math.PI / 180);
//           const radius = 140;
//           const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
//           const top = `calc(65% + ${Math.sin(angle) * radius}px)`;
          
//           return (
//             <Box
//               key={skill.name}
//               component={motion.div}
//               initial={{ opacity: 0 }}
//               animate={{ 
//                 opacity: 1,
//                 x: [0, Math.random() * 10 - 5],
//                 y: [0, Math.random() * 10 - 5],
//               }}
//               transition={{ 
//                 opacity: { duration: 0.5, delay: 0.4 + index * 0.1 },
//                 x: {
//                   duration: 3 + Math.random(),
//                   repeat: Infinity,
//                   repeatType: 'mirror',
//                   delay: index * 0.2
//                 },
//                 y: {
//                   duration: 4 + Math.random(),
//                   repeat: Infinity,
//                   repeatType: 'mirror',
//                   delay: index * 0.3
//                 }
//               }}
//               sx={{
//                 position: 'absolute',
//                 left,
//                 top,
//                 transform: 'translate(-50%, -50%)',
//                 background: '#FFD700',
//                 color: isDarkMode ? '#000' : '#4B0082',
//                 padding: '6px 12px',
//                 borderRadius: '20px',
//                 fontWeight: 'bold',
//                 fontSize: '0.85rem',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//                 textAlign: 'center',
//                 minWidth: '80px',
//               }}
//             >
//               {skill.name}
//             </Box>
//           );
//         })}
//       </Box>
      
//       {/* Floating badges */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         sx={{
//           position: 'absolute',
//           top: '40%',
//           left: '15%',
//           background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
//           color: '#fff',
//           padding: '8px 16px',
//           borderRadius: '20px',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//           zIndex: 10,
//         }}
//       >
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           React Expert
//         </motion.div>
//       </Box>
      
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         sx={{
//           position: 'absolute',
//           top: '30%',
//           right: '20%',
//           background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
//           color: '#fff',
//           padding: '8px 16px',
//           borderRadius: '20px',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//           zIndex: 10,
//         }}
//       >
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
//         >
//           App Wizard
//         </motion.div>
//       </Box>
      
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//         sx={{
//           position: 'absolute',
//           bottom: '30%',
//           left: '20%',
//           background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
//           color: '#fff',
//           padding: '8px 16px',
//           borderRadius: '20px',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//           zIndex: 10,
//         }}
//       >
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
//         >
//           UI/UX Designer
//         </motion.div>
//       </Box>
      
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 1.2 }}
//         sx={{
//           position: 'absolute',
//           bottom: '35%',
//           right: '15%',
//           background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
//           color: '#fff',
//           padding: '8px 16px',
//           borderRadius: '20px',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//           zIndex: 10,
//         }}
//       >
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 1.8, repeat: Infinity, delay: 0.7 }}
//         >
//           Full Stack Dev
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default ThreeDAvatar;

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '@mui/material';
import { User } from 'lucide-react';

const ThreeDAvatar = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const [isLoaded, setIsLoaded] = useState(false);
  const theme = useTheme();
  
  // Get theme from DOM
  const isDarkMode = theme.palette.mode === 'dark'

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    const aspectRatio = containerRef.current.clientWidth / containerRef.current.clientHeight;
    cameraRef.current = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
    cameraRef.current.position.z = 5;
    cameraRef.current.position.y = 0.5;
    
    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp'
    });
    rendererRef.current.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setClearColor(0x000000, 0);
    rendererRef.current.shadowMap.enabled = true;
    rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current.toneMappingExposure = 1.2;
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create 3D avatar model
    const createAvatarModel = () => {
      if (!sceneRef.current) return;

      // Main avatar group
      const avatarGroup = new THREE.Group();
      
      // Create core shape
      const coreGeometry = new THREE.IcosahedronGeometry(1.8, 4);
      const coreMaterial = new THREE.MeshPhysicalMaterial({ 
        color: isDarkMode ? 0x2a2a42 : 0xf5f5f8,
        roughness: 0.3,
        metalness: 0.8,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        transmission: 0.2, 
        reflectivity: 0.5,
        envMapIntensity: 0.8
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      
      // Add inner glow
      const glowGeometry = new THREE.IcosahedronGeometry(1.85, 4);
      const glowMaterial = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color(0x9c5bff), 
        transparent: true, 
        opacity: 0.15,
        side: THREE.BackSide 
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      
      // Create particle system
      const createParticleSystem = (count, radius, size, color) => {
        const particles = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(count * 3);
        const particleColors = new Float32Array(count * 3);
        const particleSizes = new Float32Array(count);
        
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const r = radius + (Math.random() * 0.5);
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          particlePositions[i3] = r * Math.sin(phi) * Math.cos(theta);
          particlePositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
          particlePositions[i3 + 2] = r * Math.cos(phi);
          
          const colorVariation = 0.2;
          particleColors[i3] = color.r * (1 + (Math.random() * colorVariation - colorVariation/2));
          particleColors[i3 + 1] = color.g * (1 + (Math.random() * colorVariation - colorVariation/2));
          particleColors[i3 + 2] = color.b * (1 + (Math.random() * colorVariation - colorVariation/2));
          
          particleSizes[i] = size * (1 + Math.random() * 0.5);
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
        particles.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
        
        const particleMaterial = new THREE.PointsMaterial({
          size: size,
          transparent: true,
          opacity: 0.8,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          sizeAttenuation: true
        });
        
        return new THREE.Points(particles, particleMaterial);
      };
      
      // Create particle layers
      const innerParticles = createParticleSystem(300, 2.1, 0.08, new THREE.Color(0x9c5bff));
      const outerParticles = createParticleSystem(500, 2.5, 0.05, new THREE.Color(0x7c4dff));
      const sparks = createParticleSystem(100, 3.0, 0.1, new THREE.Color(0xffffff));
      
      // Create orbital rings
      const createRing = (radius, thickness, color, opacity) => {
        const ringGeometry = new THREE.TorusGeometry(radius, thickness, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({ 
          color: color,
          transparent: true,
          opacity: opacity,
          side: THREE.DoubleSide
        });
        return new THREE.Mesh(ringGeometry, ringMaterial);
      };
      
      const ring1 = createRing(2.8, 0.02, new THREE.Color(0x9c5bff), 0.4);
      ring1.rotation.x = Math.PI / 2;
      ring1.rotation.y = Math.PI / 6;
      
      const ring2 = createRing(2.5, 0.03, new THREE.Color(0x7c4dff), 0.3);
      ring2.rotation.x = Math.PI / 3;
      ring2.rotation.z = Math.PI / 4;
      
      // Create orbital objects
      const createOrbitalObject = (icon, position, color) => {
        const orbitGroup = new THREE.Group();
        const baseGeometry = new THREE.IcosahedronGeometry(0.2, 1);
        const baseMaterial = new THREE.MeshPhysicalMaterial({
          color: color,
          roughness: 0.3,
          metalness: 0.8,
          clearcoat: 0.5
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        orbitGroup.add(base);
        orbitGroup.position.copy(position);
        return orbitGroup;
      };
      
      // Position orbital objects
      const orb1 = createOrbitalObject('code', new THREE.Vector3(2.8, 0, 0), 0x9c5bff);
      const orb2 = createOrbitalObject('server', new THREE.Vector3(-1.4, 2.0, 0.5), 0x7c4dff);
      const orb3 = createOrbitalObject('database', new THREE.Vector3(0, -2.4, 1.0), 0x5d36be);
      const orb4 = createOrbitalObject('globe', new THREE.Vector3(1.4, 1.2, -2.0), 0x4b2e99);
      
      // Build avatar group
      avatarGroup.add(core);
      avatarGroup.add(glow);
      avatarGroup.add(innerParticles);
      avatarGroup.add(outerParticles);
      avatarGroup.add(sparks);
      avatarGroup.add(ring1);
      avatarGroup.add(ring2);
      avatarGroup.add(orb1);
      avatarGroup.add(orb2);
      avatarGroup.add(orb3);
      avatarGroup.add(orb4);
      
      avatarGroup.scale.set(0.7, 0.7, 0.7);
      avatarGroup.position.y = 0;
      
      sceneRef.current.add(avatarGroup);
      
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      sceneRef.current.add(ambientLight);
      
      const mainLight = new THREE.DirectionalLight(isDarkMode ? 0x9c5bff : 0xffffff, 1);
      mainLight.position.set(5, 5, 5);
      mainLight.castShadow = true;
      sceneRef.current.add(mainLight);
      
      const rimLight = new THREE.DirectionalLight(0x7c4dff, 0.6);
      rimLight.position.set(-5, 3, -5);
      sceneRef.current.add(rimLight);
      
      const spotLight = new THREE.SpotLight(0xffffff, 0.8);
      spotLight.position.set(0, 5, 0);
      spotLight.angle = Math.PI / 6;
      spotLight.penumbra = 0.2;
      spotLight.distance = 10;
      sceneRef.current.add(spotLight);
      
      const pointLight1 = new THREE.PointLight(0x9c5bff, 0.8, 5);
      pointLight1.position.set(2, 0, 2);
      sceneRef.current.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(0x4b2e99, 0.5, 5);
      pointLight2.position.set(-2, 0, -2);
      sceneRef.current.add(pointLight2);

      setTimeout(() => setIsLoaded(true), 500);
      
      return avatarGroup;
    };
    
    const avatarGroup = createAvatarModel();
    
    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const delta = clockRef.current.getDelta();
      const elapsedTime = clockRef.current.getElapsedTime();
      
      if (avatarGroup) {
        avatarGroup.rotation.y += 0.002 * (1 + Math.sin(elapsedTime * 0.5) * 0.2);
        avatarGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1;
        
        avatarGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.1;
        avatarGroup.scale.x = 0.7 + Math.sin(elapsedTime * 1.2) * 0.01;
        avatarGroup.scale.y = 0.7 + Math.sin(elapsedTime * 1.2) * 0.01;
        avatarGroup.scale.z = 0.7 + Math.sin(elapsedTime * 1.2) * 0.01;
        
        avatarGroup.children.forEach((child, index) => {
          if (child instanceof THREE.Points) {
            child.rotation.y += delta * 0.1 * (index % 2 === 0 ? 1 : -1);
            child.rotation.z += delta * 0.05 * (index % 2 === 0 ? -1 : 1);
          } else if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
            child.rotation.z += delta * 0.1 * (index % 2 === 0 ? 1 : -1);
            child.rotation.x += delta * 0.1 * (index % 2 === 0 ? 0.5 : -0.5);
          } else if (child instanceof THREE.Group) {
            child.position.x = child.position.x * Math.cos(delta * 0.5) - child.position.z * Math.sin(delta * 0.5);
            child.position.z = child.position.x * Math.sin(delta * 0.5) + child.position.z * Math.cos(delta * 0.5);
            child.rotation.y += delta * 1.0;
          }
        });
      }
      
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(elapsedTime * 0.3) * 0.3;
        cameraRef.current.position.y = 0.5 + Math.sin(elapsedTime * 0.4) * 0.1;
        cameraRef.current.lookAt(0, 0, 0);
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 1s',
        pointerEvents: 'none',
        opacity: isLoaded ? 0 : 1
      }}>
        <div style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          backgroundColor: 'rgba(147, 112, 219, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <User style={{
            width: '56px',
            height: '56px',
            color: '#9370DB',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      </div>
    </div>
  );
};

export default ThreeDAvatar;