import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  IconButton,
  Chip,
  useMediaQuery
} from '@mui/material';
import {
  ArrowForward,
  GitHub,
  LinkedIn,
  Mail,
  // Sparkles // Uncomment if using the badge
} from '@mui/icons-material';
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:workofdhanu@gmail.com";
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
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                animate="show"
              >
                {/* Optional Badge */}
                <motion.div variants={textVariant(0.1)}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      gap: 2,
                      mb: 4
                    }}
                  >
                    {/* Uncomment to add badge
        <Chip
          label="INNOVATIVE CODE WIZARD"
          icon={<Sparkles sx={{ fontSize: 14 }} />}
          sx={{
            px: 1.5,
            py: 0.5,
            bgcolor: 'primary.10',
            border: '1px solid',
            borderColor: 'primary.30',
            borderRadius: '9999px',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            color: 'primary.main',
            '& .MuiChip-icon': {
              color: 'primary.main',
              animation: 'pulse 1.5s infinite'
            }
          }}
        />
        */}
                  </Box>
                </motion.div>

                {/* Name/Title Section */}
                <motion.div variants={textVariant(0.2)}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', md: '4.5rem' },
                      fontWeight: 700,
                      mb: 4,
                      lineHeight: '1.2',
                      '& span': {
                        display: 'block'
                      }
                    }}
                  >
                    <span>Hi, I'm</span>
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(90deg, #8263c0, #88d3ce)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        textShadow: '0 0 10px rgba(110, 69, 226, 0.5)',
                        animation: 'glow 2s ease-in-out infinite alternate'
                      }}
                    >
                      {resumeData.personalInfo.name}
                    </Box>
                  </Typography>
                </motion.div>

                {/* Description */}
                <motion.div variants={textVariant(0.3)}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      mb: 4,
                      maxWidth: '36rem',
                      lineHeight: '1.75',
                      '& span': {
                        color: 'primary.main',
                        fontWeight: 600
                      }
                    }}
                  >
                    Senior <span>Full Stack Developer</span> with 3+ years of specialized experience in
                    <span> React.js, Node.js, and MySQL</span>.
                    Expert in creating sophisticated, scalable web applications with exceptional UI/UX.
                  </Typography>
                </motion.div>

                {/* Tech Stack */}
                <TechStack />

                {/* Buttons */}
                <motion.div
                  variants={fadeIn('up', 0.4)}
                  style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', marginTop:'2rem' }}
                  sx={{
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => scrollToSection('contact', 70)}
                    sx={{
                      px: 4,
                      py: 1.75,
                      borderRadius: '9999px',

                      fontWeight: 500,
                      background: 'linear-gradient(90deg, #6e45e2, #88d3ce)',
                      boxShadow: '0 4px 15px rgba(110, 69, 226, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(110, 69, 226, 0.4)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Contact Me
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                      style={{ marginLeft: '0.5rem' }}
                    >
                      →
                    </motion.span>
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={() => scrollToSection('features', 70)}
                    startIcon={<ArrowForward />}
                    sx={{
                      px: 4,
                      py: 1.75,
                      borderRadius: '9999px',
                      fontWeight: 500,
                      borderColor: 'primary.main',
                      color: 'text.primary',
                      backgroundColor: 'background.paper',
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 4px 15px rgba(110, 69, 226, 0.2)',
                        borderColor: 'primary.light'
                      }
                    }}
                  >
                    Explore Features
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  variants={fadeIn('up', 0.5)}
                  sx={{
                    display: 'flex',
                    gap: '0.75rem',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    p: 0.5,
                    borderRadius: '9999px',
                    backgroundColor: 'background.paper',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid',
                    borderColor: 'divider',
                    width: 'fit-content',
                    mx: { xs: 'auto', md: 0 }
                  }}
                >
                  {[
                    { icon: <GitHub />, href: 'https://github.com', label: 'GitHub' },
                    { icon: <LinkedIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: <Mail />, onClick: handleEmailClick, label: 'Email' }
                  ].map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      onClick={social.onClick}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        p: 1.25,
                        backgroundColor: 'background.default',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'common.white'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </motion.div>
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
                    <Box sx={{
                      aspectRatio: '1/1', position: 'relative', height: isMobile ? '50vh' : '450px'
                    }}>
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
                          inset: '2px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #4B0082 0%, #9370DB 100%)',
                          p: '8px',
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