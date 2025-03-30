import { useState, useContext, useEffect } from 'react';
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
  Zoom
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ColorModeContext } from '../contexts/ColorModeContext';
import { scrollToSection } from '../utils/scrollUtils';
import { useTheme } from '@mui/material/styles';

// Hide AppBar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Scroll to top FAB
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
}

const Navbar = ({ activeSection }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const theme = useTheme();

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (sectionId) => {
    handleCloseNavMenu();
    scrollToSection(sectionId, 80); // Offset for navbar height
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          id="main-navbar"
          position="fixed" 
          elevation={0}
          sx={{
            bgcolor: mode === 'light' 
              ? 'rgba(248, 249, 250, 0.9)' 
              : 'rgba(18, 18, 18, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
            transition: 'background-color 0.3s'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo - Desktop */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => handleNavClick('hero')}
              >
                NEXTMUI
              </Typography>

              {/* Mobile Menu */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {sections.map((section) => (
                    <MenuItem 
                      key={section.id} 
                      onClick={() => handleNavClick(section.id)}
                      selected={activeSection === section.id}
                      sx={{
                        color: activeSection === section.id 
                          ? 'primary.main' 
                          : 'text.primary',
                        '&.Mui-selected': {
                          bgcolor: mode === 'light' 
                            ? 'rgba(75, 0, 130, 0.08)'
                            : 'rgba(147, 112, 219, 0.08)',
                        }
                      }}
                    >
                      <Typography textAlign="center">{section.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Logo - Mobile */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => handleNavClick('hero')}
              >
                NEXTMUI
              </Typography>

              {/* Desktop Menu */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: activeSection === section.id ? 'primary.main' : 'text.primary',
                      display: 'block',
                      fontWeight: activeSection === section.id ? 600 : 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: activeSection === section.id ? '80%' : '0%',
                        height: '2px',
                        bottom: '5px',
                        left: '10%',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '80%'
                      }
                    }}
                  >
                    {section.label}
                  </Button>
                ))}
              </Box>

              {/* Theme Toggle */}
              <IconButton 
                onClick={toggleColorMode} 
                color="primary"
                sx={{ 
                  ml: 1,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'rotate(30deg)'
                  }
                }}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Scroll to Top Button */}
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

export default Navbar;
