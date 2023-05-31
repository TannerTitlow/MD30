import React, { useState, useEffect } from "react";
import LogoRound from "../../images/logo-round.png";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  LogoImg,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnExtLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              <LogoImg src={LogoRound} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars color="orange" />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="hotel"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Hotel
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="excursions"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Excursions
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="beach-clubs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Beach Clubs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="food"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Food
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="bars"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Bars
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="night-clubs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Night Clubs
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnExtLink href="https://posh.vip/e/mdx30" target="_blank">RSVP</NavBtnExtLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
