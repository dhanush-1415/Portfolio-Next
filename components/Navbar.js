// import { useState, useContext, useEffect } from 'react';
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   Button,
//   MenuItem,
//   Slide,
//   useScrollTrigger,
//   Fab,
//   Zoom
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { ColorModeContext } from '../contexts/ColorModeContext';
// import { scrollToSection } from '../utils/scrollUtils';
// import { useTheme } from '@mui/material/styles';

// // Hide AppBar on scroll down
// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// // Scroll to top FAB
// function ScrollTop(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <Zoom in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{
//           position: 'fixed',
//           bottom: 16,
//           right: 16,
//           zIndex: 2,
//         }}
//       >
//         {children}
//       </Box>
//     </Zoom>
//   );
// }

// const Navbar = ({ activeSection }) => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const { toggleColorMode, mode } = useContext(ColorModeContext);
//   const theme = useTheme();

//   const sections = [
//     { id: 'hero', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleNavClick = (sectionId) => {
//     handleCloseNavMenu();
//     scrollToSection(sectionId, 80); // Offset for navbar height
//   };

//   return (
//     <>
//       <HideOnScroll>
//         <AppBar 
//           id="main-navbar"
//           position="fixed" 
//           elevation={0}
//           sx={{
//             bgcolor: mode === 'light' 
//               ? 'rgba(248, 249, 250, 0.9)' 
//               : 'rgba(18, 18, 18, 0.9)',
//             backdropFilter: 'blur(10px)',
//             borderBottom: `1px solid ${mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
//             transition: 'background-color 0.3s'
//           }}
//         >
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//               {/* Logo - Desktop */}
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{
//                   mr: 2,
//                   display: { xs: 'none', md: 'flex' },
//                   fontWeight: 700,
//                   letterSpacing: '.1rem',
//                   color: 'primary.main',
//                   textDecoration: 'none',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleNavClick('hero')}
//               >
//                 Dhanush J
//               </Typography>

//               {/* Mobile Menu */}
//               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                 <IconButton
//                   size="large"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="primary"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: 'block', md: 'none' },
//                   }}
//                 >
//                   {sections.map((section) => (
//                     <MenuItem 
//                       key={section.id} 
//                       onClick={() => handleNavClick(section.id)}
//                       selected={activeSection === section.id}
//                       sx={{
//                         color: activeSection === section.id 
//                           ? 'primary.main' 
//                           : 'text.primary',
//                         '&.Mui-selected': {
//                           bgcolor: mode === 'light' 
//                             ? 'rgba(75, 0, 130, 0.08)'
//                             : 'rgba(147, 112, 219, 0.08)',
//                         }
//                       }}
//                     >
//                       <Typography textAlign="center">{section.label}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>

//               {/* Logo - Mobile */}
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{
//                   flexGrow: 1,
//                   display: { xs: 'flex', md: 'none' },
//                   fontWeight: 700,
//                   letterSpacing: '.1rem',
//                   color: 'primary.main',
//                   textDecoration: 'none',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleNavClick('hero')}
//               >
//                 NEXTMUI
//               </Typography>

//               {/* Desktop Menu */}
//               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
//                 {sections.map((section) => (
//                   <Button
//                     key={section.id}
//                     onClick={() => handleNavClick(section.id)}
//                     sx={{
//                       my: 2,
//                       mx: 1,
//                       color: activeSection === section.id ? 'primary.main' : 'text.primary',
//                       display: 'block',
//                       fontWeight: activeSection === section.id ? 600 : 500,
//                       position: 'relative',
//                       '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         width: activeSection === section.id ? '80%' : '0%',
//                         height: '2px',
//                         bottom: '5px',
//                         left: '10%',
//                         backgroundColor: 'primary.main',
//                         transition: 'width 0.3s ease'
//                       },
//                       '&:hover::after': {
//                         width: '80%'
//                       }
//                     }}
//                   >
//                     {section.label}
//                   </Button>
//                 ))}
//               </Box>

//               {/* Theme Toggle */}
//               <IconButton 
//                 onClick={toggleColorMode} 
//                 color="primary"
//                 sx={{ 
//                   ml: 1,
//                   transition: 'transform 0.3s',
//                   '&:hover': {
//                     transform: 'rotate(30deg)'
//                   }
//                 }}
//               >
//                 {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
//               </IconButton>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>

//       {/* Scroll to Top Button */}
//       <ScrollTop>
//         <Fab 
//           color="primary" 
//           size="small" 
//           aria-label="scroll back to top"
//           sx={{
//             boxShadow: theme.shadows[4]
//           }}
//         >
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </>
//   );
// };

// export default Navbar;



// import { useState, useContext, useEffect } from 'react';
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   Button,
//   MenuItem,
//   Slide,
//   useScrollTrigger,
//   Fab,
//   Zoom,
//   Avatar,
//   Divider
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { ColorModeContext } from '../contexts/ColorModeContext';
// import { scrollToSection } from '../utils/scrollUtils';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import { useTheme } from '@mui/material/styles';
// import { keyframes } from '@mui/system';


// // Hide AppBar on scroll down
// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// // Scroll to top FAB
// function ScrollTop(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <Zoom in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{
//           position: 'fixed',
//           bottom: 16,
//           right: 16,
//           zIndex: 2,
//         }}
//       >
//         {children}
//       </Box>
//     </Zoom>
//   );
// }

// const Navbar = ({ activeSection }) => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { toggleColorMode, mode } = useContext(ColorModeContext);
//   const theme = useTheme();
//   const [isAnimating, setIsAnimating] = useState(false);

//   const floatAnimation = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-5px); }
//   100% { transform: translateY(0px); }
// `;

//   const handleClick = () => {
//     setIsAnimating(true);
//     toggleColorMode();
//     setTimeout(() => setIsAnimating(false), 300);
//   };

//   const sections = [
//     { id: 'hero', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleNavClick = (sectionId) => {
//     handleCloseNavMenu();
//     scrollToSection(sectionId, 80); // Offset for navbar height
//   };

//   return (
//     <>
//       <HideOnScroll>
//         <AppBar 
//           position="fixed" 
//           elevation={isScrolled ? 4 : 0}
//           sx={{
//             bgcolor: 'background.default',
//             backdropFilter: 'blur(10px)',
//             background: mode === 'light' 
//               ? 'rgba(255, 255, 255, 0.8)'
//               : 'rgba(10, 10, 10, 0.8)',
//             transition: 'all 0.3s ease',
//             borderBottom: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
//             py: 1
//           }}
//         >
//           <Container maxWidth="lg">
//             <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
//               {/* Logo */}
//               <Box 
//                 sx={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: 2,
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => handleNavClick('hero')}
//               >
//            <Avatar 
//   sx={{ 
//     bgcolor: 'primary.main', 
//     width: 40, 
//     height: 40,
//     animation: `${floatAnimation} 3s ease-in-out infinite`,
//     '&:hover': {
//       animation: `${floatAnimation} 1s ease-in-out infinite`,
//     }
//   }}
// >
//   <Typography variant="body1" fontWeight="bold" color="primary.contrastText">
//     DJ
//   </Typography>
// </Avatar>
//                 <Typography
//                   variant="h6"
//                   noWrap
//                   sx={{
//                     fontWeight: 700,
//                     fontFamily: 'serif',
//                     '& span': {
//                       color: 'primary.main'
//                     }
//                   }}
//                 >
//                   <span>Dhanush</span> J
//                 </Typography>
//               </Box>

//               {/* Desktop Menu */}
//               <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
//                 {sections.map((section) => (
//                   <Button
//                     key={section.id}
//                     onClick={() => handleNavClick(section.id)}
//                     sx={{
//                       color: activeSection === section.id ? 'primary.main' : 'text.primary',
//                       fontWeight: activeSection === section.id ? 600 : 500,
//                       textTransform: 'capitalize',
//                       '&:hover': {
//                         color: 'primary.main',
//                         bgcolor: 'transparent'
//                       }
//                     }}
//                   >
//                     {section.label}
//                   </Button>
//                 ))}
//               </Box>

//               {/* Theme Toggle and Mobile Menu Button */}
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 {/* <IconButton 
//                   onClick={toggleColorMode} 
//                   color="primary"
//                   sx={{ 
//                     '&:hover': {
//                       transform: 'rotate(30deg)',
//                       transition: 'transform 0.3s'
//                     }
//                   }}
//                 >
//                   {mode === 'dark' ? (
//                     <Box component="span" sx={{ 
//                       width: 24, 
//                       height: 24,
//                       borderRadius: '50%',
//                       bgcolor: 'warning.main',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }} />
//                   ) : (
//                     <Box component="span" sx={{ 
//                       width: 24, 
//                       height: 24,
//                       borderRadius: '50%',
//                       bgcolor: 'grey.800',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }} />
//                   )}
//                 </IconButton> */}
//                 <IconButton 
//       onClick={handleClick}
//       color="inherit"
//       sx={{
//         p: 1.5,
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           transform: 'rotate(30deg)',
//           bgcolor: 'action.hover',
//         },
//         ...(isAnimating && {
//           transform: 'scale(1.1) rotate(90deg)',
//         })
//       }}
//     >
//       {mode === 'dark' ? (
//         <LightModeIcon 
//           sx={{
//             color: 'warning.main',
//             transition: 'transform 0.3s ease',
//             ...(isAnimating && {
//               transform: 'scale(1.2)',
//             })
//           }}
//         />
//       ) : (
//         <DarkModeIcon 
//           sx={{
//             color: 'text.primary',
//             transition: 'transform 0.3s ease',
//             ...(isAnimating && {
//               transform: 'scale(1.2)',
//             })
//           }}
//         />
//       )}
//     </IconButton>

//                 <IconButton
//                   size="large"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="primary"
//                   sx={{ display: { md: 'none' } }}
//                 >
//                   {anchorElNav ? <CloseIcon /> : <MenuIcon />}
//                 </IconButton>
//               </Box>
//             </Toolbar>
//           </Container>

//           {/* Mobile Menu */}
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xs: 'block', md: 'none' },
//               '& .MuiPaper-root': {
//                 width: '100%',
//                 maxWidth: 'none',
//                 bgcolor: 'background.paper',
//                 mt: 1,
//                 boxShadow: theme.shadows[4],
//                 borderRadius: '8px',
//                 border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`
//               }
//             }}
//           >
//             {sections.map((section) => (
//               <MenuItem 
//                 key={section.id} 
//                 onClick={() => handleNavClick(section.id)}
//                 selected={activeSection === section.id}
//                 sx={{
//                   color: activeSection === section.id ? 'primary.main' : 'text.primary',
//                   fontWeight: activeSection === section.id ? 600 : 400,
//                   textTransform: 'capitalize',
//                   '&.Mui-selected': {
//                     bgcolor: 'action.selected',
//                   },
//                   '&:hover': {
//                     bgcolor: 'action.hover',
//                   }
//                 }}
//               >
//                 {section.label}
//               </MenuItem>
//             ))}
//           </Menu>
//         </AppBar>
//       </HideOnScroll>

