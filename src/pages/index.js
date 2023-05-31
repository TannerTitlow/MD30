import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import {
  InfoSection,
  ExtLinkSection
} from '../components/InfoSection';
import {
  aboutSection,
  hotelSection,
  excursionsSection,
  beachClubsSection,
  foodSection,
  barsSection,
  nightClubsSection,
  closingSection
} from '../components/InfoSection/Data';
import Links from '../components/Links';
import {
  excursionsLinks,
  beachClubsLinks,
  foodLinks,
  barsLinks,
  nightClubLinks
} from "../components/Links/Data";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutSection} />
      <ExtLinkSection {...hotelSection} />
      <InfoSection {...excursionsSection} />
      <Links {...excursionsLinks} />
      <InfoSection {...beachClubsSection} />
      <Links {...beachClubsLinks} />
      <InfoSection {...foodSection} />
      <Links {...foodLinks} />
      <InfoSection {...barsSection} />
      <Links {...barsLinks} />
      <InfoSection {...nightClubsSection} />
      <Links {...nightClubLinks} />
      <ExtLinkSection {...closingSection} />
      <Footer />
    </>
  );
}

export default Home;
