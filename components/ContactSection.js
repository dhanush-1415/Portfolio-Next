// import { useState, useRef } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Grid, 
//   TextField, 
//   Button, 
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Snackbar,
//   Alert
// } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import SendIcon from '@mui/icons-material/Send';

// const ContactInfoItem = ({ icon, title, content, link, linkType }) => {
//   const theme = useTheme();
  
//   return (
//     <Box 
//       sx={{ 
//         display: 'flex', 
//         alignItems: 'flex-start', 
//         mb: 4 
//       }}
//     >
//       <Box
//         sx={{
//           mr: 2,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: 50,
//           height: 50,
//           borderRadius: '50%',
//           bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
//           color: 'primary.main',
//         }}
//       >
//         {icon}
//       </Box>
//       <Box>
//         <Typography 
//           variant="h6" 
//           component="h3" 
//           gutterBottom
//           sx={{ fontWeight: 600 }}
//         >
//           {title}
//         </Typography>
//         {link ? (
//           <Typography 
//             component="a" 
//             href={linkType === 'email' ? `mailto:${link}` : link}
//             sx={{
//               color: 'text.secondary',
//               textDecoration: 'none',
//               '&:hover': {
//                 color: 'primary.main',
//                 textDecoration: 'underline',
//               }
//             }}
//           >
//             {content}
//           </Typography>
//         ) : (
//           <Typography color="text.secondary">
//             {content}
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// const ContactSection = ({ id }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const formRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [formErrors, setFormErrors] = useState({});
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when field is edited
//     if (formErrors[name]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };
  
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.subject.trim()) errors.subject = 'Subject is required';
//     if (!formData.message.trim()) errors.message = 'Message is required';
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       // In a real application, you would send the form data to your backend here
      
//       // For demonstration, we'll just show a success message
//       setSnackbar({
//         open: true,
//         message: 'Your message has been sent! We will get back to you soon.',
//         severity: 'success'
//       });
      
//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } else {
//       setSnackbar({
//         open: true,
//         message: 'Please fix the errors in the form.',
//         severity: 'error'
//       });
//     }
//   };
  
//   const handleCloseSnackbar = () => {
//     setSnackbar(prev => ({
//       ...prev,
//       open: false
//     }));
//   };

//   return (
//     <Box 
//       id={id}
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         background: theme.palette.mode === 'light' 
//           ? '#FFFFFF' 
//           : '#1A1A1A',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: 'center', mb: 8 }} className="fade-in">
//           <Typography 
//             variant="overline" 
//             component="p"
//             sx={{ 
//               color: 'primary.main', 
//               fontWeight: 600, 
//               letterSpacing: 2,
//               mb: 2
//             }}
//           >
//             GET IN TOUCH
//           </Typography>
//           <Typography 
//             variant="h2" 
//             component="h2"
//             sx={{ 
//               fontWeight: 700, 
//               mb: 3,
//               background: theme.palette.mode === 'light' 
//                 ? 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)' 
//                 : 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)',
//               backgroundClip: 'text',
//               textFillColor: 'transparent',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//             }}
//           >
//             Contact Us
//           </Typography>
//           <Typography 
//             variant="h6" 
//             color="textSecondary"
//             sx={{ 
//               maxWidth: 700, 
//               mx: 'auto',
//               fontWeight: 400,
//               mb: 6
//             }}
//           >
//             Have questions or need more information? Reach out to us and we'll get back to you as soon as possible.
//           </Typography>
//         </Box>

//         <Box sx={{ 
//           display: 'grid',
//           gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
//           gap: 6
//         }}>
//           <Box>
//             <Card 
//               className="fade-in"
//               elevation={0}
//               sx={{
//                 height: '100%',
//                 p: 2,
//                 borderRadius: 4,
//                 bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
//                 border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
//               }}
//             >
//               <CardContent sx={{ p: 3 }}>
//                 <Typography 
//                   variant="h4" 
//                   component="h3" 
//                   gutterBottom
//                   sx={{ 
//                     fontWeight: 600,
//                     mb: 4
//                   }}
//                 >
//                   Contact Information
//                 </Typography>
                
//                 <ContactInfoItem 
//                   icon={<EmailIcon />}
//                   title="Email"
//                   content="contact@nextmui.com"
//                   link="contact@nextmui.com"
//                   linkType="email"
//                 />
                
//                 <ContactInfoItem 
//                   icon={<PhoneIcon />}
//                   title="Phone"
//                   content="+1 (123) 456-7890"
//                   link="tel:+11234567890"
//                 />
                
//                 <ContactInfoItem 
//                   icon={<LocationOnIcon />}
//                   title="Address"
//                   content="123 Innovation Street, Tech City, TC 12345"
//                 />
                
