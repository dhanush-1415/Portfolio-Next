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


// import React, { useEffect, useRef } from 'react';
// import { Box, Container, Grid, Typography, Paper, useTheme, Tooltip, Button, Chip } from '@mui/material';
// import { motion } from 'framer-motion';
// import { resumeData } from '../utils/resumeData';
// import {
//   Code, Server, Database, Layers, Palette, Zap, GitBranch, Cloud,
//   Gauge, Network, Box as BoxIcon, CreditCard, TestTube, Flame,
//   Cpu, Globe, Shield, Lock, Terminal, Crown, Award, Sparkles
// } from 'lucide-react';
// import { fadeIn, staggerContainer } from './ui/animations';
// import { GradientText } from './ui/AnimatedText';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { gsap } from 'gsap';

// const SkillsSection = () => {
//   const theme = useTheme();
//   const threeContainer = useRef(null);
//   const { frontendSkills, backendSkills, additionalSkills } = resumeData;

//   // Tech-themed color palette
//   const techColors = {
//     primary: theme.palette.primary.main,
//     secondary: theme.palette.secondary.main,
//     accent: theme.palette.accent.main,
//     glow: theme.palette.mode === 'dark' ? 'rgba(100, 200, 255, 0.5)' : 'rgba(0, 100, 255, 0.3)',
//     bg: theme.palette.background.default,
//     text: theme.palette.text.primary
//   };

//   const colors = {
//     primary: theme.palette.primary.main,
//     secondary: theme.palette.secondary.main,
//     work: theme.palette.mode === 'dark' ? '#4fc3f7' : '#0288d1',
//     education: theme.palette.mode === 'dark' ? '#81c784' : '#388e3c',
//     bg: theme.palette.background.default,
//     text: theme.palette.text.primary
//   };