//       {/* Scroll to Top Button */}
//       <ScrollTop>
//         <Fab 
//           color="primary" 
//           size="small" 
//           aria-label="scroll back to top"
//           sx={{
//             boxShadow: theme.shadows[4]
//           }}
//         >
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Slide,
  useScrollTrigger,
  Fab,
  Zoom,
  Avatar,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../contexts/ColorModeContext';
import { scrollToSection } from '../utils/scrollUtils';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';

// Hide AppBar on scroll down
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

// Scroll to top FAB
const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 2,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const Navbar = ({ activeSection }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const theme = useTheme();

  const floatAnimation = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  `;

  const sections = useMemo(() => [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const handleClick = useCallback(() => {
    setIsAnimating(true);
    toggleColorMode();
    setTimeout(() => setIsAnimating(false), 300);
  }, [toggleColorMode]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100);
  }, []);

  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const handleNavClick = useCallback((sectionId) => {
    handleCloseNavMenu();
    scrollToSection(sectionId, 80);
  }, [handleCloseNavMenu]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const appBarStyles = useMemo(() => ({
    bgcolor: 'background.default',
    backdropFilter: 'blur(10px)',
    background: mode === 'light' 
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(10, 10, 10, 0.8)',
    transition: 'all 0.3s ease',
    borderBottom: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
    py: 1
  }), [mode]);

  const themeToggleStyles = useMemo(() => ({
    p: 1.5,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'rotate(30deg)',
      bgcolor: 'action.hover',
    },
    ...(isAnimating && {
      transform: 'scale(1.1) rotate(90deg)',
    })
  }), [isAnimating]);

  const renderDesktopMenu = useMemo(() => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
      {sections.map((section) => (
        <Button
          key={section.id}
          onClick={() => handleNavClick(section.id)}
          sx={{
            color: activeSection === section.id ? 'primary.main' : 'text.primary',
            fontWeight: activeSection === section.id ? 600 : 500,
            textTransform: 'capitalize',
            '&:hover': {
              color: 'primary.main',
              bgcolor: 'transparent'
            }
          }}
        >
          {section.label}
        </Button>
      ))}
    </Box>
  ), [sections, activeSection, handleNavClick]);

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={isScrolled ? 4 : 0}
          sx={appBarStyles}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  cursor: 'pointer'
                }}
                onClick={() => handleNavClick('hero')}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 40, 
                    height: 40,
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                    '&:hover': {
                      animation: `${floatAnimation} 1s ease-in-out infinite`,
                    }
                  }}
                >
                  <Typography variant="body1" fontWeight="bold" color="primary.contrastText">
                    DJ
                  </Typography>
                </Avatar>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    fontFamily: 'serif',
                    '& span': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <span>Dhanush</span> J
                </Typography>
              </Box>

              {renderDesktopMenu}

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                  onClick={handleClick}
                  color="inherit"
                  sx={themeToggleStyles}
                >
                  {mode === 'dark' ? (
                    <LightModeIcon 
                      sx={{
                        color: 'warning.main',
                        transition: 'transform 0.3s ease',
                        ...(isAnimating && {
                          transform: 'scale(1.2)',
                        })
                      }}
                    />
                  ) : (
                    <DarkModeIcon 
                      sx={{
                        color: 'text.primary',
                        transition: 'transform 0.3s ease',
                        ...(isAnimating && {
                          transform: 'scale(1.2)',
                        })
                      }}
                    />
                  )}
                </IconButton>

                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
                  sx={{ display: { md: 'none' } }}
                >
                  {anchorElNav ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                width: '100%',
                maxWidth: 'none',
                bgcolor: 'background.paper',
                mt: 1,
                boxShadow: theme.shadows[4],
                borderRadius: '8px',
                border: `1px solid ${mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`
              }
            }}
          >
            {sections.map((section) => (
              <MenuItem 
                key={section.id} 
                onClick={() => handleNavClick(section.id)}
                selected={activeSection === section.id}
                sx={{
                  color: activeSection === section.id ? 'primary.main' : 'text.primary',
                  fontWeight: activeSection === section.id ? 600 : 400,
                  textTransform: 'capitalize',
                  '&.Mui-selected': {
                    bgcolor: 'action.selected',
                  },
                  '&:hover': {
                    bgcolor: 'action.hover',
                  }
                }}
              >
                {section.label}
              </MenuItem>
            ))}
          </Menu>
        </AppBar>
      </HideOnScroll>

      <ScrollTop>
        <Fab 
          color="primary" 
          size="small" 
          aria-label="scroll back to top"
          sx={{
            boxShadow: theme.shadows[4]
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default React.memo(Navbar);