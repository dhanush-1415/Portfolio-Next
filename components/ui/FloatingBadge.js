import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Sparkles } from 'lucide-react';
import { floatAnimation } from './animations';

const getIcon = (iconName) => {
  const iconProps = { size: 18 };
  
  switch (iconName) {
    case 'code':
      return <Code {...iconProps} />;
    case 'smartphone':
      return <Smartphone {...iconProps} />;
    case 'server':
      return <Server {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

const positionToStyle = (position) => {
  const styles = {};
  
  // Parse the position values from TailwindCSS-like syntax
  if (position.includes('-top-')) {
    const match = position.match(/-top-(\d+)/);
    if (match) styles.top = `-${match[1]/4}rem`;
    else styles.top = '-1.5rem';
  } else if (position.includes('top-1/3')) {
    styles.top = '33%';
  } else if (position.includes('top-')) {
    const match = position.match(/top-(\d+)/);
    if (match) styles.top = `${match[1]}px`;
  }
  
  if (position.includes('-bottom-')) {
    const match = position.match(/-bottom-(\d+)/);
    if (match) styles.bottom = `-${match[1]/4}rem`;
    else styles.bottom = '-1rem';
  } else if (position.includes('bottom-1/3')) {
    styles.bottom = '33%';
  } else if (position.includes('bottom-')) {
    const match = position.match(/bottom-(\d+)/);
    if (match) styles.bottom = `${match[1]}px`;
  }
  
  if (position.includes('-left-')) {
    const match = position.match(/-left-(\d+)/);
    if (match) styles.left = `-${match[1]/4}rem`;
    else styles.left = '-1.5rem';
  } else if (position.includes('left-1/3')) {
    styles.left = '33%';
  } else if (position.includes('left-')) {
    const match = position.match(/left-(\d+)/);
    if (match) styles.left = `${match[1]}px`;
  }
  
  if (position.includes('-right-')) {
    const match = position.match(/-right-(\d+)/);
    if (match) styles.right = `-${match[1]/4}rem`;
    else styles.right = '-1.5rem';
  } else if (position.includes('right-1/3')) {
    styles.right = '33%';
  } else if (position.includes('right-')) {
    const match = position.match(/right-(\d+)/);
    if (match) styles.right = `${match[1]}px`;
  }
  
  return styles;
};

const FloatingBadge = ({ 
  icon = 'code', 
  text = 'Badge', 
  position = '-top-6 -right-6',
  color = 'royal-bg text-white',
  delay = 0
}) => {
  const theme = useTheme();
  const posStyle = positionToStyle(position);
  
  return (
    <Box
      component={motion.div}
      initial={{ 
        opacity: 0,
        scale: 0,
        y: 20
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        y: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
      sx={{
        position: 'absolute',
        zIndex: 10,
        ...posStyle
      }}
    >
      <motion.div
        animate={floatAnimation}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            py: '0.5rem',
            px: '1rem',
            borderRadius: '9999px',
            bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.9)' : 'rgba(147, 112, 219, 0.9)',
            color: '#fff',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: '2px solid',
            borderColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.5rem',
              height: '1.5rem',
              borderRadius: '50%',
              bgcolor: 'rgba(255, 215, 0, 0.8)',
              color: theme.palette.mode === 'light' ? '#4B0082' : '#9370DB',
            }}
          >
            {getIcon(icon)}
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default FloatingBadge;