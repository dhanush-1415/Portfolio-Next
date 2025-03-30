import { useRef, useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    quote: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched. They delivered our project on time and exceeded all expectations.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthHub",
    quote: "The custom solution they built for us has transformed our business operations. We've seen a 40% increase in efficiency and our customers love the new interface.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    position: "CTO, InnovateTech",
    quote: "Their technical expertise is impressive. They guided us through the entire development process and provided valuable insights that improved our original concept.",
    rating: 4,
    initials: "ER"
  },
  {
    name: "David Kim",
    position: "Product Manager, RetailPlus",
    quote: "We needed a complex e-commerce solution with custom features, and they delivered exactly what we needed. The attention to user experience has resulted in higher conversion rates.",
    rating: 5,
    initials: "DK"
  },
  {
    name: "Lisa Thompson",
    position: "Founder, CreativeWorks",
    quote: "The design work was outstanding. Our brand has never looked better, and the implementation was flawless. I highly recommend their services to anyone looking for quality.",
    rating: 5,
    initials: "LT"
  }
];

const TestimonialCard = ({ testimonial, index, activeIndex }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const isActive = index === activeIndex;
  
  useEffect(() => {
    const card = cardRef.current;
    if (isActive && card) {
      setTimeout(() => {
        card.classList.add('visible');
      }, 100);
    } else if (card) {
      card.classList.remove('visible');
    }
  }, [isActive]);

  // Create background for avatar from initials
  const getAvatarColor = (initials) => {
    const colors = [
      '#4B0082', // Indigo
      '#6F2DA8',
      '#9370DB', // Medium Purple
      '#0056B3', // Royal Blue
      '#1E90FF'  // Bright Blue
    ];
    
    // Use the sum of char codes to determine color index
    const sum = initials.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[sum % colors.length];
  };

  return (
    <Card 
      ref={cardRef}
      className={`fade-in ${isActive ? 'active' : ''}`}
      elevation={isActive ? 4 : 0}
      sx={{
        height: '100%',
        display: isActive ? 'flex' : 'none',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        transform: isActive ? 'scale(1)' : 'scale(0.95)',
        opacity: isActive ? 1 : 0,
        transition: 'transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease',
        bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
        border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
      }}
    >
      <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ mb: 3, color: 'primary.main' }}>
          <FormatQuoteIcon sx={{ fontSize: 40, opacity: 0.5 }} />
        </Box>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            fontStyle: 'italic',
            fontSize: '1.1rem',
            flexGrow: 1,
            color: 'text.secondary'
          }}
        >
          "{testimonial.quote}"
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            sx={{ 
              width: 60, 
              height: 60, 
              bgcolor: getAvatarColor(testimonial.initials),
              color: '#FFF',
              fontWeight: 600,
              mr: 2
            }}
          >
            {testimonial.initials}
          </Avatar>
          <Box>
            <Typography 
              variant="h6" 
              component="p"
              sx={{ fontWeight: 600 }}
            >
              {testimonial.name}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary"
              sx={{ mb: 1 }}
            >
              {testimonial.position}
            </Typography>
            <Rating 
              value={testimonial.rating} 
              readOnly 
              size="small"
              sx={{ color: theme.palette.secondary.main }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      id={id}
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, #F8F9FA 0%, #EEF0F2 100%)'
          : 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, rgba(255,215,0,0) 70%)' 
            : 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, rgba(255,215,0,0) 70%)',
          zIndex: 0,
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(75,0,130,0.05) 0%, rgba(75,0,130,0) 70%)' 
            : 'radial-gradient(circle, rgba(147,112,219,0.05) 0%, rgba(147,112,219,0) 70%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            TESTIMONIALS
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
            What Our Clients Say
          </Typography>
          <Typography 
            variant="h6" 
            color="textSecondary"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontWeight: 400,
              mb: 2
            }}
          >
            Don't just take our word for it. Hear from some of our satisfied clients.
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ position: 'relative', minHeight: 300 }}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  activeIndex={activeIndex}
                />
              ))}
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  gap: 2,
                  mt: 4
                }}
              >
                <IconButton 
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  sx={{
                    bgcolor: theme.palette.mode === 'light' ? 'rgba(75,0,130,0.1)' : 'rgba(147,112,219,0.1)',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'light' ? 'rgba(75,0,130,0.2)' : 'rgba(147,112,219,0.2)',
                    }
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton 
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  sx={{
                    bgcolor: theme.palette.mode === 'light' ? 'rgba(75,0,130,0.1)' : 'rgba(147,112,219,0.1)',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'light' ? 'rgba(75,0,130,0.2)' : 'rgba(147,112,219,0.2)',
                    }
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  gap: 1,
                  mt: 3
                }}
              >
                {testimonials.map((_, index) => (
                  <Box 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: index === activeIndex ? 'primary.main' : 'rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
