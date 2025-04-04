// import { useState, useEffect } from 'react';
// import { Box, useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Layout = ({ children, activeSection }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [navbarHeight, setNavbarHeight] = useState(70); // Default height

//   useEffect(() => {
//     // Update navbar height for proper scroll offsets
//     const navbar = document.getElementById('main-navbar');
//     if (navbar) {
//       setNavbarHeight(navbar.offsetHeight);
//     }

//     // Handle resize events
//     const handleResize = () => {
//       const navbar = document.getElementById('main-navbar');
//       if (navbar) {
//         setNavbarHeight(navbar.offsetHeight);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isMobile]);

//   return (
//     <Box 
//       sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         minHeight: '100vh',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         transition: 'background-color 0.3s, color 0.3s'
//       }}
//     >
//       <Navbar activeSection={activeSection} />
      
//       <Box 
//         component="main" 
//         sx={{ 
//           flexGrow: 1,
//           pt: `${navbarHeight}px`, // Add padding to account for fixed navbar
//         }}
//       >
//         {children}
//       </Box>
      
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;



import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

// Dynamically import heavy components
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

const Layout = ({ children, activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [navbarHeight, setNavbarHeight] = useState(70);

  const handleResize = useCallback(() => {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, isMobile]);

  const layoutStyles = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    bgcolor: 'background.default',
    color: 'text.primary',
    transition: 'background-color 0.3s, color 0.3s'
  }), []);

  const mainStyles = useMemo(() => ({
    flexGrow: 1,
    pt: `${navbarHeight}px`
  }), [navbarHeight]);

  return (
    <Box sx={layoutStyles}>
      <Navbar activeSection={activeSection} />
      
      <Box component="main" sx={mainStyles}>
        {children}
      </Box>
      
      <Footer />
    </Box>
  );
};

export default React.memo(Layout);