//                 <Box sx={{ mt: 6, mb: 2 }}>
//                   <Typography 
//                     variant="body1"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Follow Us
//                   </Typography>
//                   <Box sx={{ display: 'flex', mt: 2, gap: 2 }}>
//                     {/* Social Media Icons */}
//                     {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
//                       <Box
//                         key={social}
//                         component="a"
//                         href="#"
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           width: 40,
//                           height: 40,
//                           borderRadius: '50%',
//                           bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
//                           color: 'primary.main',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             bgcolor: 'primary.main',
//                             color: 'white',
//                             transform: 'translateY(-3px)'
//                           }
//                         }}
//                       >
//                         <svg
//                           width="18"
//                           height="18"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           {social === 'facebook' && (
//                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                           )}
//                           {social === 'twitter' && (
//                             <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                           )}
//                           {social === 'linkedin' && (
//                             <>
//                               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                               <rect x="2" y="9" width="4" height="12" />
//                               <circle cx="4" cy="4" r="2" />
//                             </>
//                           )}
//                           {social === 'instagram' && (
//                             <>
//                               <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//                             </>
//                           )}
//                         </svg>
//                       </Box>
//                     ))}
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>
          
//           <Box>
//             <Card 
//               className="fade-in"
//               elevation={0}
//               sx={{
//                 height: '100%',
//                 p: 2,
//                 borderRadius: 4,
//                 bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
//                 border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
//               }}
//             >
//               <CardContent sx={{ p: 3 }}>
//                 <Typography 
//                   variant="h4" 
//                   component="h3" 
//                   gutterBottom
//                   sx={{ 
//                     fontWeight: 600,
//                     mb: 4
//                   }}
//                 >
//                   Send Us a Message
//                 </Typography>
                
//                 <Box 
//                   component="form" 
//                   ref={formRef}
//                   onSubmit={handleSubmit}
//                   noValidate
//                 >
//                   <Box sx={{ 
//                     display: 'grid',
//                     gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
//                     gap: 3
//                   }}>
//                     <Box>
//                       <TextField
//                         fullWidth
//                         required
//                         id="name"
//                         name="name"
//                         label="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         error={!!formErrors.name}
//                         helperText={formErrors.name}
//                         variant="outlined"
//                       />
//                     </Box>
//                     <Box>
//                       <TextField
//                         fullWidth
//                         required
//                         id="email"
//                         name="email"
//                         label="Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         error={!!formErrors.email}
//                         helperText={formErrors.email}
//                         variant="outlined"
//                       />
//                     </Box>
//                     <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
//                       <TextField
//                         fullWidth
//                         required
//                         id="subject"
//                         name="subject"
//                         label="Subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         error={!!formErrors.subject}
//                         helperText={formErrors.subject}
//                         variant="outlined"
//                       />
//                     </Box>
//                     <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
//                       <TextField
//                         fullWidth
//                         required
//                         id="message"
//                         name="message"
//                         label="Your Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         error={!!formErrors.message}
//                         helperText={formErrors.message}
//                         variant="outlined"
//                         multiline
//                         rows={6}
//                       />
//                     </Box>
//                     <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         size="large"
//                         endIcon={<SendIcon />}
//                         className="button-hover-effect"
//                         sx={{ 
//                           mt: 2,
//                           borderRadius: 2,
//                           px: 4,
//                           py: 1.5
//                         }}
//                       >
//                         Send Message
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Box>
//         </Box>
//       </Container>
      
//       <Snackbar 
//         open={snackbar.open} 
//         autoHideDuration={6000} 
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleCloseSnackbar} 
//           severity={snackbar.severity}
//           sx={{ width: '100%' }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ContactSection;



// import { useState, useRef } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Grid, 
//   TextField, 
//   Button, 
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Snackbar,
//   Alert,
//   IconButton,
//   CircularProgress
// } from '@mui/material';
// import { 
//   Email as EmailIcon,
//   LocationOn as LocationIcon,
//   Phone as PhoneIcon,
//   Send as SendIcon,
//   LinkedIn,
//   GitHub,
//   Twitter,
//   Instagram
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import { resumeData } from '../utils/resumeData';

// const ContactInfoItem = ({ icon, title, content, link, linkType }) => {
//   const theme = useTheme();
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
//         <Box
//           sx={{
//             mr: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: 50,
//             height: 50,
//             borderRadius: '50%',
//             bgcolor: theme.palette.mode === 'light' 
//               ? 'rgba(75, 0, 130, 0.08)' 
//               : 'rgba(147, 112, 219, 0.08)',
//             color: 'primary.main',
//           }}
//         >
//           {icon}
//         </Box>
//         <Box>
//           <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
//             {title}
//           </Typography>
//           {link ? (
//             <Typography 
//               component="a" 
//               href={linkType === 'email' ? `mailto:${link}` : link}
//               sx={{
//                 color: 'text.secondary',
//                 textDecoration: 'none',
//                 '&:hover': {
//                   color: 'primary.main',
//                   textDecoration: 'underline',
//                 }
//               }}
//             >
//               {content}
//             </Typography>
//           ) : (
//             <Typography color="text.secondary">
//               {content}
//             </Typography>
//           )}
//         </Box>
//       </Box>
//     </motion.div>
//   );
// };

