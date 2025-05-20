import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Link, 
  Divider, 
  useTheme 
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

/**
 * Footer component with links and social media
 */
const Footer = () => {
  const theme = useTheme();
  
  // Footer sections configuration
  const footerSections = [
    {
      title: 'About Us',
      links: ['Our Story', 'How It Works', 'Careers', 'Press'],
    },
    {
      title: 'For Taskers',
      links: ['Why TaskMatch', 'Get Started', 'Success Stories', 'Safety'],
    },
    {
      title: 'For Clients',
      links: ['Post a Task', 'Browse Taskers', 'TaskMatch Guarantee', 'Business Solutions'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Safety Guidelines', 'Trust & Quality'],
    },
  ];

  // Social media icons
  const socialIcons = [
    { icon: <Facebook />, name: 'Facebook' },
    { icon: <Twitter />, name: 'Twitter' },
    { icon: <Instagram />, name: 'Instagram' },
    { icon: <LinkedIn />, name: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Footer Logo and Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.main,
                mb: 2,
              }}
            >
              TaskMatch
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                maxWidth: 350,
              }}
            >
              Connect with trusted taskers to get your to-do list done.
              TaskMatch helps you find the right person for any task, big or small.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  aria-label={social.name}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                {section.links.map((link, linkIndex) => (
                  <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      underline="hover"
                      sx={{
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} TaskMatch. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" underline="hover" color="text.secondary">
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Terms of Service
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;