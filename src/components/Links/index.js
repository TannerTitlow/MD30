import React from "react";
import {
  LinksContainer,
  LinksH1,
  LinksWrapper,
  LinksCard,
  LinksIcon,
  LinksH2Dark,
  LinksPDark,
  LinksH2Light,
  LinksPLight,
  LinksBanner
} from "./LinksElements";

const Links = (linksData) => {
  const rows = [];
  for (let i = 0; i < linksData.items.length; i++) {
    rows.push(
      <LinksCard key={i}
        onClick={() =>
          window.open(linksData.items[i].link, "_blank")
        }
        style={{ backgroundImage: `url(${linksData.items[i].img})` }}
      >
        <LinksBanner>
          {
            linksData.items[i].darkText ? (
              <LinksH2Dark>{linksData.items[i].title}</LinksH2Dark>
            ) : (
              <LinksH2Light>{linksData.items[i].title}</LinksH2Light>
            )
          }
        </LinksBanner>
      </LinksCard>
    );
  }
  return (
    <LinksContainer id={linksData.id}>
      <LinksH1>{linksData.title}</LinksH1>
      <LinksWrapper>
        {rows}
      </LinksWrapper>
    </LinksContainer>
  );
};

export default Links;