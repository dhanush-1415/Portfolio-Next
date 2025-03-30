import { useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import FloatingCard from './3d/FloatingCard';
import { fadeIn, staggerContainer, slideIn, textVariant } from './ui/animations';
import { Code, PaintBucket, ShoppingCart, Smartphone, Activity, Settings } from 'lucide-react';

const ServiceCard = ({ title, description, index }) => {
  const theme = useTheme();
  const cardRef = useRef(null);

  const colors = [
    '#4B0082', // Indigo
    '#6F2DA8', // Darker Purple
    '#9370DB', // Medium Purple
    '#7854B1', // Purple
    '#B39DDB', // Light Purple
    '#8A2BE2'  // Blue Violet
  ];
  
  const color = colors[index % colors.length];
  
  const getIcon = (title) => {
    const iconProps = { size: 24, color: color };
    
    switch(index % 6) {
      case 0: return <Code {...iconProps} />;
      case 1: return <PaintBucket {...iconProps} />;
      case 2: return <ShoppingCart {...iconProps} />;
      case 3: return <Smartphone {...iconProps} />;
      case 4: return <Activity {...iconProps} />;
      case 5: return <Settings {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  return (
    <motion.div
      variants={fadeIn('up', index * 0.1 + 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Card 
        ref={cardRef}
        elevation={0}
        sx={{
          height: '100%',
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.3s ease',
          bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
          border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: theme.palette.mode === 'light' 
              ? '0 20px 40px rgba(0,0,0,0.1)'
              : '0 20px 40px rgba(0,0,0,0.3)',
            '&::before': {
              opacity: 1,
              width: '100%',
            },
            '& .service-icon': {
              transform: 'scale(1.1) rotate(10deg)',
              boxShadow: `0 10px 20px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.3)`,
            }
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '5px',
            height: '3px',
            background: `linear-gradient(90deg, ${color}, ${theme.palette.secondary.main})`,
            opacity: 0.7,
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ height: 120, mb: 2 }}>
            <FloatingCard text={title} color={color} hoverColor={theme.palette.secondary.main} />
          </Box>
          
          <Box
            className="service-icon"
            sx={{
              mb: 2,
              p: 2,
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
              color: 'primary.main',
              transition: 'all 0.3s ease',
            }}
          >
            {getIcon(title)}
          </Box>
          
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: 'text.primary',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '40px',
                height: '2px',
                background: color,
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              }
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            color="textSecondary"
            sx={{ mb: 3 }}
          >
            {description}
          </Typography>
          
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Button 
              variant="text" 
              color="primary" 
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 2,
                fontWeight: 500,
                '&:hover': {
                  background: 'transparent',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const sectionRef = useRef(null);

  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web development services using modern technologies like React, Next.js, and Node.js.'
    },
    {
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive, and responsive user interfaces that delight your customers and boost engagement.'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Custom e-commerce platforms with seamless payment integrations, inventory management, and customer tracking.'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with cutting-edge features.'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online presence and drive qualified traffic.'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your applications to ensure they remain secure and up-to-date.'
    }
  ];

  return (
    <Box 
      id={id}
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, rgba(250,250,252,1) 0%, rgba(255,255,255,1) 100%)' 
          : 'linear-gradient(135deg, rgba(18,18,18,1) 0%, rgba(30,30,30,1) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(75,0,130,0.03) 0%, rgba(75,0,130,0) 70%)' 
            : 'radial-gradient(circle, rgba(147,112,219,0.03) 0%, rgba(147,112,219,0) 70%)',
          left: '-15vw',
          top: '20%',
          zIndex: 0,
          filter: 'blur(30px)',
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 5,
        }}
        sx={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(255,215,0,0.03) 0%, rgba(255,215,0,0) 70%)' 
            : 'radial-gradient(circle, rgba(255,215,0,0.03) 0%, rgba(255,215,0,0) 70%)',
          right: '-20vw',
          bottom: '10%',
          zIndex: 0,
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
              gap: 6,
              alignItems: 'center'
            }}
          >
            <Box>
              <Box sx={{ position: 'sticky', top: 100 }}>
                <motion.div variants={fadeIn('right', 0.2)}>
                  <Typography 
                    variant="overline" 
                    component="p"
                    sx={{ 
                      color: 'primary.main', 
                      fontWeight: 600, 
                      letterSpacing: 2,
                      mb: 2
                    }}
                  >
                    OUR SERVICES
                  </Typography>
                </motion.div>
                
                <motion.div variants={textVariant(0.3)}>
                  <Typography 
                    variant="h2" 
                    component="h2"
                    sx={{ 
                      fontWeight: 700, 
                      mb: 3,
                      background: theme.palette.mode === 'light' 
                        ? 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)' 
                        : 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    What We Offer
                  </Typography>
                </motion.div>
                
                <motion.div variants={fadeIn('up', 0.4)}>
                  <Typography 
                    variant="body1" 
                    color="textSecondary"
                    sx={{ mb: 4 }}
                  >
                    We provide a comprehensive range of services to help your business 
                    succeed in the digital world. From web development to digital marketing, 
                    we've got you covered.
                  </Typography>
                </motion.div>
                
                <motion.div
                  variants={slideIn('left', 'tween', 0.5, 0.8)}
                >
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => scrollToSection('contact', 70)}
                    sx={{ 
                      mt: 2,
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: 'translateX(-100%)',
                      },
                      '&:hover::after': {
                        transform: 'translateX(100%)',
                        transition: 'transform 0.6s ease',
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Box>
            </Box>
            
            <Box>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3
              }}>
                {services.map((service, index) => (
                  <Box key={index}>
                    <ServiceCard 
                      title={service.title} 
                      description={service.description}
                      index={index}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
      
      {/* Floating particles */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(10)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            sx={{
              position: 'absolute',
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              backgroundColor: theme.palette.mode === 'light' 
                ? i % 2 === 0 ? 'rgba(75,0,130,0.1)' : 'rgba(255,215,0,0.1)'
                : i % 2 === 0 ? 'rgba(147,112,219,0.1)' : 'rgba(255,215,0,0.1)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0],
              scale: [0, Math.random() * 1 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
