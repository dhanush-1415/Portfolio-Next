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
import { scrollToSection } from '../utils/scrollUtils';

const ServiceCard = ({ title, description, index }) => {
  const theme = useTheme();
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 150);
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
  }, [index]);

  return (
    <Card 
      ref={cardRef}
      className="fade-in"
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
        border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.palette.mode === 'light' 
            ? '0 10px 30px rgba(0,0,0,0.08)'
            : '0 10px 30px rgba(0,0,0,0.2)',
          '&::before': {
            opacity: 0.6,
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '5px',
          height: '100%',
          background: theme.palette.mode === 'light' 
            ? 'linear-gradient(180deg, #4B0082 0%, #6F2DA8 100%)' 
            : 'linear-gradient(180deg, #9370DB 0%, #B39DDB 100%)',
          opacity: 0.4,
          transition: 'opacity 0.3s ease',
        }
      }}
    >
      <CardContent sx={{ p: 4 }}>
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
          sx={{ mb: 3 }}
        >
          {description}
        </Typography>
        <Button 
          variant="text" 
          color="primary" 
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 2,
            fontWeight: 500,
            '&:hover': {
              background: 'transparent',
              transform: 'translateX(5px)',
            },
            transition: 'transform 0.3s ease',
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
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
          ? '#FFFFFF' 
          : '#1A1A1A',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className="fade-in">
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
              <Typography 
                variant="body1" 
                color="textSecondary"
                sx={{ mb: 4 }}
              >
                We provide a comprehensive range of services to help your business 
                succeed in the digital world. From web development to digital marketing, 
                we've got you covered.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollToSection('contact', 70)}
                className="button-hover-effect"
                sx={{ 
                  mt: 2,
                  borderRadius: 2,
                  px: 3,
                  py: 1.5
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ServiceCard 
                    title={service.title} 
                    description={service.description}
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
