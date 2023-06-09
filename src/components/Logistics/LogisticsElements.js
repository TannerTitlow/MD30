import styled from "styled-components";

export const LogisticsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      108deg,
      rgba(198, 109, 60, 1) 0%,
      rgba(255, 192, 94, 1) 100%
    );
`;

export const BackgroundGradient = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: linear-gradient(
        108deg,
        rgba(198, 109, 60, 1) 0%,
        rgba(255, 192, 94, 1) 100%
      );
    z-index: -1;
    width: 100%;
    height: 100%;
`;

export const HeroSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    padding: 24px 12px;
`;

export const HeroText = styled.h1`
    font-size: 64px;
    text-align: center;
    margin-top: 104px;
    margin-bottom: 24px;
    padding: 0 24px;
`;

export const HeroSubText = styled.p`
    font-size: 24px;
    text-align: center;
    margin: 24px auto;
    padding: 0 12px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 24px;

    @media screen and (max-width: 768px) {
        width: 100vw;
    }
`;

export const ImageTitle = styled.h1`
    font-size: 48px;
    text-align: center;
    margin: 24px 8px auto;
    padding: 0 12px;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 50vw;
    height: auto;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        max-width: 90vw;
    }
`;

export const FooterText = styled.p`
    font-size: 24px;
    text-align: center;
    max-width: 768px;
    margin: 24px auto;
    padding: 0 12px;
`;

export const LogisticsFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    padding: 24px 12px;
`;