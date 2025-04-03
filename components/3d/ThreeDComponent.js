import React, { useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import * as THREE from 'three';

const ThreeDElement = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Basic Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // 2. Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ffaa, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // 3. Create Simple 3D Objects
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 32),
      new THREE.TorusGeometry(0.5, 0.2, 16, 32)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      new THREE.MeshBasicMaterial({ color: 0x0000ff }),
      new THREE.MeshBasicMaterial({ color: 0xffff00 })
    ];

    const meshes = geometries.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, materials[i]);
      mesh.position.x = (i % 2 === 0 ? -1 : 1) * 1.5;
      mesh.position.y = (i < 2 ? 1 : -1) * 1.5;
      scene.add(mesh);
      return mesh;
    });

    // 4. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach(mesh => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    // 5. Handle Resize
    const handleResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    // 6. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Grid item xs={12} md={5}>
      <Box
        ref={containerRef}
        sx={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      />
    </Grid>
  );
};

export default ThreeDElement;