// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Chip,
//   useTheme,
//   CardMedia,
//   IconButton,
//   ButtonGroup,
//   Tabs,
//   Tab,
//   Divider,
//   Fade
// } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ExternalLink, Github, Maximize, ChevronRight, Crown } from 'lucide-react';
// import { fadeIn, staggerContainer } from './ui/animations';
// import { GradientText } from './ui/AnimatedText';
// import { resumeData } from '../utils/resumeData';

// const ProjectsSection = () => {
//   const theme = useTheme();
//   const [activeTab, setActiveTab] = useState('all');
//   const [projects, setProjects] = useState(resumeData.projects);

//   const techColors = {
//     primary: theme.palette.primary.main,
//     secondary: theme.palette.secondary.main,
//     accent: theme.palette.accent.main,
//     glow: theme.palette.mode === 'dark' ? 'rgba(100, 200, 255, 0.5)' : 'rgba(0, 100, 255, 0.3)',
//     bg: theme.palette.background.default,
//     text: theme.palette.text.primary
//   };

//   // Placeholder images for projects
//   const projectImages = [
//     'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
//   ];

//   // Filter projects based on active tab
//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);

//     if (newValue === 'all') {
//       setProjects(resumeData.projects);
//     } else {
//       const filtered = resumeData.projects.filter(project => project.category.toLowerCase() === newValue);
//       setProjects(filtered);
//     }
//   };

