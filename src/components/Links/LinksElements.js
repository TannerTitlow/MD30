import styled from "styled-components";

export const LinksContainer = styled.div`
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060501;
`;

export const LinksWrapper = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 50px;
`;

export const LinksCard = styled.div`
  background: #fff;
  background-position: center center;
  background-size: 100%;
  position: relative;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 450px;
  min-width: 450px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    min-height: 350px;
    min-width: 350px;
  }

  @media screen and (max-width: 768px) {
    min-height: 300px;
    min-width: 300px;
  }
`;

export const LinksBanner = styled.div`
  position: absolute;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  bottom: 0;
  background:rgba(0,0,0,0.5);
  width: 100%;
`;

export const LinksIcon = styled.img`
  height: auto;
  width: 100%;
`;

export const LinksH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const LinksH2Dark = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const LinksPDark = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const LinksH2Light = styled.h2`
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const LinksPLight = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
`;