//   useEffect(() => {
//     // Three.js initialization with tech elements
//     if (threeContainer.current) {
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(
//         75,
//         threeContainer.current.clientWidth / threeContainer.current.clientHeight,
//         0.1,
//         1000
//       );
//       const renderer = new THREE.WebGLRenderer({
//         alpha: true,
//         antialias: true,
//       });
//       renderer.setSize(threeContainer.current.clientWidth, threeContainer.current.clientHeight);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//       threeContainer.current.appendChild(renderer.domElement);

//       // Add lighting
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//       scene.add(ambientLight);

//       const directionalLight = new THREE.DirectionalLight(techColors.primary, 1);
//       directionalLight.position.set(1, 1, 1);
//       scene.add(directionalLight);

//       // Create floating tech elements
//       const techElements = [];
//       const positions = [
//         { x: -1.5, y: 1, z: 0 }, // React logo position
//         { x: 1.5, y: -1, z: 0 },  // Node.js logo position
//         { x: 0, y: 1.5, z: -1 },  // Database position
//         { x: 0, y: -1.5, z: 1 }   // Cloud position
//       ];

//       // Create tech logos as placeholder geometries
//       positions.forEach((pos, i) => {
//         let geometry;

//         // Different shapes for different tech
//         if (i === 0) { // React
//           geometry = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
//         } else if (i === 1) { // Node
//           geometry = new THREE.OctahedronGeometry(0.5, 0);
//         } else if (i === 2) { // Database
//           geometry = new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32);
//         } else { // Cloud
//           geometry = new THREE.SphereGeometry(0.5, 32, 32);
//         }

//         const material = new THREE.MeshStandardMaterial({
//           color: new THREE.Color(
//             i === 0 ? '#61DAFB' :
//               i === 1 ? '#68A063' :
//                 i === 2 ? techColors.secondary : techColors.accent
//           ),
//           metalness: 0.7,
//           roughness: 0.3,
//           emissive: new THREE.Color(techColors.glow),
//           emissiveIntensity: 0.3
//         });

//         const element = new THREE.Mesh(geometry, material);
//         element.position.set(pos.x, pos.y, pos.z);
//         scene.add(element);
//         techElements.push(element);
//       });

//       // Add central floating tech sphere
//       const sphereGeometry = new THREE.SphereGeometry(0.8, 64, 64);
//       const sphereMaterial = new THREE.MeshStandardMaterial({
//         color: new THREE.Color(techColors.primary),
//         transparent: true,
//         opacity: 0.8,
//         wireframe: true,
//         emissive: new THREE.Color(techColors.glow),
//         emissiveIntensity: 0.5
//       });
//       const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//       scene.add(sphere);

//       // Add connecting lines
//       const lineMaterial = new THREE.LineBasicMaterial({
//         color: new THREE.Color(techColors.glow),
//         transparent: true,
//         opacity: 0.5
//       });

//       techElements.forEach(element => {
//         const lineGeometry = new THREE.BufferGeometry().setFromPoints([
//           new THREE.Vector3(0, 0, 0),
//           element.position
//         ]);
//         const line = new THREE.Line(lineGeometry, lineMaterial);
//         scene.add(line);
//       });

//       camera.position.z = 4;

//       // Mouse move interaction
//       const handleMouseMove = (event) => {
//         const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//         const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//         gsap.to(sphere.rotation, {
//           x: mouseY * 0.3,
//           y: mouseX * 0.3,
//           duration: 1.5
//         });
//       };

//       window.addEventListener('mousemove', handleMouseMove);

//       const animate = () => {
//         requestAnimationFrame(animate);

//         // Animate tech elements
//         techElements.forEach((element, i) => {
//           element.rotation.x += 0.005;
//           element.rotation.y += 0.01;

//           // Gentle floating animation
//           element.position.y = positions[i].y + Math.sin(Date.now() * 0.001 + i) * 0.2;
//         });

//         // Rotate central sphere
//         sphere.rotation.x += 0.002;
//         sphere.rotation.y += 0.003;

//         renderer.render(scene, camera);
//       };

//       animate();

//       const handleResize = () => {
//         camera.aspect = threeContainer.current.clientWidth / threeContainer.current.clientHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(threeContainer.current.clientWidth, threeContainer.current.clientHeight);
//       };

//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//         window.removeEventListener('mousemove', handleMouseMove);
//         threeContainer.current.removeChild(renderer.domElement);
//       };
//     }
//   }, [theme]);

//   const getIconForSkill = (iconName) => {
//     const iconSize = 20;
//     const iconMap = {
//       GitBranch: <GitBranch size={iconSize} />,
//       Palette: <Palette size={iconSize} />,
//       Layers: <Layers size={iconSize} />,
//       Cube: <BoxIcon size={iconSize} />,
//       Network: <Network size={iconSize} />,
//       Cloud: <Cloud size={iconSize} />,
//       FlameIcon: <Flame size={iconSize} />,
//       Gauge: <Gauge size={iconSize} />,
//       TestTube: <TestTube size={iconSize} />,
//       CreditCard: <CreditCard size={iconSize} />,
//       Cpu: <Cpu size={iconSize} />,
//       Globe: <Globe size={iconSize} />,
//       Shield: <Shield size={iconSize} />,
//       Lock: <Lock size={iconSize} />,
//       Terminal: <Terminal size={iconSize} />
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
//         backgroundColor: techColors.bg,
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: 'relative' }}>
//         <motion.div
//           variants={staggerContainer(0.2, 0.1)}
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
//                 color: colors.primary,
//                 fontWeight: 600,
//                 letterSpacing: 2,
//                 mb: 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <Server fontSize="small" sx={{ mr: 1 }} />
//               TECHNICAL MASTERY
//               <Server fontSize="small" sx={{ ml: 1 }} />
//             </Typography>

//             <Typography
//               variant="h2"
//               component={motion.p}
//               variants={fadeIn('up', 0.4)}
//               sx={{
//                 fontWeight: 700,
//                 mb: 3,
//                 background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}
//             >
//               Technical Expertise
//             </Typography>
//           </Box>


