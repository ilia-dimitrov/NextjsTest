import React from "react";
import Card from "../../collections/Card/Card";

import {
  MainSectionWrapper,
  MainTitle,
  SecondaryTitle,
  MainContainer,
  VideoContainer,
  CardContainer,
} from "./elements";

function MainSection({ title, subtitle, mainSectionProps }) {
  // console.log(mainSectionProps);
  return (
    <MainSectionWrapper>
      <MainTitle>{title}</MainTitle>
      <SecondaryTitle>{subtitle}</SecondaryTitle>
      <MainContainer>
        <VideoContainer></VideoContainer>
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
