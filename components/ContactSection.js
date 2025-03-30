import { useState, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const ContactInfoItem = ({ icon, title, content, link, linkType }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        mb: 4 
      }}
    >
      <Box
        sx={{
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: '50%',
          bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
          color: 'primary.main',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{ fontWeight: 600 }}
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
              '&:hover': {
                color: 'primary.main',
                textDecoration: 'underline',
              }
            }}
          >
            {content}
          </Typography>
        ) : (
          <Typography color="text.secondary">
            {content}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const ContactSection = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
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
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to your backend here
      
      // For demonstration, we'll just show a success message
      setSnackbar({
        open: true,
        message: 'Your message has been sent! We will get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form.',
        severity: 'error'
      });
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
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: theme.palette.mode === 'light' 
          ? '#FFFFFF' 
          : '#1A1A1A',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="fade-in">
          <Typography 
            variant="overline" 
            component="p"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600, 
              letterSpacing: 2,
              mb: 2
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              background: theme.palette.mode === 'light' 
                ? 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)' 
                : 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            color="textSecondary"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              fontWeight: 400,
              mb: 6
            }}
          >
            Have questions or need more information? Reach out to us and we'll get back to you as soon as possible.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
          gap: 6
        }}>
          <Box>
            <Card 
              className="fade-in"
              elevation={0}
              sx={{
                height: '100%',
                p: 2,
                borderRadius: 4,
                bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    mb: 4
                  }}
                >
                  Contact Information
                </Typography>
                
                <ContactInfoItem 
                  icon={<EmailIcon />}
                  title="Email"
                  content="contact@nextmui.com"
                  link="contact@nextmui.com"
                  linkType="email"
                />
                
                <ContactInfoItem 
                  icon={<PhoneIcon />}
                  title="Phone"
                  content="+1 (123) 456-7890"
                  link="tel:+11234567890"
                />
                
                <ContactInfoItem 
                  icon={<LocationOnIcon />}
                  title="Address"
                  content="123 Innovation Street, Tech City, TC 12345"
                />
                
                <Box sx={{ mt: 6, mb: 2 }}>
                  <Typography 
                    variant="body1"
                    sx={{ fontWeight: 500 }}
                  >
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', mt: 2, gap: 2 }}>
                    {/* Social Media Icons */}
                    {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                      <Box
                        key={social}
                        component="a"
                        href="#"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: theme.palette.mode === 'light' ? 'rgba(75, 0, 130, 0.08)' : 'rgba(147, 112, 219, 0.08)',
                          color: 'primary.main',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-3px)'
                          }
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {social === 'facebook' && (
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          )}
                          {social === 'twitter' && (
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          )}
                          {social === 'linkedin' && (
                            <>
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect x="2" y="9" width="4" height="12" />
                              <circle cx="4" cy="4" r="2" />
                            </>
                          )}
                          {social === 'instagram' && (
                            <>
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </>
                          )}
                        </svg>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          
          <Box>
            <Card 
              className="fade-in"
              elevation={0}
              sx={{
                height: '100%',
                p: 2,
                borderRadius: 4,
                bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.paper',
                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    mb: 4
                  }}
                >
                  Send Us a Message
                </Typography>
                
                <Box 
                  component="form" 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <Box sx={{ 
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3
                  }}>
                    <Box>
                      <TextField
                        fullWidth
                        required
                        id="name"
                        name="name"
                        label="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!formErrors.name}
                        helperText={formErrors.name}
                        variant="outlined"
                      />
                    </Box>
                    <Box>
                      <TextField
                        fullWidth
                        required
                        id="email"
                        name="email"
                        label="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                      <TextField
                        fullWidth
                        required
                        id="subject"
                        name="subject"
                        label="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!formErrors.subject}
                        helperText={formErrors.subject}
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                      <TextField
                        fullWidth
                        required
                        id="message"
                        name="message"
                        label="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!formErrors.message}
                        helperText={formErrors.message}
                        variant="outlined"
                        multiline
                        rows={6}
                      />
                    </Box>
                    <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        className="button-hover-effect"
                        sx={{ 
                          mt: 2,
                          borderRadius: 2,
                          px: 4,
                          py: 1.5
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
