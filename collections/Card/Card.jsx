import React, { useState } from "react";
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
  CardIcon,
  IndividualCard,
  CardDescription,
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
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <IndividualCard onClick={handleCardClick} isActive={isActive}>
      <CardLeft>
        <CardIcon>
          <FontAwesomeIcon icon={iconToUse} />
        </CardIcon>
      </CardLeft>
      <CardRight>
        <CardTitle isActive={isActive}>{title}</CardTitle>
        <CardDescription dangerouslySetInnerHTML={{ __html: description }} />
      </CardRight>
    </IndividualCard>
  );
};

export default Card;
