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
  background-position: 28% 63%;
  ${"" /* media query */}
  @media screen and (max-width: 1024px) {
    margin-top: 280px;
    background-size: 99%;
    background-position: 800% 23%;
  }
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
  ${"" /* media query */}
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const VideoContainer = styled((props) => (
  <ImageContainer {...props} />
))``;

export const CardContainer = styled.div``;
