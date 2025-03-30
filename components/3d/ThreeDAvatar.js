import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, useTheme } from '@mui/material';
import { resumeData } from '../../utils/resumeData';

// Simpler fallback component for 3D scene without using Three.js
// This provides visual interest without risking crashes
const ThreeDAvatar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  // Get resume data for display
  const { name, title } = resumeData.personalInfo;
  const frontendSkills = resumeData.frontendSkills.slice(0, 4);
  const backendSkills = resumeData.backendSkills.slice(0, 4);
  
  return (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Central pulsing orb */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '12rem',
          height: '12rem',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${isDarkMode ? '#9370DB' : '#4B0082'} 0%, rgba(75,0,130,0.2) 70%)`,
          boxShadow: `0 0 60px 20px ${isDarkMode ? 'rgba(147,112,219,0.3)' : 'rgba(75,0,130,0.3)'}`,
          zIndex: 1,
        }}
      >
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
          }}
        />
      </Box>
      
      {/* Name and title */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        <Typography
          variant="h3"
          component={motion.h3}
          sx={{
            fontWeight: 700,
            color: '#FFD700',
            textShadow: `0 0 10px ${isDarkMode ? 'rgba(147,112,219,0.5)' : 'rgba(75,0,130,0.5)'}`,
            mb: 1,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h5"
          component={motion.h5}
          sx={{
            fontWeight: 500,
            color: isDarkMode ? '#fff' : '#000',
          }}
        >
          {title}
        </Typography>
      </Box>
      
      {/* Orbiting skills */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        {/* Frontend skills on top */}
        {frontendSkills.map((skill, index) => {
          const angle = (index * (360 / frontendSkills.length)) * (Math.PI / 180);
          const radius = 140;
          const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
          const top = `calc(35% + ${Math.sin(angle) * radius}px)`;
          
          return (
            <Box
              key={skill.name}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: [0, Math.random() * 10 - 5],
                y: [0, Math.random() * 10 - 5],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
                x: {
                  duration: 3 + Math.random(),
                  repeat: Infinity,
                  repeatType: 'mirror',
                  delay: index * 0.2
                },
                y: {
                  duration: 4 + Math.random(),
                  repeat: Infinity,
                  repeatType: 'mirror',
                  delay: index * 0.3
                }
              }}
              sx={{
                position: 'absolute',
                left,
                top,
                transform: 'translate(-50%, -50%)',
                background: '#FFD700',
                color: isDarkMode ? '#000' : '#4B0082',
                padding: '6px 12px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                textAlign: 'center',
                minWidth: '80px',
              }}
            >
              {skill.name}
            </Box>
          );
        })}
        
        {/* Backend skills on bottom */}
        {backendSkills.map((skill, index) => {
          const angle = (index * (360 / backendSkills.length)) * (Math.PI / 180);
          const radius = 140;
          const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
          const top = `calc(65% + ${Math.sin(angle) * radius}px)`;
          
          return (
            <Box
              key={skill.name}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: [0, Math.random() * 10 - 5],
                y: [0, Math.random() * 10 - 5],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.4 + index * 0.1 },
                x: {
                  duration: 3 + Math.random(),
                  repeat: Infinity,
                  repeatType: 'mirror',
                  delay: index * 0.2
                },
                y: {
                  duration: 4 + Math.random(),
                  repeat: Infinity,
                  repeatType: 'mirror',
                  delay: index * 0.3
                }
              }}
              sx={{
                position: 'absolute',
                left,
                top,
                transform: 'translate(-50%, -50%)',
                background: '#FFD700',
                color: isDarkMode ? '#000' : '#4B0082',
                padding: '6px 12px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                textAlign: 'center',
                minWidth: '80px',
              }}
            >
              {skill.name}
            </Box>
          );
        })}
      </Box>
      
      {/* Floating badges */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        sx={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          React Expert
        </motion.div>
      </Box>
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        sx={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
        >
          App Wizard
        </motion.div>
      </Box>
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        >
          UI/UX Designer
        </motion.div>
      </Box>
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        sx={{
          position: 'absolute',
          bottom: '35%',
          right: '15%',
          background: isDarkMode ? 'rgba(147,112,219,0.9)' : 'rgba(75,0,130,0.9)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.7 }}
        >
          Full Stack Dev
        </motion.div>
      </Box>
    </Box>
  );
};

export default ThreeDAvatar;