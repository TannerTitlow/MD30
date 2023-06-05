import styled from "styled-components";

export const FaqContainer = styled.div`
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

export const FaqWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 24px;

    @media screen and (max-width: 768px) {
        width: 100vw;
    }
`;

export const FaqItem = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 24px;
`;

export const FaqHeader = styled.h2`
    color: #000;
`;

export const FaqBody = styled.p`
    color: #000;
    margin-top: 24px;
`;