// const ContactSection = ({ id }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const formRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [formErrors, setFormErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (formErrors[name]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };
  
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!formData.subject.trim()) errors.subject = 'Subject is required';
//     if (!formData.message.trim()) errors.message = 'Message is required';
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       setSnackbar({
//         open: true,
//         message: 'Please fix the errors in the form.',
//         severity: 'error'
//       });
//       return;
//     }
    
//     setLoading(true);
    
//     try {
//       // Replace with your EmailJS service ID, template ID, and public key
//       await emailjs.sendForm(
//         'service_d14029k',
//         'portfolio_template',
//         formRef.current,
//         'U37jbX_QjxSHyKc4z'
//       );
      
//       setSnackbar({
//         open: true,
//         message: 'Message sent successfully! I will get back to you soon.',
//         severity: 'success'
//       });
      
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Failed to send message:', error);
//       setSnackbar({
//         open: true,
//         message: 'Failed to send message. Please try again later.',
//         severity: 'error'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const handleCloseSnackbar = () => {
//     setSnackbar(prev => ({
//       ...prev,
//       open: false
//     }));
//   };

//   return (
//     <Box 
//       id={id}
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         background: theme.palette.background.default,
//       }}
//     >
//       <Container maxWidth="lg">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography 
//               variant="overline" 
//               component="p"
//               sx={{ 
//                 color: 'primary.main', 
//                 fontWeight: 600, 
//                 letterSpacing: 2,
//                 mb: 2,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <SendIcon sx={{ mr: 1, fontSize: '1rem' }} />
//               GET IN TOUCH
//               <SendIcon sx={{ ml: 1, fontSize: '1rem' }} />
//             </Typography>
            
//             <Typography 
//               variant="h2" 
//               component="h2"
//               sx={{ 
//                 fontWeight: 700, 
//                 mb: 3,
//                 background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 backgroundClip: 'text',
//                 textFillColor: 'transparent',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Let's Connect
//             </Typography>
            
//             <Typography 
//               variant="subtitle1"
//               color="text.secondary"
//               sx={{ 
//                 maxWidth: 700, 
//                 mx: 'auto',
//                 lineHeight: 1.7
//               }}
//             >
//               Have a project in mind or want to discuss potential opportunities? 
//               Feel free to reach out - I'd love to hear from you!
//             </Typography>
//           </Box>
//         </motion.div>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={5}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card 
//                 elevation={0}
//                 sx={{
//                   height: '100%',
//                   p: 2,
//                   borderRadius: 4,
//                   bgcolor: 'background.paper',
//                   border: `1px solid ${theme.palette.divider}`,
//                   boxShadow: theme.shadows[2]
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   <Typography 
//                     variant="h4" 
//                     component="h3" 
//                     gutterBottom
//                     sx={{ 
//                       fontWeight: 600,
//                       mb: 4
//                     }}
//                   >
//                     Contact Info
//                   </Typography>
                  
//                   <ContactInfoItem 
//                     icon={<EmailIcon color="primary" />}
//                     title="Email"
//                     content={resumeData.personalInfo.email}
//                     link={resumeData.personalInfo.email}
//                     linkType="email"
//                   />
                  
//                   <ContactInfoItem 
//                     icon={<PhoneIcon color="primary" />}
//                     title="Phone"
//                     content={resumeData.personalInfo.phone}
//                     link={`tel:${resumeData.personalInfo.phone}`}
//                   />
                  
//                   <ContactInfoItem 
//                     icon={<LocationIcon color="primary" />}
//                     title="Location"
//                     content={`${resumeData.personalInfo.location.city}, ${resumeData.personalInfo.location.state}`}
//                   />
                  
//                   <Box sx={{ mt: 6 }}>
//                     <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
//                       Follow Me
//                     </Typography>
//                     <Box sx={{ display: 'flex', gap: 1 }}>
//                       {resumeData.socialLinks?.map((social) => (
//                         <motion.div
//                           key={social.name}
//                           whileHover={{ y: -3 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           <IconButton
//                             href={social.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{
//                               bgcolor: theme.palette.mode === 'light' 
//                                 ? 'rgba(75, 0, 130, 0.08)' 
//                                 : 'rgba(147, 112, 219, 0.08)',
//                               '&:hover': {
//                                 bgcolor: 'primary.main',
//                                 color: 'white'
//                               }
//                             }}
//                           >
//                             {social.name === 'LinkedIn' && <LinkedIn />}
//                             {social.name === 'GitHub' && <GitHub />}
//                             {social.name === 'Twitter' && <Twitter />}
//                             {social.name === 'Instagram' && <Instagram />}
//                           </IconButton>
//                         </motion.div>
//                       ))}
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
          
//           <Grid item xs={12} md={7}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <Card 
//                 elevation={0}
//                 sx={{
//                   height: '100%',
//                   p: 2,
//                   borderRadius: 4,
//                   bgcolor: 'background.paper',
//                   border: `1px solid ${theme.palette.divider}`,
//                   boxShadow: theme.shadows[2]
//                 }}
//               >
//                 <CardContent sx={{ p: 3 }}>
//                   <Typography 
//                     variant="h4" 
//                     component="h3" 
//                     gutterBottom
//                     sx={{ 
//                       fontWeight: 600,
//                       mb: 4
//                     }}
//                   >
//                     Send Me a Message
//                   </Typography>
                  
//                   <Box 
//                     component="form" 
//                     ref={formRef}
//                     onSubmit={handleSubmit}
//                     noValidate
//                   >
//                     <Grid container spacing={3}>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           required
//                           id="name"
//                           name="name"
//                           label="Your Name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           error={!!formErrors.name}
//                           helperText={formErrors.name}
//                           variant="outlined"
//                           InputProps={{
//                             sx: { borderRadius: 2 }
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           required
//                           id="email"
//                           name="email"
//                           label="Your Email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           error={!!formErrors.email}
//                           helperText={formErrors.email}
//                           variant="outlined"
//                           InputProps={{
//                             sx: { borderRadius: 2 }
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           required
//                           id="subject"
//                           name="subject"
//                           label="Subject"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           error={!!formErrors.subject}
//                           helperText={formErrors.subject}
//                           variant="outlined"
//                           InputProps={{
//                             sx: { borderRadius: 2 }
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           required
//                           id="message"
//                           name="message"
//                           label="Your Message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           error={!!formErrors.message}
//                           helperText={formErrors.message}
//                           variant="outlined"
//                           multiline
//                           rows={6}
//                           InputProps={{
//                             sx: { borderRadius: 2 }
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <motion.div
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             size="large"
//                             endIcon={!loading && <SendIcon />}
//                             disabled={loading}
//                             sx={{ 
//                               mt: 2,
//                               borderRadius: 2,
//                               px: 4,
//                               py: 1.5,
//                               minWidth: 180
//                             }}
//                           >
//                             {loading ? (
//                               <CircularProgress size={24} color="inherit" />
//                             ) : (
//                               'Send Message'
//                             )}
//                           </Button>
//                         </motion.div>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
      
//       <Snackbar 
//         open={snackbar.open} 
//         autoHideDuration={6000} 
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert 
//           onClose={handleCloseSnackbar} 
//           severity={snackbar.severity}
//           sx={{ width: '100%' }}
//           variant="filled"
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ContactSection;

// import { useState, useRef } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   TextField, 
//   Button, 
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Snackbar,
//   Alert,
//   IconButton,
//   CircularProgress,
//   Tooltip,
//   Divider,
//   alpha
// } from '@mui/material';
// import { 
//   Email as EmailIcon,
//   LocationOn as LocationIcon,
//   Phone as PhoneIcon,
//   Send as SendIcon,
//   LinkedIn,
//   GitHub,
//   Twitter,
//   Instagram
// } from '@mui/icons-material';
// import { motion, AnimatePresence } from 'framer-motion';
// import emailjs from '@emailjs/browser';

// const ContactInfoCard = ({ icon, title, content, link, linkType, delay = 0 }) => {
//   const theme = useTheme();
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -5 }}
//     >
//       <Box sx={{ 
//         display: 'flex', 
//         alignItems: 'center',
//         p: 3,
//         borderRadius: 2,
//         bgcolor: alpha(theme.palette.primary.main, 0.05),
//         border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//         transition: 'all 0.3s ease',
//         height: '100%',
//         '&:hover': {
//           bgcolor: alpha(theme.palette.primary.main, 0.08),
//           borderColor: alpha(theme.palette.primary.main, 0.3),
//           transform: 'translateY(-3px)'
//         }
//       }}>
//         <Box
//           sx={{
//             mr: 3,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: 56,
//             height: 56,
//             borderRadius: '50%',
//             bgcolor: alpha(theme.palette.primary.main, 0.1),
//             color: 'primary.main',
//             flexShrink: 0,
//           }}
//         >
//           {icon}
//         </Box>
//         <Box>
//           <Typography 
//             variant="subtitle1" 
//             component="h3" 
//             sx={{ 
//               fontWeight: 600,
//               color: theme.palette.text.primary,
//               mb: 0.5
//             }}
//           >
//             {title}
//           </Typography>
//           {link ? (
//             <Typography 
//               component="a" 
//               href={linkType === 'email' ? `mailto:${link}` : link}
//               sx={{
//                 color: 'text.secondary',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease',
//                 display: 'block',
//                 '&:hover': {
//                   color: 'primary.main',
//                 }
//               }}
//             >
//               {content}
//             </Typography>
//           ) : (
//             <Typography color="text.secondary">
//               {content}
//             </Typography>
//           )}
//         </Box>
//       </Box>
//     </motion.div>
//   );
// };