//           <Grid container spacing={4} alignItems="center">
//             {/* Left Column - 3D Tech Element */}
//             <Grid item xs={12} md={5}>
//               <Box
//                 ref={threeContainer}
//                 component={motion.div}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//                 sx={{
//                   width: '100%',
//                   height: { xs: '300px', md: '400px' },
//                   position: 'relative',
//                   cursor: 'grab',
//                   '&:active': {
//                     cursor: 'grabbing'
//                   }
//                 }}
//               />
//             </Grid>

//             {/* Right Column - Skills */}
//             <Grid item xs={12} md={7}>
//               <Box
//                 component={motion.div}
//                 variants={fadeIn('left', 0.4)}
//               >
//                 {/* Skills Navigation */}
//                 <Box sx={{
//                   display: 'flex',
//                   gap: 1,
//                   mb: 3,
//                   flexWrap: 'wrap'
//                 }}>
//                   {['Frontend', 'Backend'].map((category, index) => (
//                     <Button
//                       key={index}
//                       component={motion.div}
//                       whileHover={{ y: -2 }}
//                       whileTap={{ scale: 0.98 }}
//                       sx={{
//                         px: 2,
//                         py: 1,
//                         borderRadius: 2,
//                         backgroundColor: 'transparent',
//                         color: techColors.text,
//                         border: `1px solid ${techColors.primary}30`,
//                         '&:hover': {
//                           backgroundColor: `${techColors.primary}10`
//                         }
//                       }}
//                     >
//                       {category}
//                     </Button>
//                   ))}
//                 </Box>

//                 {/* Skills Content */}
//                 <Box>
//                   {/* Frontend Skills */}
//                   <Box sx={{ mb: 4 }}>
//                     <Box sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       mb: 2,
//                       gap: 1
//                     }}>
//                       <Code size={24} color={techColors.primary} />
//                       <Typography variant="h5" fontWeight={600}>
//                         Frontend Development
//                       </Typography>
//                     </Box>

//                     <Grid container spacing={2}>
//                       {frontendSkills.map((skill, index) => (
//                         <Grid item xs={6} sm={4} key={index}>
//                           <Paper
//                             component={motion.div}
//                             whileHover={{ y: -5 }}
//                             sx={{
//                               p: 2,
//                               height: '100%',
//                               borderRadius: 2,
//                               backgroundColor: `${techColors.primary}05`,
//                               border: `1px solid ${techColors.primary}20`,
//                               transition: 'all 0.3s ease'
//                             }}
//                           >
//                             <Box sx={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               mb: 1,
//                               gap: 1
//                             }}>
//                               {getIconForSkill(skill.icon)}
//                               <Typography variant="body1" fontWeight={500}>
//                                 {skill.name}
//                               </Typography>
//                             </Box>
//                             <Box sx={{
//                               height: 4,
//                               borderRadius: 2,
//                               backgroundColor: `${techColors.primary}20`,
//                               overflow: 'hidden',
//                               mb: 1
//                             }}>
//                               <Box
//                                 component={motion.div}
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: `${skill.percentage}%` }}
//                                 transition={{ duration: 1, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 sx={{
//                                   height: '100%',
//                                   background: `linear-gradient(90deg, ${techColors.primary}, ${techColors.secondary})`,
//                                   borderRadius: 2
//                                 }}
//                               />
//                             </Box>
//                             <Typography variant="caption" sx={{
//                               color: techColors.text,
//                               opacity: 0.7
//                             }}>
//                               {skill.description}
//                             </Typography>
//                           </Paper>
//                         </Grid>
//                       ))}
//                     </Grid>
//                   </Box>

