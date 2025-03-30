import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import ThreeDAvatar from './3d/ThreeDAvatar';
import FloatingBadge from './ui/FloatingBadge';
import { fadeIn, staggerContainer, textVariant, zoomIn } from './ui/animations';
import { Code, Layers, Database, Globe } from 'lucide-react';

const GradientText = ({ children, delay = 0, variant = "h2", ...props }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      variants={textVariant(delay)}
      initial="hidden"
      animate="show"
    >
      <Typography
        variant={variant}
        component="span"
        {...props}
        sx={{
          fontWeight: 700,
          background: theme.palette.mode === 'light' 
            ? 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)' 
            : 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          ...props.sx
        }}
      >
        {children}
      </Typography>
    </motion.div>
  );
};

const IconBox = ({ icon, delay }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial="hidden"
      animate="show"
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.palette.mode === 'light'
            ? 'rgba(75, 0, 130, 0.1)'
            : 'rgba(147, 112, 219, 0.1)',
          color: 'primary.main',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }
        }}
      >
        {icon}
      </Box>
    </motion.div>
  );
};

const TechStack = () => {
  const techIcons = [
    { icon: <Code size={24} />, delay: 0.2 },
    { icon: <Layers size={24} />, delay: 0.3 },
    { icon: <Database size={24} />, delay: 0.4 },
    { icon: <Globe size={24} />, delay: 0.5 }
  ];
  
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
      {techIcons.map((tech, index) => (
        <IconBox key={index} icon={tech.icon} delay={tech.delay} />
      ))}
    </Box>
  );
};

const HeroSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const resumeData = {
    personalInfo: {
      name: "Dhanush J",
      title: "Senior Full Stack Developer"
    }
  };

  return (
    <Box 
      id={id}
      component="section"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, rgba(248,249,250,1) 0%, rgba(232,236,241,1) 100%)' 
          : 'linear-gradient(135deg, rgba(18,18,18,1) 0%, rgba(33,33,33,1) 100%)',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(75,0,130,0.07) 0%, rgba(75,0,130,0) 70%)' 
            : 'radial-gradient(circle, rgba(147,112,219,0.07) 0%, rgba(147,112,219,0) 70%)',
          top: '-20vw',
          right: '-20vw',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
        style={{
          position: 'absolute',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, rgba(255,215,0,0) 70%)' 
            : 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, rgba(255,215,0,0) 70%)',
          bottom: '-10vw',
          left: '-10vw',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer(0, 0.2)}
          initial="hidden"
          animate="show"
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center'
            }}
          >
            <Box>
              <motion.div variants={fadeIn('right', 0.2)}>
                <Box 
                  sx={{ 
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <GradientText delay={0.3} variant="h5" sx={{ mb: 1, opacity: 0.9 }}>
                    {resumeData.personalInfo.name}
                  </GradientText>
                  
                  <GradientText variant="h2" sx={{ mb: 2 }}>
                    {resumeData.personalInfo.title}
                  </GradientText>
                  
                  <motion.div variants={fadeIn('up', 0.4)}>
                    <Typography 
                      variant="h5" 
                      color="textSecondary" 
                      paragraph
                      sx={{ 
                        mb: 4,
                        fontWeight: 400,
                        maxWidth: { md: '80%' },
                        mx: { xs: 'auto', md: 0 }
                      }}
                    >
                      Senior Full Stack Developer with 3+ years of specialized experience in React.js, Node.js, and MySQL. 
                      Expert in creating sophisticated, scalable web applications with exceptional UI/UX.
                    </Typography>
                  </motion.div>
                  
                  <TechStack />
                  
                  <motion.div 
                    variants={fadeIn('up', 0.6)} 
                    style={{
                      display: 'flex', 
                      justifyContent: { xs: 'center', md: 'flex-start' }, 
                      gap: '16px',
                      marginTop: '32px'
                    }}
                  >
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => scrollToSection('features', 70)}
                      className="button-hover-effect"
                      sx={{ 
                        px: 4, 
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600
                      }}
                    >
                      Explore Features
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="large"
                      onClick={() => scrollToSection('contact', 70)}
                      className="button-hover-effect"
                      sx={{ 
                        px: 4, 
                        py: 1.5,
                        borderRadius: 2
                      }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
            
            <Box>
              <motion.div
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                animate="show"
              >
                <Box sx={{ position: 'relative' }}>
                  <motion.div
                    variants={zoomIn(0.3, 0.8)}
                    initial="hidden"
                    animate="show"
                  >
                    <Box sx={{ aspectRatio: '1/1', position: 'relative', height: isMobile ? '280px' : '400px' }}>
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(147,112,219,0.3) 0%, rgba(75,0,130,0) 70%)',
                          animation: 'spin-slow 15s linear infinite',
                          '@keyframes spin-slow': {
                            '0%': {
                              transform: 'rotate(0deg)',
                            },
                            '100%': {
                              transform: 'rotate(360deg)',
                            },
                          },
                          opacity: 0.3,
                          filter: 'blur(15px)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: '12px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #4B0082 0%, #9370DB 100%)',
                          p: '4px',
                          animation: 'morph 8s ease-in-out infinite',
                          '@keyframes morph': {
                            '0%': {
                              borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                            },
                            '50%': {
                              borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
                            },
                            '100%': {
                              borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                            },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid rgba(255,255,255,0.2)',
                            boxShadow: theme.shadows[10],
                            backdropFilter: 'blur(10px)',
                            bgcolor: theme.palette.mode === 'light' ? 'rgba(245,245,248,0.4)' : 'rgba(42,42,66,0.4)',
                          }}
                        >
                          <ThreeDAvatar />
                        </Box>
                      </Box>
                    </Box>

                    <FloatingBadge
                      icon="code"
                      text="React Expert"
                      position="-top-6 -right-6"
                      color="royal-bg text-white"
                      delay={0.5}
                    />

                    <FloatingBadge
                      icon="smartphone"
                      text="App Wizard"
                      position="-bottom-4 -left-6"
                      color="royal-bg text-white"
                      delay={0.7}
                    />

                    <FloatingBadge
                      icon="server"
                      text="Full Stack Master"
                      position="-right-8 bottom-1/3"
                      color="royal-bg text-white"
                      delay={0.9}
                    />

                    <FloatingBadge
                      icon="sparkles"
                      text="UI/UX Virtuoso"
                      position="-left-8 top-1/3"
                      color="royal-bg text-white"
                      delay={1.1}
                    />
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
      
      {/* Enhanced Floating particles */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(40)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            sx={{
              position: 'absolute',
              width: Math.random() * 15 + 5 + 'px',
              height: Math.random() * 15 + 5 + 'px',
              backgroundColor: theme.palette.mode === 'light' 
                ? i % 2 === 0 ? 'rgba(75,0,130,0.15)' : 'rgba(255,215,0,0.15)'
                : i % 2 === 0 ? 'rgba(147,112,219,0.15)' : 'rgba(255,215,0,0.15)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              filter: 'blur(2px)',
              boxShadow: theme.palette.mode === 'light'
                ? i % 2 === 0 ? '0 0 10px rgba(75,0,130,0.2)' : '0 0 10px rgba(255,215,0,0.2)'
                : i % 2 === 0 ? '0 0 10px rgba(147,112,219,0.2)' : '0 0 10px rgba(255,215,0,0.2)',
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
              x: [0, Math.sin(i) * 50],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>
      
      {/* Shimmering light effect for added atmosphere */}
      <Box 
        component={motion.div}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '80vw',
          background: theme.palette.mode === 'light'
            ? 'radial-gradient(circle, rgba(75,0,130,0.03) 0%, rgba(255,255,255,0) 70%)'
            : 'radial-gradient(circle, rgba(147,112,219,0.05) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default HeroSection;