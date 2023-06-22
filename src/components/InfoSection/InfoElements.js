import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? `url(${require("../../images/white-sand.jpg")})` : `url(${require("../../images/black-sand.jpg")})`)} no-repeat center center;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoContainerAbout = styled.div`
  color: #fff;
  background: url(${require("../../images/jungle.jpg")}) no-repeat center center;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoContainerSteps = styled.div`
  color: #fff;
  background: url(${require("../../images/white-gradient.jpg")}) no-repeat center center;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoContainerLogistics = styled.div`
  color: #fff;
  position: relative;
  background: ${({ backgroundImage }) => `url(${backgroundImage})`} no-repeat center center;
  background-size: cover;
  z-index: -2;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ lightBg }) => (
    lightBg
      ? `linear-gradient(
      108deg,
      rgba(198, 109, 60, 1) 0%,
      rgba(255, 192, 94, 1) 100%
    )`
      : "rgba(0, 0, 0, .75)"
  )};
  z-index: -1;
`;

export const InfoWrapper = styled.div`
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  max-width: 95vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoWrapperLogistics = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  max-width: 95vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const InfoRowLogistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const TextWrapperSteps = styled.div`
  max-width: 540px;
  padding: 30px 60px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const TextWrapperLogistics = styled.div`
  max-width: 45vw;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#fff" : "#7c7c7c")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const BtnWrapCentered = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const ImgWrapLogistics = styled.div`
  max-width: 50vw;

  @media screen and (max-width: 768px) {
    max-width: 95vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  padding-right: 0;
`;
