import React from 'react';
import Hero from '../components/Hero';
import ScrollAnimation from '../components/ScrollAnimation';
import InteractiveModel from '../components/InteractiveModel';
import Gallery from '../components/Gallery';
import PhotoCollage from '../components/PhotoCollage';
import AISection from '../components/AISection';
import Features from '../components/Features';
import ServiceSection from '../components/ServiceSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollAnimation />
      <InteractiveModel />
      <Gallery />
      <PhotoCollage />
      <AISection />
      <Features />
      <ServiceSection />
    </>
  );
};

export default Home;