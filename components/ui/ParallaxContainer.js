import React, { useEffect, useRef, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion, useTransform, useScroll } from 'framer-motion';

const ParallaxContainer = ({ 
  children, 
  speed = 0.2, 
  direction = 'up', 
  easing = 'easeOut', 
  style = {} 
}) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();
  
  // Set the desired direction of parallax effect
  let startY = 0;
  let endY = 0;
  
  if (direction === 'up') {
    startY = elementTop + speed * 100;
    endY = elementTop - speed * 100;
  } else if (direction === 'down') {
    startY = elementTop - speed * 100; 
    endY = elementTop + speed * 100;
  }
  
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [startY, endY],
    { ease: easing }
  );
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    };
    
    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);
  
  return (
    <Box ref={ref} sx={{ position: 'relative', overflow: 'hidden', ...style }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </Box>
  );
};

// Parallax section that can be used as a wrapper for entire sections
const ParallaxSection = ({ 
  children, 
  speed = 0.05, 
  direction = 'up', 
  bgColor, 
  customOverlay,
  sx = {} 
}) => {
  const theme = useTheme();
  const defaultBgColor = theme.palette.background.default;
  
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: bgColor || defaultBgColor,
        ...sx 
      }}
    >
      <ParallaxContainer 
        speed={speed} 
        direction={direction}
        style={{ height: '100%', width: '100%' }}
      >
        {children}
      </ParallaxContainer>
      
      {customOverlay && (
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          {customOverlay}
        </Box>
      )}
    </Box>
  );
};

// Export both components
export { ParallaxContainer, ParallaxSection };