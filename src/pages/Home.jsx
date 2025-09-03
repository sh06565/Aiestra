import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import HowItWorks from '../components/sections/HowItWorks';
import CoreBenefits from '../components/sections/CoreBenefits';
import Integrations from '../components/sections/Integrations';
import Security from '../components/sections/Security';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <CoreBenefits />
      <Integrations />
      <Security />
      <FAQ />
    </div>
  );
};

export default Home; 