// const ContactSection = ({ id }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const formRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [formErrors, setFormErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (formErrors[name]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };
  
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = 'Required field';
//     if (!formData.email.trim()) {
//       errors.email = 'Required field';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Invalid email format';
//     }
//     if (!formData.subject.trim()) errors.subject = 'Required field';
//     if (!formData.message.trim()) errors.message = 'Required field';
//     if (formData.message.trim().length < 20) errors.message = 'Message too short (min 20 chars)';
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setLoading(true);
    
//     try {
//       await emailjs.sendForm(
//         'service_d14029k',
//         'portfolio_template',
//         formRef.current,
//         'U37jbX_QjxSHyKc4z'
//       );
      
//       setSnackbar({
//         open: true,
//         message: 'Message sent successfully!',
//         severity: 'success'
//       });
      
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Failed to send message:', error);
//       setSnackbar({
//         open: true,
//         message: 'Failed to send message. Please try again.',
//         severity: 'error'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const handleCloseSnackbar = () => {
//     setSnackbar(prev => ({
//       ...prev,
//       open: false
//     }));
//   };

//   return (
//     <Box 
//       id={id}
//       component="section"
//       sx={{
//         py: { xs: 8, md: 12 },
//         position: 'relative',
//         background: theme.palette.background.default,
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Header Section */}
//         <Box sx={{ 
//           textAlign: 'center', 
//           mb: { xs: 6, md: 8 },
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <Typography 
//               variant="overline" 
//               component="p"
//               sx={{ 
//                 color: 'primary.main', 
//                 fontWeight: 600, 
//                 letterSpacing: 1.5,
//                 mb: 2,
//                 display: 'inline-block',
//                 px: 2,
//                 py: 1,
//                 borderRadius: 4,
//                 bgcolor: alpha(theme.palette.primary.main, 0.1),
//               }}
//             >
//               CONTACT ME
//             </Typography>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <Typography 
//               variant="h2" 
//               component="h2"
//               sx={{ 
//                 fontWeight: 800, 
//                 mb: 3,
//                 fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
//                 lineHeight: 1.2,
//                 background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                 backgroundClip: 'text',
//                 textFillColor: 'transparent',
//               }}
//             >
//               Let's Build Something Amazing
//             </Typography>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <Typography 
//               variant="subtitle1"
//               color="text.secondary"
//               sx={{ 
//                 maxWidth: 700, 
//                 mx: 'auto',
//                 lineHeight: 1.7,
//                 fontSize: { xs: '1rem', md: '1.1rem' }
//               }}
//             >
//               Whether you have a project in mind or just want to connect, I'd love to hear from you. 
//               Fill out the form or reach out directly through any of the channels below.
//             </Typography>
//           </motion.div>
//         </Box>

