// import React from 'react';
// import { Box, Container, Grid, Typography, Button, useTheme, Avatar, Chip, Paper } from '@mui/material';
// import { motion } from 'framer-motion';
// import { FileText, ChevronRight, Award, Clock, Book, Heart } from 'lucide-react';
// import { fadeIn, slideIn } from './ui/animations';
// import { GradientText } from './ui/AnimatedText';
// import { resumeData } from '../utils/resumeData';

// const AboutSection = () => {
//   const theme = useTheme();

//   // Extract data from resumeData
//   const { personalInfo, summary, education, strengths } = resumeData;

//   return (
//     <Box 
//       id="about"
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
//           bottom: '-10%',
//           right: '-5%',
//           width: { xs: '300px', md: '600px' },
//           height: { xs: '300px', md: '600px' },
//           borderRadius: '50%',
//           background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, rgba(0,0,0,0) 70%)`,
//           filter: 'blur(60px)',
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={6} alignItems="center">
//           {/* Left column - About me content */}
//           <Grid 
//             item 
//             xs={12} 
//             md={6}
//           >
//             <Box
//               component={motion.div}
//               variants={fadeIn('right', 0.3)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//             >
//               <Typography 
//                 variant="overline"
//                 sx={{ 
//                   color: theme.palette.secondary.main,
//                   fontWeight: 600,
//                   letterSpacing: 2,
//                   mb: 1
//                 }}
//               >
//                 ABOUT ME
//               </Typography>

//               <GradientText
//                 text="Who Am I?"
//                 variant="h2"
//                 sx={{ 
//                   fontWeight: 700,
//                   mb: 3
//                 }}
//               />

//               <Typography 
//                 variant="body1" 
//                 sx={{ 
//                   mb: 4,
//                   lineHeight: 1.8,
//                   color: theme.palette.text.secondary
//                 }}
//               >
//                 {summary}
//               </Typography>

//               <Grid container spacing={3} sx={{ mb: 4 }}>
//                 <Grid item xs={12} sm={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       backgroundColor: theme.palette.mode === 'dark' 
//                         ? 'rgba(255,255,255,0.05)' 
//                         : 'rgba(0,0,0,0.02)',
//                       borderRadius: 2,
//                       height: '100%',
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                       <Avatar
//                         sx={{ 
//                           backgroundColor: theme.palette.primary.main,
//                           width: 36,
//                           height: 36,
//                           mr: 1
//                         }}
//                       >
//                         <Award size={20} />
//                       </Avatar>
//                       <Typography variant="h6" fontWeight={600}>
//                         Education
//                       </Typography>
//                     </Box>

//                     <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                       {education[0].degree}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" gutterBottom>
//                       {education[0].school} ({education[0].startDate} - {education[0].endDate})
//                     </Typography>

