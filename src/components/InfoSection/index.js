import React from "react";
import { Button, LinkButton } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  ImgWrapLogistics,
  Img,
  InfoContainerLogistics,
  Overlay,
  InfoWrapperLogistics,
  InfoRowLogistics,
} from "./InfoElements";
import PaymentPlanMobile from "../../images/payment-plan-mobile.png";

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
                  <LinkButton
                    onClick={() => {
                      window.open(
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
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
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

  // get the screen width
  var width = window.innerWidth;

  var image = width <= 768 && id === "payment-plan"
    ? (
      <Column2>
        <ImgWrapLogistics>
          <Img src={PaymentPlanMobile} alt={alt} />
        </ImgWrapLogistics>
      </Column2>
    )
    : (
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