//   // Get unique categories from the projects
//   const categories = ['all', ...new Set(resumeData.projects.map(project => project.category.toLowerCase()))];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <Box
//       id="projects"
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.mode === 'dark'
//           ? 'rgba(18, 18, 18, 0.8)'
//           : 'rgba(248, 249, 250, 0.8)',
//       }}
//     >
//       {/* Background elements */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.05 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         sx={{
//           position: 'absolute',
//           top: '-10%',
//           left: '-5%',
//           width: { xs: '300px', md: '600px' },
//           height: { xs: '300px', md: '600px' },
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, rgba(0,0,0,0) 70%)`,
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
//           <Box
//             component={motion.div}
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             sx={{
//               display: 'inline-block',
//               mb: 2
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 color: theme.palette.primary.main,
//                 fontWeight: 600,
//                 letterSpacing: 2,
//                 mb: 1,
//                 display: 'flex',
//                 alignItems: 'center'
//               }}
//             >
//               <Crown style={{ marginRight: 8 }} />
//               MY WORK
//             </Typography>
//             <Typography
//               variant="body1"
//               component={motion.p}
//               variants={fadeIn('up', 0.4)}
//               sx={{
//                 maxWidth: '700px',
//                 mx: 'auto',
//                 color: techColors.text,
//                 opacity: 0.8
//               }}
//             >
//               A collection of my most recent projects showcasing my skills and experience.
//               Each project represents a unique challenge and solution.
//             </Typography>
//           </Box>
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             {/* <Typography
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
//               MY WORK
//             </Typography>

//             <GradientText
//               text="Recent Projects"
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
//                 mb: 5,
//                 color: theme.palette.text.secondary
//               }}
//             >
//               A collection of my most recent projects showcasing my skills and experience.
//               Each project represents a unique challenge and solution.
//             </Typography> */}

//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 mb: 5
//               }}
//             >
//               <Tabs
//                 value={activeTab}
//                 onChange={handleTabChange}
//                 indicatorColor="primary"
//                 textColor="primary"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 sx={{
//                   '& .MuiTab-root': {
//                     textTransform: 'capitalize',
//                     minWidth: 100,
//                     fontWeight: 500
//                   }
//                 }}
//               >
//                 {categories.map((category) => (
//                   <Tab
//                     key={category}
//                     label={category.charAt(0).toUpperCase() + category.slice(1)}
//                     value={category}
//                   />
//                 ))}
//               </Tabs>
//             </Box>
//           </Box>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             <Grid container spacing={4}>
//               <AnimatePresence>
//                 {projects.map((project, index) => (
//                   <Grid item xs={12} md={6} lg={4} key={project.id}>
//                     <motion.div variants={item} layout>
//                       <Card
//                         className="hover-scale"
//                         sx={{
//                           height: '100%',
//                           display: 'flex',
//                           flexDirection: 'column',
//                           borderRadius: 4,
//                           overflow: 'hidden',
//                           transition: 'all 0.3s ease-in-out',
//                           backgroundColor: theme.palette.mode === 'dark'
//                             ? 'rgba(30,30,30,0.8)'
//                             : 'rgba(255,255,255,0.9)',
//                           boxShadow: theme.palette.mode === 'dark'
//                             ? '0 10px 30px -10px rgba(0,0,0,0.3)'
//                             : '0 10px 30px -10px rgba(0,0,0,0.1)',
//                         }}
//                       >
//                         <Box sx={{ position: 'relative' }}>
//                           <CardMedia
//                             component="img"
//                             height="200"
//                             image={projectImages[index % projectImages.length]}
//                             alt={project.title}
//                             sx={{
//                               objectFit: 'cover',
//                             }}
//                           />
//                           <Box
//                             sx={{
//                               position: 'absolute',
//                               top: 0,
//                               right: 0,
//                               p: 1,
//                               display: 'flex',
//                               gap: 0.5,
//                               backdropFilter: 'blur(10px)',
//                               backgroundColor: 'rgba(0,0,0,0.4)',
//                               borderBottomLeftRadius: 8,
//                             }}
//                           >
//                             <Chip
//                               label={project.category}
//                               size="small"
//                               sx={{
//                                 backgroundColor: theme.palette.primary.main,
//                                 color: 'white',
//                                 fontWeight: 500,
//                                 height: 24
//                               }}
//                             />
//                           </Box>
//                         </Box>

//                         <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                           <Typography
//                             gutterBottom
//                             variant="h5"
//                             component="h3"
//                             sx={{
//                               fontWeight: 600,
//                               mb: 2
//                             }}
//                           >
//                             {project.title}
//                           </Typography>

//                           <Typography
//                             variant="body2"
//                             color="text.secondary"
//                             sx={{ mb: 3 }}
//                           >
//                             {project.description}
//                           </Typography>

//                           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
//                             {project.technologies.map((tech, i) => (
//                               <Chip
//                                 key={i}
//                                 label={tech}
//                                 size="small"
//                                 variant="outlined"
//                                 sx={{
//                                   borderRadius: '4px',
//                                   backgroundColor: theme.palette.mode === 'dark'
//                                     ? 'rgba(255,255,255,0.05)'
//                                     : 'rgba(0,0,0,0.04)',
//                                   borderColor: 'transparent'
//                                 }}
//                               />
//                             ))}
//                           </Box>
//                         </CardContent>

//                         <Divider />

//                         <CardActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
//                           <ButtonGroup variant="text" size="small">
//                             <IconButton
//                               color="primary"
//                               aria-label="view code"
//                               component="a"
//                               href={project.githubUrl}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <Github size={20} />
//                             </IconButton>
//                             <IconButton
//                               color="primary"
//                               aria-label="live demo"
//                               component="a"
//                               href={project.demoUrl}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               <ExternalLink size={20} />
//                             </IconButton>
//                           </ButtonGroup>

//                           <Button
//                             size="small"
//                             color="primary"
//                             endIcon={<ChevronRight />}
//                             sx={{ textTransform: 'none' }}
//                           >
//                             View Details
//                           </Button>
//                         </CardActions>
//                       </Card>
//                     </motion.div>
//                   </Grid>
//                 ))}
//               </AnimatePresence>
//             </Grid>
//           </motion.div>

//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               mt: 6
//             }}
//           >
//             <Button
//               variant="outlined"
//               color="primary"
//               size="large"
//               endIcon={<ExternalLink />}
//               sx={{
//                 px: 4,
//                 py: 1.2,
//                 borderRadius: 30,
//                 borderWidth: 2
//               }}
//             >
//               View All Projects
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default ProjectsSection;

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  CardMedia,
  CardActions,
  IconButton,
  Tabs,
  Tab,
  Divider,
  Fade,
  Paper
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Crown, Zap, Maximize2, Workflow } from 'lucide-react';
import { fadeIn, staggerContainer } from './ui/animations';
import { GradientText } from './ui/AnimatedText';
import { resumeData } from '../utils/resumeData';

const ProjectsSection = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [projects, setProjects] = useState(resumeData.projects);

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

  // Project images (replace with your actual images)
  const projectImages = [
    'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ];

  // Filter projects based on active tab
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setExpandedProject(null);

    if (newValue === 'all') {
      setProjects(resumeData.projects);
    } else {
      const filtered = resumeData.projects.filter(project => project.category.toLowerCase() === newValue);
      setProjects(filtered);
    }
  };

  // Get unique categories from the projects
  const categories = ['all', ...new Set(resumeData.projects.map(project => project.category.toLowerCase()))];

  const toggleExpandProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 }
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #121212 0%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e6e6ff 100%)',
        borderTop: `1px solid ${techColors.primary}20`,
        borderBottom: `1px solid ${techColors.primary}20`,
      }}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${techColors.primary} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          

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
              <Workflow fontSize="small" sx={{ mr: 1 }} />
              PORTFOLIO HIGHLIGHTS
              <Workflow fontSize="small" sx={{ ml: 1 }} />
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
               Project Showcase
            </Typography>
          </Box>


          {/* Filter Tabs */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                borderRadius: 3,
                backgroundColor: theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(0,0,0,0.03)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${techColors.primary}20`
              }}
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'capitalize',
                    minWidth: 100,
                    fontWeight: 500,
                    borderRadius: 2,
                    mx: 0.5,
                    '&.Mui-selected': {
                      // backgroundColor: `${techColors.primary}15`,
                      color: techColors.primary
                    }
                  }
                }}
              >
                {categories.map((category) => (
                  <Tab
                    key={category}
                    label={category.charAt(0).toUpperCase() + category.slice(1)}
                    value={category}
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </Tabs>
            </Paper>
          </Box>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(2, 1fr)'
                },
                gap: 4,
                marginTop: 4
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  whileHover={{ y: -5 }}
                  style={{
                    display: 'flex',
                    height: '100%'
                  }}
                >
                  <Card
                    component={motion.div}
                    whileHover={{
                      y: -5,
                      boxShadow: `0 15px 30px ${techColors.primary}20`
                    }}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(30,30,30,0.8)'
                        : 'rgba(255,255,255,0.9)',
                      border: `1px solid ${techColors.primary}20`,
                      backdropFilter: 'blur(10px)',
                      boxShadow: `0 8px 32px ${techColors.primary}10`,
                      position: 'relative'
                    }}
                  >
                    {/* Project Image */}
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component={motion.div}
                        whileHover={{ scale: 1.03 }}
                        sx={{
                          height: 220,
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="img"
                          src={projectImages[index % projectImages.length]}
                          alt={project.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: theme.palette.mode === 'dark'
                              ? 'brightness(0.8) contrast(1.1)'
                              : 'brightness(0.95) contrast(1.05)'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(to bottom, transparent 60%, ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.3)'})`
                          }}
                        />
                      </CardMedia>

                      {/* Category Badge */}
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: techColors.primary,
                          color: 'white',
                          fontWeight: 600,
                          px: 1,
                          height: 28,
                          boxShadow: `0 2px 10px ${techColors.primary}50`
                        }}
                      />
                    </Box>

                    {/* Project Content */}
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            flexGrow: 1
                          }}
                        >
                          {project.title}
                        </Typography>
                        <IconButton
                          onClick={() => toggleExpandProject(project.id)}
                          sx={{
                            color: techColors.primary,
                            backgroundColor: `${techColors.primary}15`,
                            '&:hover': {
                              backgroundColor: `${techColors.primary}25`
                            }
                          }}
                        >
                          <Maximize2 size={18} />
                        </IconButton>
                      </Box>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" sx={{
                          display: 'block',
                          mb: 1,
                          color: techColors.primary,
                          fontWeight: 500
                        }}>
                          Technologies Used:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                borderRadius: '4px',
                                backgroundColor: `${techColors.primary}10`,
                                color: techColors.text,
                                border: `1px solid ${techColors.primary}20`,
                                fontWeight: 500
                              }}
                            />
                          ))}
                        </Box>
                      </Box>

                      {/* Expanded Content */}
                      <motion.div
                        initial="collapsed"
                        animate={expandedProject === project.id ? "expanded" : "collapsed"}
                        variants={expandVariants}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${techColors.primary}20` }}>
                          <Typography variant="body2" sx={{ mb: 2 }}>
                            <strong>Key Features:</strong>
                          </Typography>
                          <ul style={{
                            paddingLeft: 20,
                            marginTop: 0,
                            marginBottom: 16
                          }}>
                            {project.achievements?.map((achievement, i) => (
                              <li key={i}>
                                <Typography variant="body2" component="span">
                                  {achievement}
                                </Typography>
                              </li>
                            )) || (
                                <li>
                                  <Typography variant="body2" component="span">
                                    No additional details available
                                  </Typography>
                                </li>
                              )}
                          </ul>
                        </Box>
                      </motion.div>
                    </CardContent>

                    {/* Project Actions */}
                    {/* <CardActions sx={{
                          px: 3,
                          py: 2,
                          borderTop: `1px solid ${techColors.primary}20`,
                          justifyContent: 'space-between'
                        }}>
                          <Box>
                            <Button
                              size="small"
                              color="primary"
                              component="a"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              startIcon={<Github size={18} />}
                              sx={{
                                mr: 1,
                                textTransform: 'none',
                                fontWeight: 500
                              }}
                            >
                              Code
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              component="a"
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              startIcon={<ExternalLink size={18} />}
                              sx={{
                                textTransform: 'none',
                                fontWeight: 500
                              }}
                            >
                              Live Demo
                            </Button>
                          </Box>
                          <Button
                            size="small"
                            onClick={() => toggleExpandProject(project.id)}
                            endIcon={
                              <motion.div
                                animate={{
                                  rotate: expandedProject === project.id ? 180 : 0
                                }}
                              >
                                <ChevronRight size={18} />
                              </motion.div>
                            }
                            sx={{
                              textTransform: 'none',
                              color: techColors.text,
                              '&:hover': {
                                backgroundColor: `${techColors.primary}10`
                              }
                            }}
                          >
                            {expandedProject === project.id ? 'Show Less' : 'More Details'}
                          </Button>
                        </CardActions> */}
                  </Card>
                </motion.div>

              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box >
  );
};

export default ProjectsSection;