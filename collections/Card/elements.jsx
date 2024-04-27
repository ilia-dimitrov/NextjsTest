import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph } from "~/components";

export const CardIcon = styled.span`
  font-size: 30px;
  opacity: 0.8;
`;

export const IndividualCard = styled.div`
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  display: flex;
  background-color: rgb(249, 249, 249);
  margin-top: 35px;
  margin-bottom: 35px;
  margin-left: 20px;
  border-radius: 8px;
  width: fit-content;

  &:hover {
    border-color: blue;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const CardRight = styled.div`
  min-height: 140px;
  padding-right: 25px;
  max-width: 300px;
  width: auto;
`;

export const CardTitle = styled(SectionInnerHeading).attrs(() => ({
  as: "h4",
}))`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  padding-top: 20px;
  color: black;
  transition: color 0.3s ease;

  ${IndividualCard}:hover & {
    color: blue;
    text-decoration: underline;
  }
`;

export const CardDescription = styled(SectionParagraph)`
  margin: 0;
  min-width: 300px;
`;