//         {/* Main Content - Using CSS Grid with Box */}
//         <Box
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: {
//               xs: '1fr',
//               md: '1fr 1.5fr'
//             },
//             gap: 4,
//             alignItems: 'stretch'
//           }}
//         >
//           {/* Left Side - Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true, margin: "-100px" }}
//             style={{ height: '100%' }}
//           >
//             <Card 
//               elevation={0}
//               sx={{
//                 p: 3,
//                 borderRadius: 4,
//                 bgcolor: 'background.paper',
//                 border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
//                 boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
//                 height: '100%'
//               }}
//             >
//               <Typography 
//                 variant="h5" 
//                 component="h3" 
//                 gutterBottom
//                 sx={{ 
//                   fontWeight: 700,
//                   mb: 4,
//                   color: theme.palette.text.primary
//                 }}
//               >
//                 Contact Details
//               </Typography>
              
//               <Box sx={{ 
//                 display: 'grid',
//                 gridTemplateColumns: '1fr',
//                 gap: 3,
//                 mb: 4
//               }}>
//                 <ContactInfoCard 
//                   icon={<EmailIcon color="primary" />}
//                   title="Email"
//                   content="workofdhanu@gmail.com"
//                   link="workofdhanu@gmail.com"
//                   linkType="email"
//                   delay={0.1}
//                 />
                
//                 <ContactInfoCard 
//                   icon={<PhoneIcon color="primary" />}
//                   title="Phone"
//                   content="+91 9398263767"
//                   link="tel:+919398263767"
//                   delay={0.2}
//                 />
                
//                 <ContactInfoCard 
//                   icon={<LocationIcon color="primary" />}
//                   title="Location"
//                   content="Nagari, Andhra Pradesh"
//                   delay={0.3}
//                 />
//               </Box>
              
//               <Divider sx={{ my: 4 }} />
              
//               <Box>
//                 <Typography 
//                   variant="subtitle1" 
//                   sx={{ 
//                     fontWeight: 600, 
//                     mb: 3,
//                     color: theme.palette.text.primary
//                   }}
//                 >
//                   Follow Me
//                 </Typography>
//                 <Box sx={{ 
//                   display: 'flex', 
//                   gap: 2,
//                   flexWrap: 'wrap'
//                 }}>
//                   <Tooltip title="LinkedIn" arrow>
//                     <motion.div
//                       whileHover={{ y: -4 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <IconButton
//                         href="https://www.linkedin.com/in/dhanush-j-ba92b8165"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="LinkedIn"
//                         sx={{
//                           bgcolor: alpha(theme.palette.primary.main, 0.1),
//                           color: 'primary.main',
//                           '&:hover': {
//                             bgcolor: 'primary.main',
//                             color: 'white'
//                           },
//                         }}
//                       >
//                         <LinkedIn />
//                       </IconButton>
//                     </motion.div>
//                   </Tooltip>
                  
//                   <Tooltip title="GitHub" arrow>
//                     <motion.div
//                       whileHover={{ y: -4 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <IconButton
//                         href="https://github.com/dhanush-1415"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="GitHub"
//                         sx={{
//                           bgcolor: alpha(theme.palette.primary.main, 0.1),
//                           color: 'primary.main',
//                           '&:hover': {
//                             bgcolor: 'primary.main',
//                             color: 'white'
//                           },
//                         }}
//                       >
//                         <GitHub />
//                       </IconButton>
//                     </motion.div>
//                   </Tooltip>
                  
//                   <Tooltip title="Twitter" arrow>
//                     <motion.div
//                       whileHover={{ y: -4 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <IconButton
//                         href="#"
//                         // target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="Twitter"
//                         sx={{
//                           bgcolor: alpha(theme.palette.primary.main, 0.1),
//                           color: 'primary.main',
//                           '&:hover': {
//                             bgcolor: 'primary.main',
//                             color: 'white'
//                           },
//                         }}
//                       >
//                         <Twitter />
//                       </IconButton>
//                     </motion.div>
//                   </Tooltip>
//                 </Box>
//               </Box>
//             </Card>
//           </motion.div>

//           {/* Right Side - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true, margin: "-100px" }}
//             style={{ height: '100%' }}
//           >
//             <Card 
//               elevation={0}
//               sx={{
//                 p: { xs: 3, md: 4 },
//                 borderRadius: 4,
//                 bgcolor: 'background.paper',
//                 border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
//                 boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
//                 height: '100%'
//               }}
//             >
//               <Typography 
//                 variant="h5" 
//                 component="h3" 
//                 gutterBottom
//                 sx={{ 
//                   fontWeight: 700,
//                   mb: 4,
//                   color: theme.palette.text.primary
//                 }}
//               >
//                 Send a Message
//               </Typography>
              
//               <Box 
//                 component="form" 
//                 ref={formRef}
//                 onSubmit={handleSubmit}
//                 noValidate
//                 sx={{ mt: 2 }}
//               >
//                 <Box
//                   sx={{
//                     display: 'grid',
//                     gridTemplateColumns: {
//                       xs: '1fr',
//                       sm: '1fr 1fr'
//                     },
//                     gap: 3,
//                     mb: 3
//                   }}
//                 >
//                   <motion.div
//                     whileHover={{ y: -2 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <TextField
//                       fullWidth
//                       required
//                       name="name"
//                       label="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       error={!!formErrors.name}
//                       helperText={formErrors.name}
//                       variant="outlined"
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: theme.palette.primary.main,
//                             borderWidth: 2
//                           }
//                         }
//                       }}
//                     />
//                   </motion.div>
                  
//                   <motion.div
//                     whileHover={{ y: -2 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <TextField
//                       fullWidth
//                       required
//                       name="email"
//                       label="Your Email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       error={!!formErrors.email}
//                       helperText={formErrors.email}
//                       variant="outlined"
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: theme.palette.primary.main,
//                             borderWidth: 2
//                           }
//                         }
//                       }}
//                     />
//                   </motion.div>
//                 </Box>
                
//                 <Box sx={{ mb: 3 }}>
//                   <motion.div
//                     whileHover={{ y: -2 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <TextField
//                       fullWidth
//                       required
//                       name="subject"
//                       label="Subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       error={!!formErrors.subject}
//                       helperText={formErrors.subject}
//                       variant="outlined"
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: theme.palette.primary.main,
//                             borderWidth: 2
//                           }
//                         }
//                       }}
//                     />
//                   </motion.div>
//                 </Box>
                
//                 <Box sx={{ mb: 4 }}>
//                   <motion.div
//                     whileHover={{ y: -2 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <TextField
//                       fullWidth
//                       required
//                       name="message"
//                       label="Your Message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       error={!!formErrors.message}
//                       helperText={formErrors.message}
//                       variant="outlined"
//                       multiline
//                       rows={6}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.Mui-focused fieldset': {
//                             borderColor: theme.palette.primary.main,
//                             borderWidth: 2
//                           }
//                         }
//                       }}
//                     />
//                   </motion.div>
//                 </Box>
                
//                 <Box sx={{ 
//                   display: 'flex', 
//                   justifyContent: 'flex-end'
//                 }}>
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//                   >
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       size="large"
//                       endIcon={!loading && <SendIcon />}
//                       disabled={loading}
//                       sx={{ 
//                         borderRadius: 2,
//                         px: 5,
//                         py: 1.5,
//                         minWidth: 180,
//                         fontSize: '1rem',
//                         fontWeight: 600,
//                         boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
//                         '&:hover': {
//                           boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
//                         }
//                       }}
//                     >
//                       {loading ? (
//                         <CircularProgress size={24} color="inherit" />
//                       ) : (
//                         'Send Message'
//                       )}
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </Box>
//             </Card>
//           </motion.div>
//         </Box>
//       </Container>
      
//       <AnimatePresence>
//         {snackbar.open && (
//           <Snackbar 
//             open={snackbar.open} 
//             autoHideDuration={6000} 
//             onClose={handleCloseSnackbar}
//             anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//             sx={{ 
//               bottom: { xs: 24, sm: 24 } 
//             }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//             >
//               <Alert 
//                 onClose={handleCloseSnackbar} 
//                 severity={snackbar.severity}
//                 sx={{ 
//                   boxShadow: theme.shadows[6],
//                   alignItems: 'center',
//                   borderRadius: 2
//                 }}
//               >
//                 {snackbar.message}
//               </Alert>
//             </motion.div>
//           </Snackbar>
//         )}
//       </AnimatePresence>
//     </Box>
//   );
// };

// export default ContactSection;

import { useState, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton,
  CircularProgress,
  Tooltip,
  Divider,
  alpha
} from '@mui/material';
import { 
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
  LinkedIn,
  GitHub,
  Twitter
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactInfoCard = ({ icon, title, content, link, linkType, delay = 0 }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        bgcolor: alpha(theme.palette.primary.main, 0.05),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        transition: 'all 0.3s ease',
        height: '100%',
        '&:hover': {
          bgcolor: alpha(theme.palette.primary.main, 0.08),
          borderColor: alpha(theme.palette.primary.main, 0.3),
          transform: 'translateY(-3px)'
        }
      }}>
        <Box
          sx={{
            mr: { xs: 2, sm: 3 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 48, sm: 56 },
            height: { xs: 48, sm: 56 },
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: 'primary.main',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography 
            variant="subtitle1" 
            component="h3" 
            sx={{ 
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 0.5,
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            {title}
          </Typography>
          {link ? (
            <Typography 
              component="a" 
              href={linkType === 'email' ? `mailto:${link}` : link}
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'block',
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              {content}
            </Typography>
          ) : (
            <Typography color="text.secondary" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
              {content}
            </Typography>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

const ContactSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Required';
    if (!formData.email.trim()) {
      errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email';
    }
    if (!formData.subject.trim()) errors.subject = 'Required';
    if (!formData.message.trim()) errors.message = 'Required';
    if (formData.message.trim().length < 20) errors.message = 'Min 20 chars';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      await emailjs.sendForm(
        'service_d14029k',
        'portfolio_template',
        formRef.current,
        'U37jbX_QjxSHyKc4z'
      );
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  return (
    <Box 
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        background: theme.palette.background.default,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 6 },
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography 
              variant="overline" 
              component="p"
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600, 
                letterSpacing: 1.5,
                mb: 2,
                display: 'inline-block',
                px: 2,
                py: 1,
                borderRadius: 4,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                fontSize: { xs: '0.7rem', sm: '0.75rem' }
              }}
            >
              CONTACT ME
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography 
              variant="h2" 
              component="h2"
              sx={{ 
                fontWeight: 800, 
                mb: 3,
                fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
                lineHeight: 1.2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              Let's Build Something Amazing
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography 
              variant="subtitle1"
              color="text.secondary"
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </Typography>
          </motion.div>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1.5fr'
            },
            gap: { xs: 3, md: 4 },
            alignItems: 'stretch'
          }}
        >
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ height: '100%' }}
          >
            <Card 
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                height: '100%'
              }}
            >
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.text.primary,
                  fontSize: { xs: '1.3rem', sm: '1.5rem' }
                }}
              >
                Contact Details
              </Typography>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: { xs: 2, sm: 3 },
                mb: 3
              }}>
                <ContactInfoCard 
                  icon={<EmailIcon color="primary" fontSize={isMobile ? "medium" : "large"} />}
                  title="Email"
                  content="workofdhanu@gmail.com"
                  link="workofdhanu@gmail.com"
                  linkType="email"
                  delay={0.1}
                />
                
                <ContactInfoCard 
                  icon={<PhoneIcon color="primary" fontSize={isMobile ? "medium" : "large"} />}
                  title="Phone"
                  content="+91 9398263767"
                  link="tel:+919398263767"
                  delay={0.2}
                />
                
                <ContactInfoCard 
                  icon={<LocationIcon color="primary" fontSize={isMobile ? "medium" : "large"} />}
                  title="Location"
                  content="Nagari, Andhra Pradesh"
                  delay={0.3}
                />
              </Box>
              
              <Divider sx={{ my: 3 }} />
              
              <Box>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                >
                  Follow Me
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1.5,
                  flexWrap: 'wrap'
                }}>
                  <Tooltip title="LinkedIn" arrow>
                    <motion.div
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href="https://www.linkedin.com/in/dhanush-j-ba92b8165"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white'
                          },
                        }}
                        size={isMobile ? "small" : "medium"}
                      >
                        <LinkedIn fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </motion.div>
                  </Tooltip>
                  
                  <Tooltip title="GitHub" arrow>
                    <motion.div
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href="https://github.com/dhanush-1415"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white'
                          },
                        }}
                        size={isMobile ? "small" : "medium"}
                      >
                        <GitHub fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </motion.div>
                  </Tooltip>
                  
                  <Tooltip title="Twitter" arrow>
                    <motion.div
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href="#"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white'
                          },
                        }}
                        size={isMobile ? "small" : "medium"}
                      >
                        <Twitter fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </motion.div>
                  </Tooltip>
                </Box>
              </Box>
            </Card>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ height: '100%' }}
          >
            <Card 
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                borderRadius: 4,
                bgcolor: 'background.paper',
                border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                height: '100%'
              }}
            >
              <Typography 
                variant="h5" 
                component="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.text.primary,
                  fontSize: { xs: '1.3rem', sm: '1.5rem' }
                }}
              >
                Send a Message
              </Typography>
              
              <Box 
                component="form" 
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: '1fr 1fr'
                    },
                    gap: { xs: 2, sm: 3 },
                    mb: 2
                  }}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TextField
                      fullWidth
                      required
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!formErrors.name}
                      helperText={formErrors.name}
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                            borderWidth: 2
                          }
                        }
                      }}
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TextField
                      fullWidth
                      required
                      name="email"
                      label="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                            borderWidth: 2
                          }
                        }
                      }}
                    />
                  </motion.div>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TextField
                      fullWidth
                      required
                      name="subject"
                      label="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!formErrors.subject}
                      helperText={formErrors.subject}
                      variant="outlined"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                            borderWidth: 2
                          }
                        }
                      }}
                    />
                  </motion.div>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TextField
                      fullWidth
                      required
                      name="message"
                      label="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!formErrors.message}
                      helperText={formErrors.message}
                      variant="outlined"
                      multiline
                      rows={isMobile ? 4 : 6}
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main,
                            borderWidth: 2
                          }
                        }
                      }}
                    />
                  </motion.div>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end'
                }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size={isMobile ? "medium" : "large"}
                      endIcon={!loading && <SendIcon />}
                      disabled={loading}
                      sx={{ 
                        borderRadius: 2,
                        px: 4,
                        py: 1,
                        minWidth: 150,
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                        }
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </Card>
          </motion.div>
        </Box>
      </Container>
      
      <AnimatePresence>
        {snackbar.open && (
          <Snackbar 
            open={snackbar.open} 
            autoHideDuration={6000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            sx={{ 
              bottom: { xs: 16, sm: 24 } 
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <Alert 
                onClose={handleCloseSnackbar} 
                severity={snackbar.severity}
                sx={{ 
                  boxShadow: theme.shadows[6],
                  alignItems: 'center',
                  borderRadius: 2,
                  width: '100%'
                }}
              >
                {snackbar.message}
              </Alert>
            </motion.div>
          </Snackbar>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ContactSection;