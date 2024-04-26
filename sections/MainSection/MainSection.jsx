import React from "react";
import Card from "../../collections/Card/Card";

import {
  MainSectionWrapper,
  MainTitle,
  SecondaryTitle,
  MainContainer,
  VideoContainer,
  CardContainer,
  StyledImage,
} from "./elements";

function MainSection({ mainSectionImage, title, subtitle, mainSectionProps }) {
  return (
    <MainSectionWrapper>
      <MainTitle>{title}</MainTitle>
      <SecondaryTitle>{subtitle}</SecondaryTitle>
      <MainContainer>
        <VideoContainer>
          <StyledImage src={mainSectionImage.src} alt={mainSectionImage.alt} />
        </VideoContainer>
        <CardContainer>
          {mainSectionProps.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </CardContainer>
      </MainContainer>
    </MainSectionWrapper>
  );
}

export default MainSection;
