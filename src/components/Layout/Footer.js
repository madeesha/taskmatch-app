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
import { useTranslation } from 'react-i18next';

/**
 * Footer component with links and social media
 */
const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  // Footer sections configuration
  const footerSections = [
    {
      title: t('footer.sections.aboutUs.title'),
      links: [
        { label: t('footer.sections.aboutUs.links.ourStory'), href: '#' },
        { label: t('footer.sections.aboutUs.links.howItWorks'), href: '#' },
        { label: t('footer.sections.aboutUs.links.careers'), href: '#' },
        { label: t('footer.sections.aboutUs.links.press'), href: '#' },
      ],
    },
    {
      title: t('footer.sections.forTaskers.title'),
      links: [
        { label: t('footer.sections.forTaskers.links.whyTaskMatch'), href: '#' },
        { label: t('footer.sections.forTaskers.links.getStarted'), href: '#' },
        { label: t('footer.sections.forTaskers.links.successStories'), href: '#' },
        { label: t('footer.sections.forTaskers.links.safety'), href: '#' },
      ],
    },
    {
      title: t('footer.sections.forClients.title'),
      links: [
        { label: t('footer.sections.forClients.links.postTask'), href: '#' },
        { label: t('footer.sections.forClients.links.browseTaskers'), href: '#' },
        { label: t('footer.sections.forClients.links.guarantee'), href: '#' },
        { label: t('footer.sections.forClients.links.businessSolutions'), href: '#' },
      ],
    },
    {
      title: t('footer.sections.support.title'),
      links: [
        { label: t('footer.sections.support.links.helpCenter'), href: '#' },
        { label: t('footer.sections.support.links.contactUs'), href: '#' },
        { label: t('footer.sections.support.links.safetyGuidelines'), href: '#' },
        { label: t('footer.sections.support.links.trustQuality'), href: '#' },
      ],
    },
  ];

  // Social media icons
  const socialIcons = [
    { icon: <Facebook />, name: t('footer.socialMedia.facebook'), href: '#' },
    { icon: <Twitter />, name: t('footer.socialMedia.twitter'), href: '#' },
    { icon: <Instagram />, name: t('footer.socialMedia.instagram'), href: '#' },
    { icon: <LinkedIn />, name: t('footer.socialMedia.linkedin'), href: '#' },
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
              {t('footer.logo')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                maxWidth: 350,
              }}
            >
              {t('footer.description')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
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
                      href={link.href}
                      underline="hover"
                      sx={{
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.label}
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
            {t('footer.legal.copyright', { year: new Date().getFullYear() })}
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" underline="hover" color="text.secondary">
              {t('footer.legal.privacyPolicy')}
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              {t('footer.legal.termsOfService')}
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              {t('footer.legal.cookies')}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;