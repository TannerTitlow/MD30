import React from "react";
import { FaInstagram } from "react-icons/fa";
import { ReactComponent as Venmo } from "../../icons/venmo-icon.svg";
import LogoRound from "../../images/logo-round.png";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  LogoImg,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                target="_blank"
                aria-label="Instagram"
                href="//www.instagram.com/matthew_donaldson/"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                target="_blank"
                aria-label="Venmo"
                href="//venmo.com/?txn=pay&audience=private&recipients=Matthew_Donaldson&note=MDX30%F0%9F%8C%85"
              >
                <Venmo width="5rem" inner-fill="1a1a1a" />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
