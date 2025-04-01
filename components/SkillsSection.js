// import React from 'react';
// import { Box, Container, Grid, Typography, Paper, useTheme, IconButton, Tooltip } from '@mui/material';
// import { motion } from 'framer-motion';
// import { 
//   Code, 
//   Server, 
//   Database, 
//   Layers, 
//   Palette, 
//   Zap, 
//   GitBranch, 
//   Cloud,
//   Gauge,
//   Network,
//   Box as BoxIcon,
//   CreditCard,
//   TestTube,
//   Flame
// } from 'lucide-react';
// import { fadeIn, staggerContainer } from './ui/animations';
// import { GradientText } from './ui/AnimatedText';
// import AnimatedProgressBar from './ui/AnimatedProgressBar';
// import { resumeData } from '../utils/resumeData';

// const SkillsSection = () => {
//   const theme = useTheme();
//   const { frontendSkills, backendSkills, additionalSkills } = resumeData;

//   // Map icons to the additionalSkills array
//   const getIconForSkill = (iconName) => {
//     const iconSize = 24;
//     const iconMap = {
//       GitBranch: <GitBranch size={iconSize} />,
//       Palette: <Palette size={iconSize} />,
//       Layers: <Layers size={iconSize} />,
//       Cube: <BoxIcon size={iconSize} />,
//       Network: <Network size={iconSize} />,
//       GitMerge: <GitBranch size={iconSize} />,
//       Cloud: <Cloud size={iconSize} />,
//       FlameIcon: <Flame size={iconSize} />,
//       Box: <BoxIcon size={iconSize} />,
//       Gauge: <Gauge size={iconSize} />,
//       Flask: <TestTube size={iconSize} />,
//       CreditCard: <CreditCard size={iconSize} />
//     };

//     return iconMap[iconName] || <Code size={iconSize} />;
//   };

