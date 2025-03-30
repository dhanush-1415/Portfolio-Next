import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, useTheme } from '@mui/material';

// Simplified floating card using Framer Motion instead of Three.js
const FloatingCard = ({ text = "Service", color = '#4B0082', hoverColor = '#9370DB' }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const cardColor = isDarkMode ? '#9370DB' : color;
  
  return (
    <Box 
      sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 3
      }}
    >
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ 
          width: '100%', 
          height: '120px', 
          position: 'relative',
          marginBottom: 1,
          perspective: '1000px'
        }}
      >
        <Box
          component={motion.div}
          whileHover={{
            rotateY: 15,
            rotateX: -5,
            scale: 1.05,
            boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
            backgroundColor: hoverColor,
          }}
          initial={{ opacity: 0, rotateX: -20 }}
          animate={{ 
            opacity: 1, 
            rotateX: 0,
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            default: { duration: 0.5 }
          }}
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: cardColor,
            borderRadius: '12px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: `radial-gradient(circle, ${hoverColor}40 0%, transparent 70%)`,
              opacity: 0.3,
            }}
          />
          
          {/* Text */}
          <Typography
            component={motion.p}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              zIndex: 10,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {text}
          </Typography>
          
          {/* Animated accent line */}
          <Box
            component={motion.div}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '3px',
              backgroundColor: '#FFD700',
              borderRadius: '2px',
            }}
          />
          
          {/* Decorative elements */}
          <Box
            component={motion.div}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.2)',
            }}
          />
          
          <Box
            component={motion.div}
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            sx={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.15)',
            }}
          />
        </Box>
      </Box>
      
      {/* Service name text below the card */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '1.25rem',
          color: 'primary.main'
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

export default FloatingCard;