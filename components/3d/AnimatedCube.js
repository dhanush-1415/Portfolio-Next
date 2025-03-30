import React from 'react';
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';

// Simplified animated cube using CSS and Framer Motion
const AnimatedCube = ({ icon, color = '#4B0082', wobble = true }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const themeColor = isDarkMode ? '#9370DB' : color;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', height: '180px' }}
    >
      <Box 
        sx={{ 
          width: '100%', 
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          perspective: '800px',
        }}
      >
        <Box
          component={motion.div}
          animate={wobble ? { 
            rotateX: [0, 10, 0, -10, 0],
            rotateY: [0, 15, 0, -15, 0],
          } : {}}
          transition={wobble ? { 
            duration: 6, 
            ease: "easeInOut", 
            repeat: Infinity,
          } : {}}
          sx={{
            width: '120px',
            height: '120px',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front face */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              transform: 'translateZ(60px)',
              opacity: 0.9,
            }}
          />
          
          {/* Back face */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              transform: 'rotateY(180deg) translateZ(60px)',
              opacity: 0.9,
            }}
          />
          
          {/* Left face */}
          <Box
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              backgroundColor: themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              transform: 'rotateY(-90deg) translateZ(60px)',
              opacity: 0.8,
            }}
          />
          
          {/* Right face */}
          <Box
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              backgroundColor: themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              transform: 'rotateY(90deg) translateZ(60px)',
              opacity: 0.8,
            }}
          />
          
          {/* Top face */}
          <Box
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              backgroundColor: themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              transform: 'rotateX(90deg) translateZ(60px)',
              opacity: 0.7,
            }}
          />
          
          {/* Bottom face */}
          <Box
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              backgroundColor: themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              transform: 'rotateX(-90deg) translateZ(60px)',
              opacity: 0.7,
            }}
          />
        </Box>
        
        {/* Floating glow elements */}
        <Box
          component={motion.div}
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          sx={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#FFD700',
            filter: 'blur(10px)',
            top: '30%',
            right: '30%',
          }}
        />
        
        <Box
          component={motion.div}
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1,
          }}
          sx={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#FFD700',
            filter: 'blur(8px)',
            bottom: '35%',
            left: '35%',
          }}
        />
      </Box>
    </motion.div>
  );
};

export default AnimatedCube;