//   return (
//     <Box 
//       id="skills"
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.default,
//       }}
//     >
//       {/* Background decoration */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.05 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         sx={{
//           position: 'absolute',
//           top: '30%',
//           left: '-5%',
//           width: { xs: '300px', md: '500px' },
//           height: { xs: '300px', md: '500px' },
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, rgba(0,0,0,0) 70%)`,
//           filter: 'blur(60px)',
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <motion.div
//           variants={staggerContainer(0.3, 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography
//               variant="overline"
//               component={motion.p}
//               variants={fadeIn('up', 0.2)}
//               sx={{ 
//                 color: theme.palette.secondary.main,
//                 fontWeight: 600,
//                 letterSpacing: 2,
//                 mb: 1
//               }}
//             >
//               MY EXPERTISE
//             </Typography>

//             <GradientText
//               text="Skills & Technologies"
//               variant="h2"
//               sx={{ 
//                 fontWeight: 700,
//                 mb: 3
//               }}
//             />

//             <Typography
//               variant="h6"
//               component={motion.p}
//               variants={fadeIn('up', 0.4)}
//               sx={{ 
//                 maxWidth: '700px',
//                 mx: 'auto',
//                 mb: 6,
//                 color: theme.palette.text.secondary
//               }}
//             >
//               A showcase of my technical abilities and the technologies I work with.
//               Continuously learning and expanding my skill set.
//             </Typography>
//           </Box>

//           <Grid container spacing={6}>
//             {/* Frontend Skills */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 component={motion.div}
//                 variants={fadeIn('right', 0.4)}
//               >
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     p: 4,
//                     height: '100%',
//                     borderRadius: 4,
//                     backgroundColor: theme.palette.mode === 'dark' 
//                       ? 'rgba(255,255,255,0.05)' 
//                       : 'rgba(0,0,0,0.02)',
//                     border: `1px solid ${theme.palette.divider}`,
//                     position: 'relative',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <Box 
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       width: '100%',
//                       height: '5px',
//                       background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                     }}
//                   />

//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
//                     <Box 
//                       sx={{
//                         p: 1,
//                         borderRadius: '50%',
//                         backgroundColor: theme.palette.primary.main,
//                         mr: 2
//                       }}
//                     >
//                       <Code size={24} color="white" />
//                     </Box>
//                     <Typography variant="h5" fontWeight={600}>
//                       Frontend Development
//                     </Typography>
//                   </Box>

//                   <Box>
//                     {frontendSkills.map((skill, index) => (
//                       <AnimatedProgressBar 
//                         key={index}
//                         skill={skill.name} 
//                         percentage={skill.percentage} 
//                         index={index}
//                         delay={0.2 * (index + 1)}
//                       />
//                     ))}
//                   </Box>
//                 </Paper>
//               </Box>
//             </Grid>

//             {/* Backend Skills */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 component={motion.div}
//                 variants={fadeIn('left', 0.4)}
//               >
//                 <Paper
//                   elevation={0}
//                   sx={{
//                     p: 4,
//                     height: '100%',
//                     borderRadius: 4,
//                     backgroundColor: theme.palette.mode === 'dark' 
//                       ? 'rgba(255,255,255,0.05)' 
//                       : 'rgba(0,0,0,0.02)',
//                     border: `1px solid ${theme.palette.divider}`,
//                     position: 'relative',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <Box 
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       width: '100%',
//                       height: '5px',
//                       background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
//                     }}
//                   />

//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
//                     <Box 
//                       sx={{
//                         p: 1,
//                         borderRadius: '50%',
//                         backgroundColor: theme.palette.secondary.main,
//                         mr: 2
//                       }}
//                     >
//                       <Server size={24} color="black" />
//                     </Box>
//                     <Typography variant="h5" fontWeight={600}>
//                       Backend Development
//                     </Typography>
//                   </Box>

//                   <Box>
//                     {backendSkills.map((skill, index) => (
//                       <AnimatedProgressBar 
//                         key={index}
//                         skill={skill.name} 
//                         percentage={skill.percentage} 
//                         index={index}
//                         delay={0.2 * (index + 1)}
//                         color="secondary"
//                       />
//                     ))}
//                   </Box>
//                 </Paper>
//               </Box>
//             </Grid>

//             {/* Additional Skills */}
//             <Grid item xs={12}>
//               <Box
//                 component={motion.div}
//                 variants={fadeIn('up', 0.6)}
//                 sx={{ mt: 4 }}
//               >
//                 <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
//                   Additional Technologies & Tools
//                 </Typography>

//                 <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
//                   {additionalSkills.map((skill, index) => (
//                     <Grid item key={index}>
//                       <Tooltip title={skill.name} arrow>
//                         <Paper
//                           component={motion.div}
//                           whileHover={{ 
//                             y: -10,
//                             boxShadow: theme.palette.mode === 'dark' 
//                               ? '0 10px 20px rgba(0,0,0,0.3)' 
//                               : '0 10px 20px rgba(0,0,0,0.1)'
//                           }}
//                           elevation={0}
//                           sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             width: 80,
//                             height: 80,
//                             borderRadius: 2,
//                             backgroundColor: theme.palette.mode === 'dark' 
//                               ? 'rgba(255,255,255,0.05)' 
//                               : 'rgba(0,0,0,0.02)',
//                             transition: 'all 0.3s ease-in-out',
//                             p: 1,
//                           }}
//                         >
//                           <IconButton
//                             sx={{
//                               color: theme.palette.primary.main,
//                               mb: 1,
//                             }}
//                             disableRipple
//                           >
//                             {getIconForSkill(skill.icon)}
//                           </IconButton>
//                           <Typography 
//                             variant="caption" 
//                             sx={{ 
//                               textAlign: 'center',
//                               lineHeight: 1.2,
//                               fontSize: '0.7rem'
//                             }}
//                           >
//                             {skill.name}
//                           </Typography>
//                         </Paper>
//                       </Tooltip>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default SkillsSection;


import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme, Tooltip, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';
import {
  Code, Server, Database, Layers, Palette, Zap, GitBranch, Cloud,
  Gauge, Network, Box as BoxIcon, CreditCard, TestTube, Flame,
  Cpu, Globe, Shield, Lock, Terminal, Crown, Award, Sparkles
} from 'lucide-react';
import { fadeIn, staggerContainer } from './ui/animations';
import { GradientText } from './ui/AnimatedText';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

const SkillsSection = () => {
  const theme = useTheme();
  const threeContainer = useRef(null);
  const { frontendSkills, backendSkills, devOpsSkills, additionalSkills } = resumeData;

  // Tech-themed color palette
  const techColors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    accent: theme.palette.accent.main,
    glow: theme.palette.mode === 'dark' ? 'rgba(100, 200, 255, 0.5)' : 'rgba(0, 100, 255, 0.3)',
    bg: theme.palette.background.default,
    text: theme.palette.text.primary
  };

  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    work: theme.palette.mode === 'dark' ? '#4fc3f7' : '#0288d1',
    education: theme.palette.mode === 'dark' ? '#81c784' : '#388e3c',
    bg: theme.palette.background.default,
    text: theme.palette.text.primary
  };

  useEffect(() => {
    // Three.js initialization with tech elements
    if (threeContainer.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        threeContainer.current.clientWidth / threeContainer.current.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(threeContainer.current.clientWidth, threeContainer.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      threeContainer.current.appendChild(renderer.domElement);

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(techColors.primary, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      // Create floating tech elements
      const techElements = [];
      const positions = [
        { x: -1.5, y: 1, z: 0 }, // React logo position
        { x: 1.5, y: -1, z: 0 },  // Node.js logo position
        { x: 0, y: 1.5, z: -1 },  // Database position
        { x: 0, y: -1.5, z: 1 }   // Cloud position
      ];

      // Create tech logos as placeholder geometries
      positions.forEach((pos, i) => {
        let geometry;

        // Different shapes for different tech
        if (i === 0) { // React
          geometry = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
        } else if (i === 1) { // Node
          geometry = new THREE.OctahedronGeometry(0.5, 0);
        } else if (i === 2) { // Database
          geometry = new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32);
        } else { // Cloud
          geometry = new THREE.SphereGeometry(0.5, 32, 32);
        }

        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(
            i === 0 ? '#61DAFB' :
              i === 1 ? '#68A063' :
                i === 2 ? techColors.secondary : techColors.accent
          ),
          metalness: 0.7,
          roughness: 0.3,
          emissive: new THREE.Color(techColors.glow),
          emissiveIntensity: 0.3
        });

        const element = new THREE.Mesh(geometry, material);
        element.position.set(pos.x, pos.y, pos.z);
        scene.add(element);
        techElements.push(element);
      });

      // Add central floating tech sphere
      const sphereGeometry = new THREE.SphereGeometry(0.8, 64, 64);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(techColors.primary),
        transparent: true,
        opacity: 0.8,
        wireframe: true,
        emissive: new THREE.Color(techColors.glow),
        emissiveIntensity: 0.5
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      // Add connecting lines
      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(techColors.glow),
        transparent: true,
        opacity: 0.5
      });

      techElements.forEach(element => {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          element.position
        ]);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      });

      camera.position.z = 4;

      // Mouse move interaction
      const handleMouseMove = (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        gsap.to(sphere.rotation, {
          x: mouseY * 0.3,
          y: mouseX * 0.3,
          duration: 1.5
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);

        // Animate tech elements
        techElements.forEach((element, i) => {
          element.rotation.x += 0.005;
          element.rotation.y += 0.01;

          // Gentle floating animation
          element.position.y = positions[i].y + Math.sin(Date.now() * 0.001 + i) * 0.2;
        });

        // Rotate central sphere
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.003;

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = threeContainer.current.clientWidth / threeContainer.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(threeContainer.current.clientWidth, threeContainer.current.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        threeContainer.current.removeChild(renderer.domElement);
      };
    }
  }, [theme]);

  const getIconForSkill = (iconName) => {
    const iconSize = 20;
    const iconMap = {
      GitBranch: <GitBranch size={iconSize} />,
      Palette: <Palette size={iconSize} />,
      Layers: <Layers size={iconSize} />,
      Cube: <BoxIcon size={iconSize} />,
      Network: <Network size={iconSize} />,
      Cloud: <Cloud size={iconSize} />,
      FlameIcon: <Flame size={iconSize} />,
      Gauge: <Gauge size={iconSize} />,
      TestTube: <TestTube size={iconSize} />,
      CreditCard: <CreditCard size={iconSize} />,
      Cpu: <Cpu size={iconSize} />,
      Globe: <Globe size={iconSize} />,
      Shield: <Shield size={iconSize} />,
      Lock: <Lock size={iconSize} />,
      Terminal: <Terminal size={iconSize} />
    };

    return iconMap[iconName] || <Code size={iconSize} />;
  };

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: techColors.bg,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >     

          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              component={motion.p}
              variants={fadeIn('up', 0.2)}
              sx={{
                color: colors.primary,
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Server fontSize="small" sx={{ mr: 1 }} />
              TECHNICAL MASTERY
              <Server fontSize="small" sx={{ ml: 1 }} />
            </Typography>

            <Typography
              variant="h2"
              component={motion.p}
              variants={fadeIn('up', 0.4)}
              sx={{
                fontWeight: 700,
                mb: 3,
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Technical Expertise
            </Typography>
          </Box>


          <Grid container spacing={4} alignItems="center">
            {/* Left Column - 3D Tech Element */}
            <Grid item xs={12} md={5}>
              <Box
                ref={threeContainer}
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '400px' },
                  position: 'relative',
                  cursor: 'grab',
                  '&:active': {
                    cursor: 'grabbing'
                  }
                }}
              />
            </Grid>

            {/* Right Column - Skills */}
            <Grid item xs={12} md={7}>
              <Box
                component={motion.div}
                variants={fadeIn('left', 0.4)}
              >
                {/* Skills Navigation */}
                <Box sx={{
                  display: 'flex',
                  gap: 1,
                  mb: 3,
                  flexWrap: 'wrap'
                }}>
                  {['Frontend', 'Backend', 'DevOps'].map((category, index) => (
                    <Button
                      key={index}
                      component={motion.div}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        backgroundColor: 'transparent',
                        color: techColors.text,
                        border: `1px solid ${techColors.primary}30`,
                        '&:hover': {
                          backgroundColor: `${techColors.primary}10`
                        }
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </Box>

                {/* Skills Content */}
                <Box>
                  {/* Frontend Skills */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      gap: 1
                    }}>
                      <Code size={24} color={techColors.primary} />
                      <Typography variant="h5" fontWeight={600}>
                        Frontend Development
                      </Typography>
                    </Box>

                    <Grid container spacing={2}>
                      {frontendSkills.map((skill, index) => (
                        <Grid item xs={6} sm={4} key={index}>
                          <Paper
                            component={motion.div}
                            whileHover={{ y: -5 }}
                            sx={{
                              p: 2,
                              height: '100%',
                              borderRadius: 2,
                              backgroundColor: `${techColors.primary}05`,
                              border: `1px solid ${techColors.primary}20`,
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                              gap: 1
                            }}>
                              {getIconForSkill(skill.icon)}
                              <Typography variant="body1" fontWeight={500}>
                                {skill.name}
                              </Typography>
                            </Box>
                            <Box sx={{
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: `${techColors.primary}20`,
                              overflow: 'hidden',
                              mb: 1
                            }}>
                              <Box
                                component={motion.div}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                sx={{
                                  height: '100%',
                                  background: `linear-gradient(90deg, ${techColors.primary}, ${techColors.secondary})`,
                                  borderRadius: 2
                                }}
                              />
                            </Box>
                            <Typography variant="caption" sx={{
                              color: techColors.text,
                              opacity: 0.7
                            }}>
                              {skill.description}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Additional Skills */}
                  <Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                      Additional Tools & Technologies
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1
                    }}>
                      {additionalSkills.map((skill, index) => (
                        <Tooltip key={index} title={skill.description} arrow>
                          <Chip
                            component={motion.div}
                            whileHover={{ scale: 1.05 }}
                            icon={getIconForSkill(skill.icon)}
                            label={skill.name}
                            sx={{
                              backgroundColor: `${techColors.secondary}10`,
                              border: `1px solid ${techColors.secondary}20`,
                              '& .MuiChip-icon': {
                                color: techColors.secondary
                              }
                            }}
                          />
                        </Tooltip>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection;