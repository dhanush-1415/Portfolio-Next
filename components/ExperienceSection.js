// import React, { useEffect, useRef } from 'react';
// import { Box, Container, Grid, Typography, Stepper, Step, StepLabel, StepContent, Paper, useTheme, Chip } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Code, Server, School, Work, CalendarToday as Calendar, Room as Location, EmojiEvents as Award } from '@mui/icons-material';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { gsap } from 'gsap';

// // Resume data - moved here for self-contained example
// const resumeData = {
//   experiences: [
//     {
//       type: "work",
//       company: "7vachan Service Pvt Ltd",
//       title: "Frontend Developer",
//       location: "Bengaluru",
//       startDate: "April 2023",
//       endDate: "Present",
//       responsibilities: [
//         "Developed and maintained scalable web applications using React.js and MUI",
//         "Designed and implemented responsive admin dashboards with MUI",
//         "Built and optimized React Native (Expo) mobile applications",
//         "Integrated Firebase for authentication and push notifications",
//         "Optimized application performance, achieving scores in performance and accessibility"
//       ]
//     },
//     {
//       type: "work",
//       company: "Isometrica Experiences Pvt Ltd",
//       title: "Full Stack Developer",
//       location: "Hyderabad",
//       startDate: "February 2022",
//       endDate: "March 2023",
//       responsibilities: [
//         "Developed scalable Node.js/Express backend services",
//         "Designed and optimized MySQL database architecture",
//         "Implemented admin panel using Express and React.js",
//         "Built dynamic dashboards to visualize user statistics",
//         "Created comprehensive RESTful APIs with authentication"
//       ]
//     }
//   ],
//   education: [
//     {
//       type: "education",
//       school: "S V University, Tirupati",
//       degree: "Bachelor's Degree in Computer Science",
//       field: "Computer Science Graduate",
//       location: "SRDC College Affiliated",
//       startDate: "2018",
//       endDate: "2021",
//       description: "Completed Bachelor's Degree in Computer Science with a focus on software development."
//     },
//     {
//       type: "education",
//       school: "XII Pre Degree, Nagari",
//       degree: "Pre-University",
//       field: "MPC",
//       location: "",
//       startDate: "2016",
//       endDate: "2018",
//       description: "Completed Pre-University education with focus on Mathematics, Physics, and Chemistry."
//     }
//   ]
// };

// // Animation variants
// const staggerContainer = (staggerChildren, delayChildren) => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren,
//       delayChildren
//     }
//   }
// });

// const fadeIn = (direction, delay) => ({
//   hidden: {
//     y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//     x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
//     opacity: 0
//   },
//   show: {
//     y: 0,
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: 'tween',
//       duration: 1,
//       delay,
//       ease: [0.25, 0.25, 0.25, 0.75]
//     }
//   }
// });

// const ExperienceSection = () => {
//   const theme = useTheme();
//   const threeContainer = useRef(null);
//   const { experiences, education } = resumeData;

//   // Color palette
//   const colors = {
//     primary: theme.palette.primary.main,
//     secondary: theme.palette.secondary.main,
//     work: theme.palette.mode === 'dark' ? '#4fc3f7' : '#0288d1',
//     education: theme.palette.mode === 'dark' ? '#81c784' : '#388e3c',
//     bg: theme.palette.background.default,
//     text: theme.palette.text.primary
//   };

//   useEffect(() => {
//     if (!threeContainer.current) return;

//     // Three.js initialization
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75, 
//       threeContainer.current.clientWidth / threeContainer.current.clientHeight, 
//       0.1, 
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ 
//       alpha: true, 
//       antialias: true
//     });
//     renderer.setSize(threeContainer.current.clientWidth, threeContainer.current.clientHeight);
//     threeContainer.current.appendChild(renderer.domElement);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(colors.primary, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Create floating tech elements
//     const elements = [];
//     const positions = [
//       { x: -1.5, y: 1, z: 0 },
//       { x: 1.5, y: -1, z: 0 },
//       { x: 0, y: 1.5, z: -1 },
//       { x: 0, y: -1.5, z: 1 }
//     ];

//     positions.forEach((pos, i) => {
//       let geometry;
//       if (i === 0) geometry = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
//       else if (i === 1) geometry = new THREE.OctahedronGeometry(0.5, 0);
//       else if (i === 2) geometry = new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32);
//       else geometry = new THREE.SphereGeometry(0.5, 32, 32);

//       const material = new THREE.MeshStandardMaterial({
//         color: new THREE.Color(
//           i === 0 ? '#61DAFB' : 
//           i === 1 ? '#68A063' : 
//           i === 2 ? colors.secondary : colors.primary
//         ),
//         metalness: 0.7,
//         roughness: 0.3
//       });

//       const element = new THREE.Mesh(geometry, material);
//       element.position.set(pos.x, pos.y, pos.z);
//       scene.add(element);
//       elements.push(element);
//     });

//     // Central sphere
//     const sphereGeometry = new THREE.SphereGeometry(0.8, 64, 64);
//     const sphereMaterial = new THREE.MeshStandardMaterial({
//       color: new THREE.Color(colors.primary),
//       transparent: true,
//       opacity: 0.8,
//       wireframe: true
//     });
//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     scene.add(sphere);

//     camera.position.z = 4;

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       elements.forEach((element, i) => {
//         element.rotation.x += 0.005;
//         element.rotation.y += 0.01;
//         element.position.y = positions[i].y + Math.sin(Date.now() * 0.001 + i) * 0.2;
//       });

//       sphere.rotation.x += 0.002;
//       sphere.rotation.y += 0.003;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       threeContainer.current?.removeChild(renderer.domElement);
//     };
//   }, [theme]);

//   const getStepIcon = (type) => {
//     return type === 'work' ? <Work fontSize="small" /> : <School fontSize="small" />;
//   };

//   const getStepColor = (type) => {
//     return type === 'work' ? colors.work : colors.education;
//   };

//   return (
//     <Box 
//       id="experience"
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: colors.bg,
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: 'relative' }}>
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
//                 color: colors.primary,
//                 fontWeight: 600,
//                 letterSpacing: 2,
//                 mb: 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <Award fontSize="small" sx={{ mr: 1 }} />
//               PROFESSIONAL JOURNEY
//               <Award fontSize="small" sx={{ ml: 1 }} />
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
//               Experience & Education
//             </Typography>
//           </Box>

//           <Grid container spacing={6} alignItems="flex-start">
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
//                   height: { xs: '300px', md: '500px' },
//                   position: 'relative',
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12} md={7}>
//               <Box component={motion.div} variants={fadeIn('left', 0.4)}>
//                 <Stepper orientation="vertical" sx={{ position: 'relative' }}>
//                   {[...experiences, ...education]
//                     .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
//                     .map((item, index) => (
//                       <Step 
//                         key={index} 
//                         active={true}
//                         sx={{
//                           '& .MuiStepConnector-line': {
//                             borderColor: getStepColor(item.type),
//                             borderWidth: 2,
//                             minHeight: 40
//                           }
//                         }}
//                       >
//                         <StepLabel 
//                           StepIconComponent={() => (
//                             <Box
//                               component={motion.div}
//                               whileHover={{ scale: 1.1 }}
//                               sx={{
//                                 width: 32,
//                                 height: 32,
//                                 borderRadius: '50%',
//                                 backgroundColor: getStepColor(item.type),
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 color: 'white'
//                               }}
//                             >
//                               {getStepIcon(item.type)}
//                             </Box>
//                           )}
//                           sx={{
//                             '& .MuiStepLabel-label': {
//                               typography: 'h6',
//                               fontWeight: 600,
//                               color: colors.text
//                             }
//                           }}
//                         >
//                           {item.company || item.school}
//                         </StepLabel>
//                         <StepContent
//                           sx={{
//                             borderLeft: `2px solid ${getStepColor(item.type)}`,
//                             marginLeft: 1.5,
//                             paddingLeft: 3,
//                             paddingBottom: 3,
//                           }}
//                         >
//                           <motion.div
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                           >
//                             <Paper
//                               elevation={0}
//                               sx={{
//                                 p: 3,
//                                 borderRadius: 3,
//                                 backgroundColor: theme.palette.mode === 'dark'
//                                   ? 'rgba(255,255,255,0.05)'
//                                   : 'rgba(0,0,0,0.03)',
//                                 borderLeft: `3px solid ${getStepColor(item.type)}`
//                               }}
//                             >
//                               <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                                 <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
//                                   {item.title || item.degree}
//                                 </Typography>
//                                 <Chip
//                                   label={item.type === 'work' ? 'Work' : 'Education'}
//                                   size="small"
//                                   sx={{
//                                     backgroundColor: getStepColor(item.type),
//                                     color: 'white',
//                                     fontWeight: 500
//                                   }}
//                                 />
//                               </Box>

//                               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
//                                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                                   <Calendar fontSize="small" sx={{ opacity: 0.7 }} />
//                                   <Typography variant="body2">
//                                     {item.startDate} - {item.endDate || 'Present'}
//                                   </Typography>
//                                 </Box>
//                                 {item.location && (
//                                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//                                     <Location fontSize="small" sx={{ opacity: 0.7 }} />
//                                     <Typography variant="body2">
//                                       {item.location}
//                                     </Typography>
//                                   </Box>
//                                 )}
//                               </Box>

//                               {item.description && (
//                                 <Typography variant="body2" sx={{ mb: 2 }}>
//                                   {item.description}
//                                 </Typography>
//                               )}

//                               {item.responsibilities && (
//                                 <Box component="ul" sx={{ pl: 2, mb: 0 }}>
//                                   {item.responsibilities.map((responsibility, i) => (
//                                     <Box 
//                                       component="li" 
//                                       key={i}
//                                       sx={{ 
//                                         mb: 1,
//                                         position: 'relative',
//                                         pl: 2,
//                                         '&:before': {
//                                           content: '""',
//                                           position: 'absolute',
//                                           left: 0,
//                                           top: '0.6em',
//                                           width: 6,
//                                           height: 6,
//                                           borderRadius: '50%',
//                                           backgroundColor: getStepColor(item.type)
//                                         }
//                                       }}
//                                     >
//                                       <Typography variant="body2">
//                                         {responsibility}
//                                       </Typography>
//                                     </Box>
//                                   ))}
//                                 </Box>
//                               )}
//                             </Paper>
//                           </motion.div>
//                         </StepContent>
//                       </Step>
//                     ))}
//                 </Stepper>
//               </Box>
//             </Grid>
//           </Grid>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ExperienceSection;



import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Box, Container, Grid, Typography, Stepper, Step, StepLabel, StepContent, Paper, useTheme, Chip, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, School, CalendarToday as Calendar, Room as Location, EmojiEvents as Award } from '@mui/icons-material';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const useResumeData = () => {
  return useMemo(() => ({
    experiences: [
      {
        type: "work",
        company: "7vachan Service Pvt Ltd",
        title: "Frontend Developer",
        location: "Bengaluru",
        startDate: "April 2023",
        endDate: "Present",
        responsibilities: [
          "Developed and maintained scalable web applications using React.js and MUI",
          "Designed and implemented responsive admin dashboards with MUI",
          "Built and optimized React Native (Expo) mobile applications",
          "Integrated Firebase for authentication and push notifications",
          "Optimized application performance, achieving scores in performance and accessibility"
        ]
      },
      {
        type: "work",
        company: "Isometrica Experiences Pvt Ltd",
        title: "Full Stack Developer",
        location: "Hyderabad",
        startDate: "February 2022",
        endDate: "March 2023",
        responsibilities: [
          "Developed scalable Node.js/Express backend services",
          "Designed and optimized MySQL database architecture",
          "Implemented admin panel using Express and React.js",
          "Built dynamic dashboards to visualize user statistics",
          "Created comprehensive RESTful APIs with authentication"
        ]
      }
    ],
    education: [
      {
        type: "education",
        school: "S V University, Tirupati",
        degree: "Bachelor's Degree in Computer Science",
        field: "Computer Science Graduate",
        location: "SRDC College Affiliated",
        startDate: "2018",
        endDate: "2021",
        description: "Completed Bachelor's Degree in Computer Science with a focus on software development."
      },
      {
        type: "education",
        school: "XII Pre Degree, Nagari",
        degree: "Pre-University",
        field: "MPC",
        location: "",
        startDate: "2016",
        endDate: "2018",
        description: "Completed Pre-University education with focus on Mathematics, Physics, and Chemistry."
      }
    ]
  }), []);
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
});

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const threeContainer = useRef(null);
  const { experiences, education } = useResumeData();
  const animationFrameId = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colors = useMemo(() => ({
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    work: theme.palette.mode === 'dark' ? '#4fc3f7' : '#0288d1',
    education: theme.palette.mode === 'dark' ? '#81c784' : '#388e3c',
    bg: theme.palette.background.default,
    text: theme.palette.text.primary
  }), [theme]);

  const sortedItems = useMemo(() =>
    [...experiences, ...education].sort((a, b) => new Date(b.startDate) - new Date(a.startDate)),
    [experiences, education]
  );

  const getStepIcon = useMemo(() => (type) =>
    type === 'work' ? <Work fontSize="small" /> : <School fontSize="small" />,
    []
  );

  const getStepColor = useMemo(() => (type) =>
    type === 'work' ? colors.work : colors.education,
    [colors]
  );

  // Initialize and handle Three.js scene
  useEffect(() => {
    if (!threeContainer.current) return;

    const updateDimensions = () => {
      if (threeContainer.current) {
        setDimensions({
          width: threeContainer.current.clientWidth,
          height: threeContainer.current.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 5 : 4;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(dimensions.width, dimensions.height);
    threeContainer.current.innerHTML = '';
    threeContainer.current.appendChild(renderer.domElement);

    // Add orbit controls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(colors.primary, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create floating tech elements
    const elements = [];
    const geometries = [
      new THREE.TorusGeometry(0.4, 0.1, 16, 32),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32),
      new THREE.SphereGeometry(0.5, 32, 32)
    ];

    const positions = isMobile ? [
      { x: -1, y: 0.8, z: 0 },
      { x: 1, y: -0.8, z: 0 },
      { x: 0, y: 1.2, z: -0.8 },
      { x: 0, y: -1.2, z: 0.8 }
    ] : [
      { x: -1.5, y: 1, z: 0 },
      { x: 1.5, y: -1, z: 0 },
      { x: 0, y: 1.5, z: -1 },
      { x: 0, y: -1.5, z: 1 }
    ];

    const elementColors = [
      '#61DAFB', // React blue
      '#68A063', // Green
      colors.secondary,
      colors.primary
    ];

    positions.forEach((pos, i) => {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(elementColors[i]),
        metalness: 0.7,
        roughness: 0.3
      });

      const element = new THREE.Mesh(geometries[i], material);
      element.position.set(pos.x, pos.y, pos.z);
      scene.add(element);
      elements.push(element);
    });

    // Central sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.primary),
      transparent: true,
      opacity: 0.8,
      wireframe: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Animation
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      elements.forEach((element, i) => {
        element.rotation.x += 0.005;
        element.rotation.y += 0.01;
        element.position.y = positions[i].y + Math.sin(time + i) * 0.2;
      });

      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.003;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      geometries.forEach(geom => geom.dispose());
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      controls.dispose();
      renderer.dispose();
      if (threeContainer.current) {
        threeContainer.current.innerHTML = '';
      }
    };
  }, [dimensions, colors, isMobile]);

  return (

    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}c
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: isMobile ? '0px' : '-100px' }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
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
                justifyContent: 'center',
                fontSize: { xs: '0.7rem', sm: '0.8rem' }
              }}
            >
              <Award fontSize="small" sx={{ mr: 1 }} />
              PROFESSIONAL JOURNEY
              <Award fontSize="small" sx={{ ml: 1 }} />
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
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Experience & Education
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="flex-start">
            {!isMobile && (
              <Grid item xs={12} md={5} lg={4}>
                <Box
                  ref={threeContainer}
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  sx={{
                    width: '100%',
                    height: '500px',
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: theme.shadows[4]
                  }}
                />
              </Grid>
            )}

            <Grid item xs={12} md={isMobile ? 12 : 7} lg={isMobile ? 12 : 8}>
              <Box component={motion.div} variants={fadeIn('left', 0.4)}>
                <Stepper orientation="vertical" sx={{ position: 'relative' }}>
                  {sortedItems.map((item, index) => (
                    <Step
                      key={`${item.type}-${index}`}
                      active={true}
                      sx={{
                        '& .MuiStepConnector-line': {
                          borderColor: getStepColor(item.type),
                          borderWidth: 2,
                          minHeight: 40
                        }
                      }}
                    >
                      <StepLabel
                        StepIconComponent={() => (
                          <Box
                            component={motion.div}
                            whileHover={{ scale: 1.1 }}
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              backgroundColor: getStepColor(item.type),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white'
                            }}
                          >
                            {getStepIcon(item.type)}
                          </Box>
                        )}
                        sx={{
                          '& .MuiStepLabel-label': {
                            typography: 'h6',
                            fontWeight: 600,
                            color: colors.text,
                            fontSize: { xs: '1rem', sm: '1.1rem' }
                          }
                        }}
                      >
                        {item.company || item.school}
                      </StepLabel>
                      <StepContent
                        sx={{
                          borderLeft: `2px solid ${getStepColor(item.type)}`,
                          marginLeft: 1.5,
                          paddingLeft: 3,
                          paddingBottom: 3,
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: { xs: 2, sm: 3 },
                              borderRadius: 3,
                              backgroundColor: theme.palette.mode === 'dark'
                                ? 'rgba(255,255,255,0.05)'
                                : 'rgba(0,0,0,0.03)',
                              borderLeft: `3px solid ${getStepColor(item.type)}`
                            }}
                          >
                            <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                              flexDirection: { xs: 'column', sm: 'row' },
                              gap: { xs: 1, sm: 0 }
                            }}>
                              <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
                                {item.title || item.degree}
                              </Typography>
                              <Chip
                                label={item.type === 'work' ? 'Work' : 'Education'}
                                size="small"
                                sx={{
                                  backgroundColor: getStepColor(item.type),
                                  color: 'white',
                                  fontWeight: 500
                                }}
                              />
                            </Box>

                            <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              mb: 2,
                              flexWrap: 'wrap',
                              '& > *': {
                                flex: { xs: '1 1 100%', sm: '0 0 auto' }
                              }
                            }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Calendar fontSize="small" sx={{ opacity: 0.7 }} />
                                <Typography variant="body2">
                                  {item.startDate} - {item.endDate || 'Present'}
                                </Typography>
                              </Box>
                              {item.location && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                  <Location fontSize="small" sx={{ opacity: 0.7 }} />
                                  <Typography variant="body2">
                                    {item.location}
                                  </Typography>
                                </Box>
                              )}
                            </Box>

                            {item.description && (
                              <Typography variant="body2" sx={{ mb: 2 }}>
                                {item.description}
                              </Typography>
                            )}

                            {item.responsibilities && (
                              <Box component="ul" sx={{
                                pl: 2,
                                mb: 0,
                                '& li': {
                                  mb: 1
                                }
                              }}>
                                {item.responsibilities.map((responsibility, i) => (
                                  <Box
                                    component="li"
                                    key={i}
                                    sx={{
                                      position: 'relative',
                                      pl: 2,
                                      '&:before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: '0.6em',
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        backgroundColor: getStepColor(item.type)
                                      }
                                    }}
                                  >
                                    <Typography variant="body2">
                                      {responsibility}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </Paper>
                        </motion.div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box >
  );
};

export default React.memo(ExperienceSection);