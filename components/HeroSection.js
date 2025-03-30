import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { scrollToSection } from '../utils/scrollUtils';

const HeroSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
      {/* Abstract shapes for visual interest */}
      <Box 
        sx={{
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
      <Box 
        sx={{
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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                opacity: animationComplete ? 1 : 0,
                transform: animationComplete ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              <Typography 
                component="h1" 
                variant="h2" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: theme.palette.mode === 'light' 
                    ? 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)' 
                    : 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Professional & Elegant Next.js Application
              </Typography>
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
                A sleek, responsive, and feature-rich application built with Next.js and 
                Material UI with custom theming and smooth navigation.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: 'center',
                opacity: animationComplete ? 1 : 0,
                transform: animationComplete ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
              }}
            >
              {/* Hero illustration */}
              <Box 
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <svg
                  width={isMobile ? "280" : "480"}
                  height={isMobile ? "280" : "480"}
                  viewBox="0 0 800 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle 
                    cx="400" 
                    cy="400" 
                    r="300" 
                    fill={theme.palette.mode === 'light' ? "#F0F0F0" : "#2A2A2A"} 
                  />
                  <path 
                    d="M598 400C598 510.457 508.457 600 398 600C287.543 600 198 510.457 198 400C198 289.543 287.543 200 398 200C508.457 200 598 289.543 598 400Z" 
                    fill={theme.palette.mode === 'light' ? "#4B0082" : "#9370DB"} 
                    fillOpacity="0.1" 
                  />
                  <path 
                    d="M550 400C550 483.797 481.797 552 398 552C314.203 552 246 483.797 246 400C246 316.203 314.203 248 398 248C481.797 248 550 316.203 550 400Z" 
                    fill={theme.palette.mode === 'light' ? "#4B0082" : "#9370DB"} 
                    fillOpacity="0.2" 
                  />
                  <path 
                    d="M500 400C500 456.274 454.274 502 398 502C341.726 502 296 456.274 296 400C296 343.726 341.726 298 398 298C454.274 298 500 343.726 500 400Z" 
                    fill={theme.palette.mode === 'light' ? "#4B0082" : "#9370DB"} 
                    fillOpacity="0.3" 
                  />
                  <circle 
                    cx="398" 
                    cy="400" 
                    r="70" 
                    fill={theme.palette.mode === 'light' ? "#FFD700" : "#FFD700"} 
                  />
                  <circle 
                    cx="438" 
                    cy="360" 
                    r="20" 
                    fill="white" 
                    fillOpacity="0.5" 
                  />
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
