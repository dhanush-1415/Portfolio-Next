import React, { useState } from 'react';
import { Box, Tabs, Tab, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Fancy animated tabs with smooth transitions
const AnimatedTabs = ({ 
  tabs = [], 
  initialTab = 0,
  tabsStyle = {},
  contentStyle = {},
  tabIndicatorColor = null,
  tabsOrientation = "horizontal",
  animationType = "slide",
  fullWidth = false
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const theme = useTheme();
  
  // Use theme color if no color is provided
  const indicatorColor = tabIndicatorColor || theme.palette.secondary.main;
  
  // Define animation variants based on animation type
  const contentVariants = {
    slide: {
      enter: (direction) => ({
        x: direction > 0 ? 200 : -200,
        opacity: 0
      }),
      center: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      },
      exit: (direction) => ({
        x: direction < 0 ? 200 : -200,
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeIn"
        }
      })
    },
    fade: {
      enter: {
        opacity: 0
      },
      center: {
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeIn"
        }
      }
    },
    scale: {
      enter: {
        opacity: 0,
        scale: 0.9
      },
      center: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      },
      exit: {
        opacity: 0,
        scale: 1.1,
        transition: {
          duration: 0.3,
          ease: "easeIn"
        }
      }
    }
  };
  
  const [[page, direction], setPage] = useState([activeTab, 0]);
  
  const handleTabChange = (event, newValue) => {
    const dir = newValue > activeTab ? 1 : -1;
    setPage([newValue, dir]);
    setActiveTab(newValue);
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      {/* Tabs Navigation */}
      <Box
        sx={{
          borderBottom: tabsOrientation === "horizontal" ? 1 : 0,
          borderRight: tabsOrientation === "vertical" ? 1 : 0,
          borderColor: 'divider',
          ...tabsStyle
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          orientation={tabsOrientation}
          variant={fullWidth ? "fullWidth" : "standard"}
          TabIndicatorProps={{
            style: {
              backgroundColor: indicatorColor,
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
          }}
          sx={{
            '& .MuiTab-root': {
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                color: indicatorColor,
                opacity: 0.8,
              },
              '&.Mui-selected': {
                color: indicatorColor,
                fontWeight: 'bold',
              },
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.div>
              }
              icon={tab.icon ? <Box sx={{ mb: 0.5 }}>{tab.icon}</Box> : undefined}
              iconPosition={tab.iconPosition || "top"}
              sx={tab.sx || {}}
            />
          ))}
        </Tabs>
      </Box>

      {/* Tab Content with Animation */}
      <Box 
        sx={{ 
          position: 'relative',
          mt: 2,
          minHeight: '200px',
          overflow: 'hidden',
          ...contentStyle
        }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={contentVariants[animationType]}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ 
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default AnimatedTabs;