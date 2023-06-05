import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  LogisticsContainer,
  HeroSection,
  HeroText,
  HeroSubText,
} from './LogisticsElements';

const Logistics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LogisticsContainer>
        <HeroSection>
          <HeroText>Logistics</HeroText>
          <HeroSubText>
            Under Construction
          </HeroSubText>
        </HeroSection>
      </LogisticsContainer>
    </>
  );
};

export default Logistics;
