import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarPagesLink,
  SidebarExtLink,
  SideBtnWrap,
} from "./SidebarElements";
import data from "./data.json";

const Sidebar = ({ isOpen, toggle }) => {
  const sidebarItems = [];
  for (let i = 0; i < data.length; i++) {
    if (window.location.pathname === "/") {
      sidebarItems.push(
        <SidebarLink
          key={i}
          to={data[i].id}
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          {data[i].name}
        </SidebarLink>
      );
    }
    else {
      sidebarItems.push(
        <SidebarPagesLink
          key={i}
          href={"/#" + data[i].id}
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          {data[i].name}
        </SidebarPagesLink>
      );
    }
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {sidebarItems}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarExtLink href="https://posh.vip/e/mdx30" target="_blank">RSVP</SidebarExtLink>
          <SidebarExtLink href="/logistics">Logistics</SidebarExtLink>
          <SidebarExtLink href="/faq">FAQ</SidebarExtLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
