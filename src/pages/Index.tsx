
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import StorySection from '../components/home/StorySection';
import FeatureSection from '../components/home/FeatureSection';
import CallToAction from '../components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProducts />
      <StorySection />
      <FeatureSection />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