//                   {/* Additional Skills */}
//                   <Box>
//                     <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
//                       Additional Tools & Technologies
//                     </Typography>
//                     <Box sx={{
//                       display: 'flex',
//                       flexWrap: 'wrap',
//                       gap: 1
//                     }}>
//                       {additionalSkills.map((skill, index) => (
//                         <Tooltip key={index} title={skill.description} arrow>
//                           <Chip
//                             component={motion.div}
//                             whileHover={{ scale: 1.05 }}
//                             icon={getIconForSkill(skill.icon)}
//                             label={skill.name}
//                             sx={{
//                               backgroundColor: `${techColors.secondary}10`,
//                               border: `1px solid ${techColors.secondary}20`,
//                               '& .MuiChip-icon': {
//                                 color: techColors.secondary
//                               }
//                             }}
//                           />
//                         </Tooltip>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default SkillsSection;


// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Container, Grid, Typography, Paper, useTheme, Tooltip, Button, Chip, Tabs, Tab } from '@mui/material';
// import { motion } from 'framer-motion';
// import { resumeData } from '../utils/resumeData';
// import {
//   Code, Server, Database, Layers, Palette, Zap, GitBranch, Cloud,
//   Gauge, Network, Box as BoxIcon, CreditCard, TestTube, Flame,
//   Cpu, Globe, Shield, Lock, Terminal, Crown, Award, Sparkles
// } from 'lucide-react';
// import { fadeIn, staggerContainer } from './ui/animations';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import ThreeDComponent from './3d/ThreeDComponent';
// import { gsap } from 'gsap';

// const SkillsSection = () => {
//   const theme = useTheme();
//   const threeContainer = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const { frontendSkills, backendSkills, additionalSkills } = resumeData;

