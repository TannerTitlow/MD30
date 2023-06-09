import React from "react";
import { Button, LinkButton } from "../ButtonElements";
import StepsBg from "../../images/white-gradient.jpg";
import {
  InfoContainer,
  InfoContainerAbout,
  InfoContainerSteps,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TextWrapperSteps,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  BtnWrapCentered,
  ImgWrap,
  ImgWrapLogistics,
  Img,
  InfoContainerLogistics,
  Overlay,
  InfoWrapperLogistics,
  InfoRowLogistics,
} from "./InfoElements";

export const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  toSection,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={toSection}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export const ExtLinkSection = ({
  lightBg,
  backgroundImage,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  link,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  var text = (
    <Column1>
      <TextWrapper>
        <TopLine>{topLine}</TopLine>
        <Heading lightText={lightText}>{headline}</Heading>
        <Subtitle darkText={darkText}>{description}</Subtitle>
        <BtnWrap>
          <LinkButton
            onClick={() => {
              id === "about"
                ? window.location.href = link
                : window.open(
                  link,
                  "_blank"
                );
            }}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            {buttonLabel}
          </LinkButton>
          {id === "closing" ? (
            <>
              <LinkButton
                margin={true}
                onClick={() => {
                  window.location.href = "/logistics";
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
              >
                Logistics
              </LinkButton>
              <LinkButton
                margin={true}
                onClick={() => {
                  window.location.href = "/faq";
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
              >
                FAQ
              </LinkButton>
            </>
          ) : (
            <></>
          )}
        </BtnWrap>
      </TextWrapper>
    </Column1>
  );

  var image = img ? (
    <Column2>
      <ImgWrap>
        <Img src={img} alt={alt} />
      </ImgWrap>
    </Column2>
  ) : (
    <></>
  );

  return id === "about" ? (
    <>
      <InfoContainerAbout lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            {imgStart ? image : text}
            {imgStart ? text : image}
          </InfoRow>
        </InfoWrapper>
      </InfoContainerAbout>
    </>
  ) : (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            {imgStart ? image : text}
            {imgStart ? text : image}
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export const InfoSectionSteps = () => {
  return (
    <InfoContainerSteps backgroundImage={StepsBg} id="steps">
      <InfoWrapper>
        <InfoRow>
          <TextWrapperSteps>
            <TopLine>Step 1</TopLine>
            <Heading lightText={false}>Get the lowdown</Heading>
            <Subtitle darkText={true}>Before making any moves, bookings, etc. look over the information in the Logistics page so you know what you're signing up for.</Subtitle>
            <BtnWrapCentered>
              <LinkButton
                onClick={() => {
                  window.location.href = "/logistics";
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={0}
                dark={0}
                dark2={0}
              >
                Logistics
              </LinkButton>
            </BtnWrapCentered>
          </TextWrapperSteps>
          <TextWrapperSteps>
            <TopLine>Step 2</TopLine>
            <Heading lightText={false}>Get on the list</Heading>
            <Subtitle darkText={true}>After looking over the logistics of the trip and browsing the amazing places and plans below, it's time to lock in your spot. Hit the link below and start the countdown.</Subtitle>
            <BtnWrapCentered>
              <LinkButton
                onClick={() => {
                  window.open(
                    "https://posh.vip/e/mdx30",
                    "_blank"
                  );
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={0}
                dark={0}
                dark2={0}
              >
                RSVP
              </LinkButton>
            </BtnWrapCentered>
          </TextWrapperSteps>
          <TextWrapperSteps>
            <TopLine>Step 3</TopLine>
            <Heading lightText={false}>Get in the know</Heading>
            <Subtitle darkText={true}>Once you've RSVP'd, check out the FAQ page to find answers to some lingering questions you might have.</Subtitle>
            <BtnWrapCentered>
              <LinkButton
                onClick={() => {
                  window.location.href = "/faq";
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={0}
                dark={0}
                dark2={0}
              >
                FAQ
              </LinkButton>
            </BtnWrapCentered>
          </TextWrapperSteps>
        </InfoRow>
      </InfoWrapper>
    </InfoContainerSteps>
  );
};

export const ImageSection = ({
  lightBg,
  backgroundImage,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  descriptionBullets,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {

  var bullets = descriptionBullets.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  var text = (
    <Column1>
      <TextWrapper>
        <TopLine lightBg={lightBg}>{topLine}</TopLine>
        <Heading lightText={lightText}>{headline}</Heading>
        <Subtitle darkText={darkText}>
          {description}<br />
          {bullets}
        </Subtitle>
      </TextWrapper>
    </Column1>
  );

  var image = (
    <Column2>
      <ImgWrapLogistics>
        <Img src={img} alt={alt} />
      </ImgWrapLogistics>
    </Column2>
  );

  return (
    <>
      <InfoContainerLogistics lightBg={lightBg} id={id} backgroundImage={backgroundImage}>
        <Overlay lightBg={lightBg} />
        <InfoWrapperLogistics>
          <InfoRowLogistics>
            {imgStart ? image : text}
            {imgStart ? text : image}
          </InfoRowLogistics>
        </InfoWrapperLogistics>
      </InfoContainerLogistics>
    </>
  );
};
