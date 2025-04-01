import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
// import FeaturesSection from '../components/FeaturesSection';
// import ServicesSection from '../components/ServicesSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from   '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import { handleScrollAnimation, getCurrentSection } from '../utils/scrollUtils';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionIds = ['hero', 'about',  'skills', 'experience', 'projects', 'contact'];

  useEffect(() => {
    // Set up scroll event listeners for animations and active section tracking
    const handleScroll = () => {
      handleScrollAnimation();
      const currentSection = getCurrentSection(sectionIds, 100);
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Initialize animations
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Professional Next.js Application</title>
        <meta name="description" content="A professional Next.js application with Material UI featuring custom color palette and smooth navigation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout activeSection={activeSection}>
        <HeroSection id="hero" />
        <AboutSection id='about' />
        <SkillsSection id='skills' />
        <ExperienceSection id='experience' />
        <ProjectsSection id='projects' />
        {/* <FeaturesSection id="features" />
        <ServicesSection id="services" />
        <TestimonialsSection id="testimonials" /> */}
        <ContactSection id="contact" />
      </Layout>
    </>
  );
}
