
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import LocationSection from '../components/LocationSection';
import OpinionSection from '../components/OpinionSection';
import PartnersSection from '../components/PartnersSection';
import ApplicationsSection from '../components/ApplicationsSection';
import NewsSection from '../components/NewsSection';
import QuestionsSection from '../components/QuestionsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <ServicesSection />
      <LocationSection />
      <OpinionSection />
      <PartnersSection />
      <ApplicationsSection />
      <NewsSection />
      <QuestionsSection />
      <Footer />
    </div>
  );
};

export default Index;
