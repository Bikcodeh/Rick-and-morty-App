import React from "react";
import { Location } from "../../interfaces";
import styled from "@emotion/styled";
import './styles.css';

interface Props {
  location: Location;
  onItemClick: (ids: string[]) => void;
}

const InfoContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

const DivWrapContent = styled.div`
    display: inline-block;
    margin-left: 4px;
`;

export const CardLocation: React.FC<Props> = ({ location, onItemClick }) => {
  const date = new Date(location.created).toLocaleDateString('es-ES');
  return (
    <div className="cardLocation" onClick={() => onItemClick(location.residents)}>
      <InfoContainer>
        <p>Name: <b>{location.name}</b></p>
      </InfoContainer>

      <InfoContainer>
        <img src="assets/icons/types.png" width={30} height={30} /><DivWrapContent>Type: {location.type}</DivWrapContent>
      </InfoContainer>

      <InfoContainer>
        <img src="assets/icons/dimensions.png" width={30} height={30} /><DivWrapContent>Dimension: {location.dimension}</DivWrapContent>
      </InfoContainer>

      <InfoContainer>
        <img src="assets/icons/calendar.png" width={30} height={30} /> <DivWrapContent>Created at: {date}</DivWrapContent>
      </InfoContainer>
    </div>
  )
}
