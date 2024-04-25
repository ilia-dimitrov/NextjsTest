import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faChartSimple,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

import {
  CardLeft,
  CardRight,
  CardTitle,
  CardDescription,
  CardIcon,
} from "./elements";

const getIcon = (iconName) => {
  switch (iconName) {
    case "faPenRuler":
      return faPenRuler;
    case "faChartSimple":
      return faChartSimple;
    case "faPeopleArrows":
      return faPeopleArrows;
    default:
      return faPenRuler;
  }
};

const Card = ({ title, description, icon }) => {
  const iconToUse = getIcon(icon);

  return (
    <CardLeft>
      <CardIcon>
        <FontAwesomeIcon icon={iconToUse} />
      </CardIcon>
      <CardRight>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardRight>
    </CardLeft>
  );
};

export default Card;