//                     <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
//                       {education[1].degree}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {education[1].school} ({education[1].startDate} - {education[1].endDate})
//                     </Typography>
//                   </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       backgroundColor: theme.palette.mode === 'dark' 
//                         ? 'rgba(255,255,255,0.05)' 
//                         : 'rgba(0,0,0,0.02)',
//                       borderRadius: 2,
//                       height: '100%',
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                       <Avatar
//                         sx={{ 
//                           backgroundColor: theme.palette.secondary.main,
//                           width: 36,
//                           height: 36,
//                           mr: 1
//                         }}
//                       >
//                         <Heart size={20} color="black" />
//                       </Avatar>
//                       <Typography variant="h6" fontWeight={600}>
//                         Interests
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                       {['Web Development', 'Data Visualization', 'UI/UX Design', 'Cloud Technologies', 'Machine Learning'].map((interest, index) => (
//                         <Chip 
//                           key={index}
//                           label={interest}
//                           size="small"
//                           sx={{ 
//                             mb: 1,
//                             backgroundColor: theme.palette.mode === 'dark' 
//                               ? 'rgba(255,255,255,0.1)' 
//                               : 'rgba(0,0,0,0.05)',
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </Paper>
//                 </Grid>
//               </Grid>

//               <Box 
//                 component={motion.div}
//                 variants={slideIn('up', 'tween', 0.4, 0.5)}
//               >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   endIcon={<FileText />}
//                   className="glow-on-hover"
//                   sx={{ 
//                     py: 1.2, 
//                     px: 3,
//                     borderRadius: '30px'
//                   }}
//                 >
//                   Download Resume
//                 </Button>

//                 <Button
//                   variant="text"
//                   color="primary"
//                   size="large"
//                   endIcon={<ChevronRight />}
//                   sx={{ 
//                     ml: 2,
//                     textTransform: 'none'
//                   }}
//                 >
//                   View Projects
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>

//           {/* Right column - Strengths and info cards */}
//           <Grid 
//             item 
//             xs={12} 
//             md={6}
//           >
//             <Box
//               component={motion.div}
//               variants={fadeIn('left', 0.3)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//             >
//               <Typography 
//                 variant="h4" 
//                 sx={{ 
//                   mb: 3,
//                   fontWeight: 600
//                 }}
//               >
//                 My Strengths
//               </Typography>

//               <Grid container spacing={2} sx={{ mb: 4 }}>
//                 {strengths.map((strength, index) => (
//                   <Grid item xs={12} key={index}>
//                     <Paper
//                       component={motion.div}
//                       variants={fadeIn('up', 0.1 * index)}
//                       elevation={0}
//                       sx={{
//                         p: 2,
//                         display: 'flex',
//                         alignItems: 'center',
//                         backgroundColor: theme.palette.mode === 'dark' 
//                           ? 'rgba(255,255,255,0.05)' 
//                           : 'rgba(0,0,0,0.02)',
//                         borderRadius: 2,
//                         '&:hover': {
//                           backgroundColor: theme.palette.mode === 'dark' 
//                             ? 'rgba(255,255,255,0.1)' 
//                             : 'rgba(0,0,0,0.05)',
//                           transform: 'translateX(10px)'
//                         },
//                         transition: 'all 0.3s ease-in-out'
//                       }}
//                     >
//                       <ChevronRight 
//                         size={20} 
//                         color={theme.palette.primary.main} 
//                       />
//                       <Typography 
//                         variant="body1" 
//                         sx={{ ml: 2 }}
//                       >
//                         {strength}
//                       </Typography>
//                     </Paper>
//                   </Grid>
//                 ))}
//               </Grid>

//               <Typography 
//                 variant="h4" 
//                 sx={{ 
//                   mb: 3,
//                   fontWeight: 600
//                 }}
//               >
//                 Personal Info
//               </Typography>

//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       height: '100%',
//                       backgroundColor: theme.palette.mode === 'dark' 
//                         ? 'rgba(255,255,255,0.05)' 
//                         : 'rgba(0,0,0,0.02)',
//                       borderRadius: 2,
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Award 
//                         size={16} 
//                         color={theme.palette.primary.main} 
//                         style={{ marginRight: '8px' }}
//                       />
//                       <Typography variant="body2" color="text.secondary">
//                         Experience:
//                       </Typography>
//                       <Typography variant="body2" sx={{ ml: 1, fontWeight: 'bold' }}>
//                         3+ Years
//                       </Typography>
//                     </Box>
//                   </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       height: '100%',
//                       backgroundColor: theme.palette.mode === 'dark' 
//                         ? 'rgba(255,255,255,0.05)' 
//                         : 'rgba(0,0,0,0.02)',
//                       borderRadius: 2,
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Book 
//                         size={16} 
//                         color={theme.palette.primary.main} 
//                         style={{ marginRight: '8px' }}
//                       />
//                       <Typography variant="body2" color="text.secondary">
//                         Degree:
//                       </Typography>
//                       <Typography variant="body2" sx={{ ml: 1, fontWeight: 'bold' }}>
//                         B.Sc in Computer Science
//                       </Typography>
//                     </Box>
//                   </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       height: '100%',
//                       backgroundColor: theme.palette.mode === 'dark' 
//                         ? 'rgba(255,255,255,0.05)' 
//                         : 'rgba(0,0,0,0.02)',
//                       borderRadius: 2,
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Clock 
//                         size={16} 
//                         color={theme.palette.primary.main} 
//                         style={{ marginRight: '8px' }}
//                       />
//                       <Typography variant="body2" color="text.secondary">
//                         Availability:
//                       </Typography>
//                       <Typography variant="body2" sx={{ ml: 1, fontWeight: 'bold' }}>
//                         Full-time
//                       </Typography>
//                     </Box>
//                   </Paper>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       height: '100%',
//                       backgroundColor: theme.palette.mode === 'dark' 
//                         ? 'rgba(255,255,255,0.05)' 
//                         : 'rgba(0,0,0,0.02)',
//                       borderRadius: 2,
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Award 
//                         size={16} 
//                         color={theme.palette.primary.main} 
//                         style={{ marginRight: '8px' }}
//                       />
//                       <Typography variant="body2" color="text.secondary">
//                         Location:
//                       </Typography>
//                       <Typography variant="body2" sx={{ ml: 1, fontWeight: 'bold' }}>
//                         {personalInfo.location.city}, {personalInfo.location.state}
//                       </Typography>
//                     </Box>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

import React from 'react';
import { Box, Container, Grid, Typography, Button, useTheme, Avatar, Chip, Paper, Divider } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { FileText, ChevronRight, Award, Clock, Book, Heart, Crown, Shield, Sparkles, Gem, Code } from 'lucide-react';
import { fadeIn, slideIn, staggerContainer } from './ui/animations';
import { GradientText } from './ui/AnimatedText';
import { resumeData } from '../utils/resumeData';

const AboutSection = () => {
  const theme = useTheme();
  const controls = useAnimation();

  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    work: theme.palette.mode === 'dark' ? '#4fc3f7' : '#0288d1',
    education: theme.palette.mode === 'dark' ? '#81c784' : '#388e3c',
    bg: theme.palette.background.default,
    text: theme.palette.text.primary
  };


  // Extract data from resumeData
  const { personalInfo, summary, education, strengths } = resumeData;

  const handleHoverStart = () => {
    controls.start({
      scale: 1.05,
      boxShadow: `0 0 20px ${theme.palette.primary.main}`,
      transition: { duration: 0.3 }
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.3 }
    });
  };

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.mode === 'dark'
          ? 'rgba(255, 215, 0, 0.2)'
          : 'rgba(75, 0, 130, 0.2)'}`,
      }}
    >
      {/* Decorative elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
      >
        <Crown
          size={300}
          color={theme.palette.mode === 'dark'
            ? 'rgba(147, 112, 219, 0.1)'
            : 'rgba(75, 0, 130, 0.1)'}
        />
      </Box>

      {/* Animated floating elements */}
      {[1, 2, 3, 4].map((i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [0, -50, 0],
            x: Math.random() > 0.5 ? [0, 20, 0] : [0, -20, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3
          }}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            zIndex: 0,
          }}
        >
          <Gem
            size={24 + Math.random() * 20}
            color={theme.palette.mode === 'dark'
              ? `rgba(147, 112, 219, ${0.2 + Math.random() * 0.3})`
              : `rgba(75, 0, 130, ${0.2 + Math.random() * 0.3})`}
          />
        </Box>
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Left column - About me content */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              component={motion.div}
              variants={fadeIn('right', 0.3)}
            >
              {/* <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                sx={{
                  display: 'inline-block',
                  mb: 2
                }}
              >
                <Typography 
                  variant="h2"
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Crown  style={{ marginRight: 8 }} />
                  ABOUT ME
                </Typography>
              </Box> */}

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
                  <Code fontSize="small" sx={{ mr: 1 }} />
                  GET TO KNOW ME
                  <Code fontSize="small" sx={{ ml: 1 }} />
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
                  About Me
                </Typography>
              </Box>

              <GradientText
                text="Who Am I?"
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textShadow: theme.palette.mode === 'dark'
                    ? `0 0 10px ${theme.palette.primary.main}`
                    : 'none',
                  background: theme.palette.mode === 'dark'
                    ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                    : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              />

              <Paper
                elevation={0}
                component={motion.div}
                whileHover={{
                  boxShadow: `0 8px 32px ${theme.palette.mode === 'dark'
                    ? 'rgba(147, 112, 219, 0.2)'
                    : 'rgba(75, 0, 130, 0.2)'}`,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
                sx={{
                  p: 3,
                  mb: 4,
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(30, 30, 30, 0.7)'
                    : 'rgba(255, 255, 255, 0.7)',
                  border: `1px solid ${theme.palette.primary.main}`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px'
                }}
              >
                <Typography variant="body1">
                  {summary}
                </Typography>
              </Paper>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {/* <Grid item xs={12} sm={6}>
                  <Paper
                    component={motion.div}
                    whileHover={{
                      y: -5,
                      borderColor: theme.palette.primary.main
                    }}
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '12px',
                      height: '100%',
                      border: '1px solid',
                      borderColor: theme.palette.primary.light,
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '40px',
                        height: '40px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, transparent 70%)`,
                        borderBottomLeftRadius: '40px',
                        opacity: 0.3
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                          width: 36,
                          height: 36,
                          mr: 1
                        }}
                      >
                        <Award size={20} />
                      </Avatar>
                      <Typography variant="h6" fontWeight={600} sx={{ color: theme.palette.primary.main }}>
                        Education
                      </Typography>
                    </Box>

                    <Box sx={{ pl: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Sparkles size={14} color={theme.palette.primary.main} style={{ marginRight: 8 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {education[0].degree}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ pl: 2.2, mb: 2 }}>
                        {education[0].school} ({education[0].startDate} - {education[0].endDate})
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Sparkles size={14} color={theme.palette.primary.main} style={{ marginRight: 8 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {education[1].degree}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ pl: 2.2 }}>
                        {education[1].school} ({education[1].startDate} - {education[1].endDate})
                      </Typography>
                    </Box>
                  </Paper>
                </Grid> */}

                <Grid item xs={12} sm={6}>
                  <Paper
                    component={motion.div}
                    whileHover={{
                      y: -5,
                      borderColor: theme.palette.secondary.main
                    }}
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '12px',
                      height: '100%',
                      border: '1px solid',
                      borderColor: theme.palette.secondary.light,
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '40px',
                        height: '40px',
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, transparent 70%)`,
                        borderBottomLeftRadius: '40px',
                        opacity: 0.3
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                          width: 36,
                          height: 36,
                          mr: 1
                        }}
                      >
                        <Heart size={20} />
                      </Avatar>
                      <Typography variant="h6" fontWeight={600} sx={{ color: theme.palette.secondary.main }}>
                        Interests
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pl: 0.5 }}>
                      {['Web Development', 'Data Visualization', 'UI/UX Design', 'Cloud Technologies', 'Machine Learning'].map((interest, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Chip
                            label={interest}
                            size="small"
                            sx={{
                              mb: 1,
                              background: theme.palette.background.default,
                              border: `1px solid ${index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                              color: theme.palette.text.primary,
                              fontWeight: 500
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              <Box
                component={motion.div}
                variants={slideIn('up', 'tween', 0.4, 0.5)}
                sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<FileText />}
                    sx={{
                      py: 1.2,
                      px: 3,
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      color: theme.palette.primary.contrastText,
                      fontWeight: 600,
                      boxShadow: `0 4px 15px ${theme.palette.mode === 'dark'
                        ? 'rgba(147, 112, 219, 0.3)'
                        : 'rgba(75, 0, 130, 0.3)'}`,
                      '&:hover': {
                        boxShadow: `0 6px 20px ${theme.palette.mode === 'dark'
                          ? 'rgba(147, 112, 219, 0.5)'
                          : 'rgba(75, 0, 130, 0.5)'}`,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      }
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    endIcon={<ChevronRight />}
                    sx={{
                      borderRadius: '12px',
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: theme.palette.mode === 'dark'
                          ? `rgba(${theme.palette.primary.main}, 0.1)`
                          : `rgba(${theme.palette.primary.main}, 0.1)`
                      }
                    }}
                  >
                    View Projects
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Grid>

          {/* Right column - Strengths and info cards */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              component={motion.div}
              variants={fadeIn('left', 0.3)}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                sx={{
                  display: 'inline-block',
                  mb: 3
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Shield size={28} style={{ marginRight: 12 }} />
                  My Strengths
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {strengths.map((strength, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      component={motion.div}
                      variants={fadeIn('up', 0.1 * index)}
                      whileHover={{
                        x: 10,
                        borderLeft: `4px solid ${index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`
                      }}
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '8px',
                        borderLeft: '4px solid transparent',
                        backdropFilter: 'blur(10px)',
                        cursor: 'default',
                        transition: 'all 0.3s ease',
                        boxShadow: theme.shadows[2]
                      }}
                    >
                      <Box
                        component={motion.div}
                        animate={{
                          rotate: [0, 10, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }
                        }}
                        sx={{
                          background: `linear-gradient(135deg, ${index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main} 0%, ${index % 2 === 0 ? theme.palette.primary.dark : theme.palette.secondary.dark} 100%)`,
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          flexShrink: 0
                        }}
                      >
                        <ChevronRight
                          size={16}
                          color={index % 2 === 0 ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText}
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          color: theme.palette.text.primary
                        }}
                      >
                        {strength}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                sx={{
                  display: 'inline-block',
                  mb: 3
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Gem size={28} style={{ marginRight: 12 }} />
                  Personal Info
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {[
                  { icon: <Award size={20} color={theme.palette.primary.main} />, label: "Experience:", value: "3+ Years" },
                  { icon: <Book size={20} color={theme.palette.primary.main} />, label: "Degree:", value: "B.Sc in Computer Science" },
                  { icon: <Clock size={20} color={theme.palette.primary.main} />, label: "Availability:", value: "Full-time" },
                  { icon: <Award size={20} color={theme.palette.primary.main} />, label: "Location:", value: `${personalInfo.location.city}, ${personalInfo.location.state}` }
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: '100%',
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '12px',
                          border: `1px solid ${theme.palette.primary.light}`,
                          backdropFilter: 'blur(10px)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '30px',
                            height: '30px',
                            background: `linear-gradient(135deg, ${index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main} 0%, transparent 70%)`,
                            borderBottomLeftRadius: '30px',
                            opacity: 0.3
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ mr: 2 }}>
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography variant="body2" color="text.secondary">
                              {item.label}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                              {item.value}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;