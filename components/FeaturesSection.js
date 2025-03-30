import { useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  useMediaQuery,
  Zoom
} from '@mui/material';
import { motion } from 'framer-motion';
import { Activity, Layout, PaintBucket, Accessibility, Code, TrendingUp } from 'lucide-react';
import { isElementInViewport } from '../utils/scrollUtils';
import AnimatedCube from './3d/AnimatedCube';
import { fadeIn, staggerContainer, zoomIn, scaleVariant } from './ui/animations';

const Feature = ({ icon, title, description, delay, index }) => {
  const theme = useTheme();
  
  const colors = [
    '#4B0082', // Indigo
    '#6F2DA8', // Darker Purple
    '#9370DB', // Medium Purple
    '#7854B1', // Purple
    '#B39DDB', // Light Purple
    '#8A2BE2'  // Blue Violet
  ];
  
  const color = colors[index % colors.length];

  return (
    <motion.div
      variants={fadeIn('up', delay * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Card 
        elevation={0}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          p: 1,
          position: 'relative',
          overflow: 'hidden',
          bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
          border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.palette.mode === 'light' 
              ? '0 10px 30px rgba(0,0,0,0.08)'
              : '0 10px 30px rgba(0,0,0,0.2)',
            '&::before': {
              transform: 'translateX(0)',
            }
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background: `linear-gradient(90deg, ${color}, ${theme.palette.secondary.main})`,
            transform: 'translateX(-100%)',
            transition: 'transform 0.5s ease',
          },
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flexGrow: 1, p: 3 }}>
          <Box sx={{ mb: 3, height: 180 }}>
            <AnimatedCube color={color} wobble={index % 2 === 0} />
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
                left: '25%',
                width: '50%',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              }
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            color="textSecondary"
            sx={{ flexGrow: 1 }}
          >
            {description}
          </Typography>
          
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <Box 
                sx={{
                  color: color,
                  transform: 'scale(1.2)'
                }}
              >
                {icon}
              </Box>
            </motion.div>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <Activity size={24} />,
      title: 'Fast Performance',
      description: 'Optimized for speed with Next.js server-side rendering and static generation capabilities.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Responsive Design',
      description: 'Fully responsive layout that looks great on all devices from mobile to desktop.'
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'Custom Theming',
      description: 'Elegant color palette with light and dark mode support using Material UI theming system.'
    },
    {
      icon: <Accessibility size={24} />,
      title: 'Accessibility',
      description: 'Built with accessibility in mind to ensure everyone can use your application.'
    },
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Well-structured and maintainable code following best practices and modern standards.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'SEO Optimized',
      description: 'Search engine friendly with proper meta tags and server-side rendering support.'
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
          ? 'linear-gradient(135deg, rgba(248,249,250,1) 0%, rgba(242,243,245,1) 100%)' 
          : 'linear-gradient(135deg, rgba(18,18,18,1) 0%, rgba(28,28,28,1) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '40vw',
          height: '40vw',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(75,0,130,0.03) 0%, rgba(75,0,130,0) 70%)' 
            : 'radial-gradient(circle, rgba(147,112,219,0.03) 0%, rgba(147,112,219,0) 70%)',
          zIndex: 0,
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '30vw',
          height: '30vw',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(255,215,0,0.03) 0%, rgba(255,215,0,0) 70%)' 
            : 'radial-gradient(circle, rgba(255,215,0,0.03) 0%, rgba(255,215,0,0) 70%)',
          zIndex: 0,
        }}
      />

      {/* Decorative line at top */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: theme.palette.mode === 'light' 
            ? 'linear-gradient(90deg, rgba(75,0,130,0) 0%, rgba(75,0,130,0.1) 50%, rgba(75,0,130,0) 100%)' 
            : 'linear-gradient(90deg, rgba(147,112,219,0) 0%, rgba(147,112,219,0.1) 50%, rgba(147,112,219,0) 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={fadeIn('down', 0.2)}>
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
                POWERFUL FEATURES
              </Typography>
            </motion.div>
            
            <motion.div variants={fadeIn('down', 0.3)}>
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
                Why Choose Our Solution
              </Typography>
            </motion.div>
            
            <motion.div variants={fadeIn('up', 0.4)}>
              <Typography 
                variant="h6" 
                color="textSecondary"
                sx={{ 
                  maxWidth: 700, 
                  mx: 'auto',
                  fontWeight: 400,
                  mb: 4
                }}
              >
                Built with cutting-edge technologies to deliver exceptional user experiences
                that are both beautiful and functional.
              </Typography>
            </motion.div>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
              },
              gap: 4
            }}
          >
            {features.map((feature, index) => (
              <Box key={index}>
                <Feature 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description}
                  delay={index + 1}
                  index={index}
                />
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
      
      {/* Floating particles */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(15)].map((_, i) => (
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

export default FeaturesSection;
