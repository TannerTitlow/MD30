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
  NavPagesLinks,
  NavLogo,
  LogoImg,
  NavMenu,
  NavBtn,
  NavBtnExtLink
} from "./NavbarElements";
import data from "./data.json";

const Navbar = ({ toggle, light }) => {
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

  const navItems = [];
  for (let i = 0; i < data.length; i++) {
    if (window.location.pathname === "/") {
      navItems.push(
        <NavItem>
          <NavLinks
            key={i}
            to={data[i].id}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            light={light}
          >
            {data[i].name}
          </NavLinks>
        </NavItem>
      );
    }
    else {
      navItems.push(
        <NavItem>
          <NavPagesLinks
            key={i}
            href={"/#" + data[i].id}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            light={light}
          >
            {data[i].name}
          </NavPagesLinks>
        </NavItem>
      );
    }
  }
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
              {navItems}
            </NavMenu>
            <NavBtn>
              <NavBtnExtLink href="https://posh.vip/e/mdx30" target="_blank">RSVP</NavBtnExtLink>
            </NavBtn>
            <NavBtn>
              <NavBtnExtLink href="/logistics">Logistics</NavBtnExtLink>
            </NavBtn>
            <NavBtn>
              <NavBtnExtLink href="/faq">FAQ</NavBtnExtLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
