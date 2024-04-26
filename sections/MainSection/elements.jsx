import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  ImageContainer,
} from "~/components";

export const MainSectionWrapper = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 50%;
  background-position-x: 28%;
  background-position-y: 63%;
`;
export const MainTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const SecondaryTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
  font-weight: 400;
  letter-spacing: 1.5px;
  padding-bottom: 50px;
`;

export const MainContainer = styled((props) => <SectionContainer {...props} />)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1000px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const VideoContainer = styled((props) => (
  <ImageContainer {...props} />
))``;

export const CardContainer = styled.div``;
