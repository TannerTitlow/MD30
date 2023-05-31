import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Image from "../../images/logo-round.png";

import Video from "../../videos/ocean-sunset-1920x1080-24fps.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroImg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroImg src={Image} alt="Logo" />
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
