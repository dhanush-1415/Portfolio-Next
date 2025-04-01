// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Grid, 
//   Link, 
//   Divider,
//   useTheme
// } from '@mui/material';
// import { scrollToSection } from '../utils/scrollUtils';

// const Footer = () => {
//   const theme = useTheme();
//   const year = new Date().getFullYear();
  
//   const handleLinkClick = (sectionId) => (e) => {
//     e.preventDefault();
//     scrollToSection(sectionId, 70);
//   };

//   return (
//     <Box 
//       component="footer" 
//       sx={{ 
//         backgroundColor: theme.palette.mode === 'light' 
//           ? 'rgba(248, 249, 250, 0.9)' 
//           : 'rgba(18, 18, 18, 0.9)', 
//         py: 6,
//         borderTop: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Typography 
//               variant="h6" 
//               component="div"
//               sx={{
//                 fontWeight: 700,
//                 letterSpacing: '.1rem',
//                 color: 'primary.main',
//                 mb: 2
//               }}
//             >
//               NEXTMUI
//             </Typography>
//             <Typography 
//               variant="body2" 
//               color="text.secondary" 
//               paragraph
//               sx={{ mb: 3 }}
//             >
//               A professional Next.js application with Material UI featuring custom color palette
//               and smooth navigation for an exceptional user experience.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
//                 <Box
//                   key={social}
//                   component="a"
//                   href="#"
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: 35,
//                     height: 35,
//                     borderRadius: '50%',
//                     bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
//                     color: 'primary.main',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       bgcolor: 'primary.main',
//                       color: 'white',
//                       transform: 'translateY(-3px)'
//                     }
//                   }}
//                 >
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     {social === 'facebook' && (
//                       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                     )}
//                     {social === 'twitter' && (
//                       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                     )}
//                     {social === 'linkedin' && (
//                       <>
//                         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                         <rect x="2" y="9" width="4" height="12" />
//                         <circle cx="4" cy="4" r="2" />
//                       </>
//                     )}
//                     {social === 'instagram' && (
//                       <>
//                         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//                       </>
//                     )}
//                   </svg>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} sm={6} md={2}>
//             <Typography 
//               variant="h6" 
//               component="h6"
//               sx={{ fontWeight: 600, mb: 3 }}
//             >
//               Quick Links
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//               {[
//                 { label: 'Home', section: 'hero' },
//                 { label: 'Features', section: 'features' },
//                 { label: 'Services', section: 'services' },
//                 { label: 'Testimonials', section: 'testimonials' },
//                 { label: 'Contact', section: 'contact' }
//               ].map((link) => (
//                 <Link
//                   key={link.section}
//                   href={`#${link.section}`}
//                   color="text.secondary"
//                   underline="hover"
//                   onClick={handleLinkClick(link.section)}
//                   sx={{ 
//                     transition: 'color 0.3s',
//                     '&:hover': { color: 'primary.main' }
//                   }}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} sm={6} md={2}>
//             <Typography 
//               variant="h6" 
//               component="h6"
//               sx={{ fontWeight: 600, mb: 3 }}
//             >
//               Company
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//               {[
//                 { label: 'About Us', url: '#' },
//                 { label: 'Our Team', url: '#' },
//                 { label: 'Careers', url: '#' },
//                 { label: 'Privacy Policy', url: '#' },
//                 { label: 'Terms of Service', url: '#' }
//               ].map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.url}
//                   color="text.secondary"
//                   underline="hover"
//                   sx={{ 
//                     transition: 'color 0.3s',
//                     '&:hover': { color: 'primary.main' }
//                   }}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} sm={12} md={4}>
//             <Typography 
//               variant="h6" 
//               component="h6"
//               sx={{ fontWeight: 600, mb: 3 }}
//             >
//               Newsletter
//             </Typography>
//             <Typography 
//               variant="body2" 
//               color="text.secondary" 
//               paragraph
//               sx={{ mb: 2 }}
//             >
//               Subscribe to our newsletter for the latest updates, articles, and resources.
//             </Typography>
//             <Box 
//               component="form" 
//               noValidate 
//               sx={{ 
//                 display: 'flex',
//                 alignItems: 'flex-start',
//                 gap: 1
//               }}
//             >
//               <Box 
//                 component="input"
//                 type="email"
//                 placeholder="Your email address"
//                 sx={{
//                   flex: 1,
//                   p: '10px 16px',
//                   borderRadius: 2,
//                   border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'}`,
//                   bgcolor: 'transparent',
//                   color: 'text.primary',
//                   outline: 'none',
//                   fontFamily: theme.typography.fontFamily,
//                   fontSize: '0.875rem',
//                   '&:focus': {
//                     borderColor: 'primary.main',
//                   },
//                   '&::placeholder': {
//                     color: 'text.secondary',
//                     opacity: 0.8,
//                   }
//                 }}
//               />
//               <Box 
//                 component="button"
//                 type="submit"
//                 sx={{
//                   bgcolor: 'primary.main',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: 2,
//                   p: '10px 16px',
//                   fontFamily: theme.typography.fontFamily,
//                   fontSize: '0.875rem',
//                   fontWeight: 500,
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   '&:hover': {
//                     bgcolor: 'primary.dark',
//                   }
//                 }}
//               >
//                 Subscribe
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
        
//         <Divider sx={{ my: 4, borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
        
//         <Box 
//           sx={{ 
//             display: 'flex', 
//             flexDirection: { xs: 'column', sm: 'row' },
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             gap: 2
//           }}
//         >
//           <Typography 
//             variant="body2" 
//             color="text.secondary"
//           >
//             © {year} NEXTMUI. All rights reserved.
//           </Typography>
//           <Box 
//             sx={{ 
//               display: 'flex', 
//               gap: 3
//             }}
//           >
//             {[
//               { label: 'Privacy Policy', url: '#' },
//               { label: 'Terms of Service', url: '#' },
//               { label: 'Cookies Settings', url: '#' }
//             ].map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.url}
//                 color="text.secondary"
//                 underline="hover"
//                 variant="body2"
//                 sx={{ 
//                   transition: 'color 0.3s',
//                   '&:hover': { color: 'primary.main' }
//                 }}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Divider,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import { 
  GitHub,
  LinkedIn,
  Email,
  WhatsApp
} from '@mui/icons-material';
import { resumeData } from '../utils/resumeData';
import { scrollToSection } from '../utils/scrollUtils';

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();
  
  const handleLinkClick = (sectionId) => (e) => {
    e.preventDefault();
    scrollToSection(sectionId, 70);
  };

  const socialLinks = [
    {
      icon: <GitHub fontSize="small" />,
      url: resumeData.socialLinks.find(s => s.name === 'GitHub')?.url || '#',
      label: 'GitHub'
    },
    {
      icon: <LinkedIn fontSize="small" />,
      url: resumeData.socialLinks.find(s => s.name === 'LinkedIn')?.url || '#',
      label: 'LinkedIn'
    },
    {
      icon: <Email fontSize="small" />,
      url: `mailto:${resumeData.personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: <WhatsApp fontSize="small" />,
      url: `https://wa.me/${resumeData.personalInfo.phone.replace(/\D/g, '')}`,
      label: 'WhatsApp'
    }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr'
            },
            gap: 4,
            mb: 4
          }}
        >
          {/* Left Section - Bio and Social */}
          <Box>
            <Typography 
              variant="h6" 
              component="div"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2
              }}
            >
              {resumeData.personalInfo.name}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              paragraph
              sx={{ mb: 3 }}
            >
              {resumeData.personalInfo.summary || 'Portfolio showcasing my work and skills'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Right Section - Quick Links */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr 1fr',
                sm: '1fr 1fr 1fr'
              },
              gap: 3
            }}
          >
            <Box>
              <Typography 
                variant="subtitle1" 
                component="h6"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Navigation
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'Home', section: 'home' },
                  { label: 'Projects', section: 'projects' },
                  { label: 'Skills', section: 'skills' },
                  { label: 'Experience', section: 'experience' },
                  { label: 'Contact', section: 'contact' }
                ].map((link) => (
                  <Link
                    key={link.section}
                    href={`#${link.section}`}
                    color="text.secondary"
                    underline="hover"
                    onClick={handleLinkClick(link.section)}
                    sx={{ 
                      fontSize: '0.875rem',
                      transition: 'color 0.3s',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography 
                variant="subtitle1" 
                component="h6"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href={`mailto:${resumeData.personalInfo.email}`}
                  color="text.secondary"
                  underline="hover"
                  sx={{ 
                    fontSize: '0.875rem',
                    transition: 'color 0.3s',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Email
                </Link>
                <Link
                  href={`tel:${resumeData.personalInfo.phone}`}
                  color="text.secondary"
                  underline="hover"
                  sx={{ 
                    fontSize: '0.875rem',
                    transition: 'color 0.3s',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Phone
                </Link>
                {resumeData.personalInfo.location && (
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {resumeData.personalInfo.location.city}, {resumeData.personalInfo.location.state}
                  </Typography>
                )}
              </Box>
            </Box>

            <Box>
              <Typography 
                variant="subtitle1" 
                component="h6"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'Privacy Policy', url: '#' },
                  { label: 'Terms', url: '#' }
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    color="text.secondary"
                    underline="hover"
                    sx={{ 
                      fontSize: '0.875rem',
                      transition: 'color 0.3s',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            © {year}  Kavya{resumeData.personalInfo.name}. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            Built with ❤️ using React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;