//   // Tech-themed color palette
//   const techColors = {
//     primary: theme.palette.primary.main,
//     secondary: theme.palette.secondary.main,
//     accent: '#6e48aa', // Purple accent for tech vibe
//     glow: theme.palette.mode === 'dark' ? 'rgba(100, 200, 255, 0.7)' : 'rgba(0, 150, 255, 0.5)',
//     bg: theme.palette.background.default,
//     text: theme.palette.text.primary
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const getIconForSkill = (iconName) => {
//     const iconSize = 20;
//     const iconMap = {
//       GitBranch: <GitBranch size={iconSize} />,
//       Palette: <Palette size={iconSize} />,
//       Layers: <Layers size={iconSize} />,
//       Cube: <BoxIcon size={iconSize} />,
//       Network: <Network size={iconSize} />,
//       Cloud: <Cloud size={iconSize} />,
//       FlameIcon: <Flame size={iconSize} />,
//       Gauge: <Gauge size={iconSize} />,
//       TestTube: <TestTube size={iconSize} />,
//       CreditCard: <CreditCard size={iconSize} />,
//       Cpu: <Cpu size={iconSize} />,
//       Globe: <Globe size={iconSize} />,
//       Shield: <Shield size={iconSize} />,
//       Lock: <Lock size={iconSize} />,
//       Terminal: <Terminal size={iconSize} />,
//       Server: <Server size={iconSize} />,
//       Database: <Database size={iconSize} />,
//       Code: <Code size={iconSize} />
//     };

//     return iconMap[iconName] || <Code size={iconSize} />;
//   };

//   const renderSkills = (skills) => (
//     <Grid container spacing={2}>
//       {skills.map((skill, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Paper
//             component={motion.div}
//             whileHover={{ y: -5, boxShadow: `0 10px 20px ${techColors.primary}20` }}
//             sx={{
//               p: 2,
//               height: '100%',
//               borderRadius: 3,
//               backgroundColor: `${techColors.primary}05`,
//               border: `1px solid ${techColors.primary}20`,
//               transition: 'all 0.3s ease',
//               backdropFilter: 'blur(5px)'
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
//               {getIconForSkill(skill.icon)}
//               <Typography variant="body1" fontWeight={600}>
//                 {skill.name}
//               </Typography>
//             </Box>
//             <Box sx={{
//               height: 6,
//               borderRadius: 3,
//               backgroundColor: `${techColors.primary}15`,
//               overflow: 'hidden',
//               mb: 1
//             }}>
//               <Box
//                 component={motion.div}
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.percentage}%` }}
//                 transition={{ duration: 1, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 sx={{
//                   height: '100%',
//                   background: `linear-gradient(90deg, ${techColors.primary}, ${techColors.accent})`,
//                   borderRadius: 3,
//                   boxShadow: `0 0 10px ${techColors.primary}`
//                 }}
//               />
//             </Box>
//             <Typography variant="caption" sx={{
//               color: techColors.text,
//               opacity: 0.8,
//               display: 'block',
//               lineHeight: 1.4
//             }}>
//               {skill.description}
//             </Typography>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );

//   return (
//     <Box
//       id="skills"
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: techColors.bg,
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: 'relative' }}>
//         <motion.div
//           variants={staggerContainer(0.2, 0.1)}
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
//                 color: techColors.primary,
//                 fontWeight: 600,
//                 letterSpacing: 2,
//                 mb: 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <Server size={20} style={{ marginRight: 8 }} />
//               TECHNICAL MASTERY
//               <Server size={20} style={{ marginLeft: 8 }} />
//             </Typography>

//             <Typography
//               variant="h2"
//               component={motion.p}
//               variants={fadeIn('up', 0.4)}
//               sx={{
//                 fontWeight: 700,
//                 mb: 3,
//                 background: `linear-gradient(90deg, ${techColors.primary}, ${techColors.accent})`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}
//             >
//               My Technical Stack
//             </Typography>
//           </Box>

//           <Grid container spacing={4} alignItems="center">
//             {/* Left Column - 3D Tech Element */}
//             {/* <Grid item xs={12} md={5}>
//               <ThreeDComponent techColors={techColors} />
//             </Grid> */}

//             {/* Right Column - Skills */}
//             <Grid item xs={12} md={7}>
//               <Box
//                 component={motion.div}
//                 variants={fadeIn('left', 0.4)}
//               >
//                 {/* Skills Navigation */}
//                 <Box sx={{ mb: 4 }}>
//                   <Tabs
//                     value={activeTab}
//                     onChange={handleTabChange}
//                     variant="fullWidth"
//                     sx={{
//                       '& .MuiTabs-indicator': {
//                         height: 3,
//                         background: `linear-gradient(90deg, ${techColors.primary}, ${techColors.accent})`,
//                       },
//                       '& .MuiTab-root': {
//                         color: `${techColors.text}80`,
//                         fontWeight: 600,
//                         textTransform: 'none',
//                         fontSize: '0.9rem',
//                         '&.Mui-selected': {
//                           color: techColors.primary,
//                         },
//                       }
//                     }}
//                   >
//                     <Tab
//                       icon={<Code size={20} />}
//                       iconPosition="start"
//                       label="Frontend"
//                     />
//                     <Tab
//                       icon={<Server size={20} />}
//                       iconPosition="start"
//                       label="Backend"
//                     />
//                   </Tabs>
//                 </Box>

//                 {/* Skills Content */}
//                 <Box>
//                   {activeTab === 0 ? (
//                     <Box sx={{ mb: 4 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
//                         <Code size={24} color={techColors.primary} />
//                         <Typography variant="h5" fontWeight={600}>
//                           Frontend Development
//                         </Typography>
//                       </Box>
//                       {renderSkills(frontendSkills)}
//                     </Box>
//                   ) : (
//                     <Box sx={{ mb: 4 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
//                         <Server size={24} color={techColors.primary} />
//                         <Typography variant="h5" fontWeight={600}>
//                           Backend Development
//                         </Typography>
//                       </Box>
//                       {renderSkills(backendSkills)}
//                     </Box>
//                   )}

//                   {/* Additional Skills */}
//                   <Box>
//                     <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
//                       Additional Tools & Technologies
//                     </Typography>
//                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                       {additionalSkills.map((skill, index) => (
//                         <Tooltip key={index} title={skill.description} arrow>
//                           <Chip
//                             component={motion.div}
//                             whileHover={{ scale: 1.05 }}
//                             icon={getIconForSkill(skill.icon)}
//                             label={skill.name}
//                             sx={{
//                               backgroundColor: `${techColors.secondary}10`,
//                               border: `1px solid ${techColors.secondary}30`,
//                               '& .MuiChip-icon': { color: techColors.secondary },
//                               '&:hover': {
//                                 backgroundColor: `${techColors.secondary}20`,
//                                 boxShadow: `0 2px 8px ${techColors.secondary}20`
//                               }
//                             }}
//                           />
//                         </Tooltip>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default SkillsSection;

import React, { useRef, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  useTheme, 
  Tooltip, 
  Button, 
  Chip,
  Tabs, 
  Tab,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';
import { 
  Code, Server, Database, Layers, Palette, GitBranch, Cloud,
  Gauge, Network, Box as BoxIcon, CreditCard, TestTube, Flame,
  Cpu, Globe, Shield, Lock, Terminal, Award, Sparkles, Zap
} from 'lucide-react';
import { fadeIn, staggerContainer } from './ui/animations';
import { resumeData } from '../utils/resumeData';

const TechSphere = ({ containerRef }) => {
  const scene = useRef(new THREE.Scene());
  const renderer = useRef(null);
  const camera = useRef(null);
  const controls = useRef(null);
  const techIcons = useRef([]);
  const animationId = useRef(null);
  const theme = useTheme();

  const techColors = useMemo(() => ({
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    accent: theme.palette.mode === 'dark' ? '#9d65ff' : '#6e45e2',
    bg: theme.palette.background.default,
    text: theme.palette.text.primary,
    glow: theme.palette.mode === 'dark' ? 'rgba(157, 101, 255, 0.5)' : 'rgba(110, 69, 226, 0.3)'
  }), [theme]);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Initialize renderer
    renderer.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    renderer.current.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.current.domElement);

    // Camera setup
    camera.current = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.current.position.z = 5;

    // Controls
    controls.current = new OrbitControls(camera.current, renderer.current.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.05;
    controls.current.enableZoom = false;
    controls.current.enablePan = false;
    controls.current.autoRotate = true;
    controls.current.autoRotateSpeed = 0.5;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.current.add(directionalLight);

    // Create central tech sphere
    const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(techColors.primary),
      transparent: true,
      opacity: 0.8,
      wireframe: true,
      emissive: new THREE.Color(techColors.glow),
      emissiveIntensity: 0.3,
      metalness: 0.7,
      roughness: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.current.add(sphere);

    // Create tech icons orbiting the sphere
    const createTechIcon = (icon, position, color, size = 0.5) => {
      const geometry = new THREE.IcosahedronGeometry(size, 1);
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        metalness: 0.7,
        roughness: 0.3,
        emissive: new THREE.Color(techColors.glow),
        emissiveIntensity: 0.2
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.userData = { icon, originalPosition: position.clone() };
      scene.current.add(mesh);
      techIcons.current.push(mesh);
      return mesh;
    };

    // Position tech icons in a spherical formation
    const techData = [
      { icon: 'react', color: '#61DAFB', position: new THREE.Vector3(-2, 1, 0) },
      { icon: 'node', color: '#68A063', position: new THREE.Vector3(2, -1, 0) },
      { icon: 'database', color: techColors.secondary, position: new THREE.Vector3(0, 2, -1) },
      { icon: 'cloud', color: techColors.accent, position: new THREE.Vector3(0, -2, 1) },
      { icon: 'cpu', color: '#FF7043', position: new THREE.Vector3(1, 1, 2) },
      { icon: 'globe', color: '#29B6F6', position: new THREE.Vector3(-1, -1, -2) }
    ];

    techData.forEach(data => {
      createTechIcon(data.icon, data.position, data.color);
    });

    // Add connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(techColors.glow),
      transparent: true,
      opacity: 0.3
    });

    techIcons.current.forEach(icon => {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        icon.position
      ]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.current.add(line);
    });

    // Animation loop
    const animate = () => {
      animationId.current = requestAnimationFrame(animate);
      
      // Update controls
      controls.current.update();

      // Animate tech icons
      techIcons.current.forEach((icon, index) => {
        icon.rotation.x += 0.01;
        icon.rotation.y += 0.01;
        
        // Gentle floating animation
        const time = Date.now() * 0.001 + index;
        icon.position.x = icon.userData.originalPosition.x + Math.sin(time * 0.5) * 0.2;
        icon.position.y = icon.userData.originalPosition.y + Math.cos(time * 0.7) * 0.2;
      });

      // Rotate central sphere
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.003;

      renderer.current.render(scene.current, camera.current);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(
        containerRef.current.clientWidth, 
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId.current);
      if (controls.current) controls.current.dispose();
      if (renderer.current && containerRef.current) {
        containerRef.current.removeChild(renderer.current.domElement);
      }
      
      // Dispose of all geometries and materials
      scene.current.traverse(object => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach(m => m.dispose());
            }
          }
        }
      });
    };
  }, [containerRef, techColors]);

  return null;
};

const SkillsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const threeContainer = useRef(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const { frontendSkills, backendSkills, devOpsSkills, additionalSkills } = resumeData;

  const techColors = useMemo(() => ({
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    accent: theme.palette.mode === 'dark' ? '#9d65ff' : '#6e45e2',
    bg: theme.palette.background.default,
    text: theme.palette.text.primary,
    glow: theme.palette.mode === 'dark' ? 'rgba(157, 101, 255, 0.5)' : 'rgba(110, 69, 226, 0.3)'
  }), [theme]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
      Terminal: <Terminal size={iconSize} />,
      Zap: <Zap size={iconSize} />,
      Award: <Award size={iconSize} />,
      Sparkles: <Sparkles size={iconSize} />
    };

    return iconMap[iconName] || <Code size={iconSize} />;
  };

  const skillCategories = useMemo(() => [
    { 
      name: 'Frontend', 
      icon: <Code size={18} />, 
      skills: frontendSkills,
      color: techColors.primary
    },
    { 
      name: 'Backend', 
      icon: <Server size={18} />, 
      skills: backendSkills,
      color: techColors.secondary
    }
  ], [frontendSkills, backendSkills, techColors]);

  const renderSkills = (skills) => (
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper
            component={motion.div}
            variants={fadeIn('up', 0.1 * index)}
            whileHover={{ 
              y: -5,
              boxShadow: `0 8px 24px ${techColors.primary}20`
            }}
            sx={{
              p: 2,
              height: '100%',
              borderRadius: 2,
              backgroundColor: `${techColors.primary}05`,
              border: `1px solid ${techColors.primary}20`,
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
              <Box sx={{
                p: 0.5,
                borderRadius: '4px',
                backgroundColor: `${techColors.primary}10`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {getIconForSkill(skill.icon)}
              </Box>
              <Typography variant="body1" fontWeight={600}>
                {skill.name}
              </Typography>
            </Box>
            <Box sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: `${techColors.primary}10`,
              overflow: 'hidden',
              mb: 1.5
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
                  borderRadius: 3
                }}
              />
            </Box>
            <Typography variant="caption" sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.75rem',
              display: 'block'
            }}>
              {skill.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

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
      {/* Decorative background elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: { xs: '300px', md: '500px' },
          height: { xs: '300px', md: '500px' },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${techColors.primary} 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: isMobile ? '0px' : '-100px' }}
        >     
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              component={motion.p}
              variants={fadeIn('up', 0.2)}
              sx={{
                color: techColors.primary,
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Code size={18} style={{ marginRight: 8 }} />
              TECHNICAL MASTERY
              <Code size={18} style={{ marginLeft: 8 }} />
            </Typography>

            <Typography
              variant="h2"
              component={motion.p}
              variants={fadeIn('up', 0.4)}
              sx={{
                fontWeight: 700,
                mb: 3,
                background: `linear-gradient(90deg, ${techColors.primary}, ${techColors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              My Technical Stack
            </Typography>

            <Typography
              variant="h6"
              component={motion.p}
              variants={fadeIn('up', 0.4)}
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary
              }}
            >
              A comprehensive showcase of my technical abilities across the full stack development spectrum.
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="center">
            {/* Left Column - 3D Tech Sphere */}
            {/* <Grid item xs={12} md={5}>
              <Box
                ref={threeContainer}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '400px' },
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1px solid ${techColors.primary}20`,
                  boxShadow: `0 8px 32px ${techColors.primary}10`,
                  backgroundColor: `${techColors.primary}05`
                }}
              >
                <TechSphere containerRef={threeContainer} />
              </Box>
            </Grid> */}

            {/* Right Column - Skills Content */}
            <Grid item xs={12} md={7}>
              <Box
                component={motion.div}
                variants={fadeIn('left', 0.4)}
              >
                {/* Skills Navigation */}
                <Box 
                  component={motion.div}
                  variants={fadeIn('up', 0.4)}
                  sx={{
                    display: 'flex',
                    gap: 1,
                    mb: 4,
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  {skillCategories.map((category, index) => (
                    <Button
                      key={index}
                      component={motion.div}
                      whileHover={{ 
                        y: -2, 
                        backgroundColor: `${category.color}10`,
                        color: category.color
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(index)}
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        backgroundColor: activeTab === index ? `${category.color}10` : 'transparent',
                        color: activeTab === index ? category.color : techColors.text,
                        border: `1px solid ${activeTab === index ? category.color : `${techColors.text}20`}`,
                        fontWeight: 600,
                        textTransform: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      {category.icon}
                      {category.name}
                    </Button>
                  ))}
                </Box>

                {/* Skills Content */}
                <Box>
                  {activeTab === 0 ? (
                    <Box 
                      component={motion.div}
                      variants={fadeIn('up', 0.5)}
                      sx={{ mb: 4 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: `${techColors.primary}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Code size={24} color={techColors.primary} />
                        </Box>
                        <Typography variant="h5" fontWeight={600}>
                          Frontend Development
                        </Typography>
                      </Box>
                      {renderSkills(frontendSkills)}
                    </Box>
                  ) : (
                    <Box 
                      component={motion.div}
                      variants={fadeIn('up', 0.5)}
                      sx={{ mb: 4 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: `${techColors.secondary}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Server size={24} color={techColors.secondary} />
                        </Box>
                        <Typography variant="h5" fontWeight={600}>
                          Backend Development
                        </Typography>
                      </Box>
                      {renderSkills(backendSkills)}
                    </Box>
                  )}

                  {/* Additional Skills */}
                  <Box
                    component={motion.div}
                    variants={fadeIn('up', 0.6)}
                  >
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                      Additional Tools & Technologies
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1
                    }}>
                      {additionalSkills.map((skill, index) => (
                        <Tooltip 
                          key={index} 
                          title={skill.description} 
                          arrow
                          componentsProps={{
                            tooltip: {
                              sx: {
                                bgcolor: theme.palette.background.paper,
                                color: theme.palette.text.primary,
                                border: `1px solid ${theme.palette.divider}`,
                                boxShadow: theme.shadows[4],
                                maxWidth: '250px'
                              }
                            }
                          }}
                        >
                          <Chip
                            component={motion.div}
                            variants={fadeIn('up', 0.1 * index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            icon={getIconForSkill(skill.icon)}
                            label={skill.name}
                            sx={{
                              backgroundColor: `${techColors.secondary}05`,
                              border: `1px solid ${techColors.secondary}20`,
                              '& .MuiChip-icon': {
                                color: techColors.secondary
                              },
                              fontWeight: 500,
                              backdropFilter: 'blur(10px)'
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

export default React.memo(SkillsSection);