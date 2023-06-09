import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroSection,
  HeroText,
  HeroSubText,
  FooterText,
  Footer
} from './LogisticsElements';
import {
  ImageSection
} from '../InfoSection';
import {
  itinerarySection,
  slushFundSection,
  paymentPlanSection
} from './Data';

const Logistics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection>
        <HeroText>Logistics</HeroText>
        <HeroSubText>
          We're thrilled to embark on this adventure together, and to make it even more enjoyable, we're setting up a slush fund.
          <br />
          Here's a breakdown of what to expect
        </HeroSubText>
      </HeroSection>
      <ImageSection {...itinerarySection} />
      <ImageSection {...slushFundSection} />
      <ImageSection {...paymentPlanSection} />
      <Footer>
        <FooterText>
          By contributing to the slush fund, we'll gradually accumulate the necessary funds, making our Tulum trip worry-free and unforgettable for everyone. Let's come together, share the expenses, and create lifelong memories!
        </FooterText>
      </Footer>
    </>
  );
};

export default Logistics;
