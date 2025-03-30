import { useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { isElementInViewport } from '../utils/scrollUtils';

const Feature = ({ icon, title, description, delay }) => {
  const theme = useTheme();
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add('visible');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [delay]);

  return (
    <Card 
      ref={cardRef}
      className="fade-in"
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        p: 1,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
        border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.palette.mode === 'light' 
            ? '0 10px 30px rgba(0,0,0,0.08)'
            : '0 10px 30px rgba(0,0,0,0.2)',
        }
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            mb: 2,
            p: 2,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
            color: 'primary.main',
            width: 64,
            height: 64,
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 600, 
            mb: 2, 
            color: 'text.primary' 
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
      </CardContent>
    </Card>
  );
};

const FeaturesSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Fast Performance',
      description: 'Optimized for speed with Next.js server-side rendering and static generation capabilities.'
    },
    {
      icon: <DevicesIcon fontSize="large" />,
      title: 'Responsive Design',
      description: 'Fully responsive layout that looks great on all devices from mobile to desktop.'
    },
    {
      icon: <ColorLensIcon fontSize="large" />,
      title: 'Custom Theming',
      description: 'Elegant color palette with light and dark mode support using Material UI theming system.'
    },
    {
      icon: <AccessibilityNewIcon fontSize="large" />,
      title: 'Accessibility',
      description: 'Built with accessibility in mind to ensure everyone can use your application.'
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Clean Code',
      description: 'Well-structured and maintainable code following best practices and modern standards.'
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
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
      }}
    >
      {/* Decorative elements */}
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

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="fade-in">
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
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Feature 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                delay={index * 100} // Staggered animation
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
