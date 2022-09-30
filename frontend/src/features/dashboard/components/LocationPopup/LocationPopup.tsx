import { ReactElement } from "react";
import { Popup } from "react-leaflet";
import * as Styled from "./styles";
import Container from "core/components/Container";
import { Location } from "features/dashboard/types";

type LocationPopupProp = Pick<Location, "locationType" | "name" | "logo"> & {
  onEditClick: () => void;
};

const LocationPopup = (prop: LocationPopupProp): ReactElement => {
  const { name, locationType, logo, onEditClick } = prop;

  return (
    <Popup>
      <Container flexDirection={"column"}>
        <Styled.Header>Location Details</Styled.Header>
        {logo && (
          <Styled.Logo
            src={`${process.env.NEXT_PUBLIC_STORAGE_SERVER}/${logo}`}
            alt={"logo"}
          />
        )}
        <Styled.Name>{name}</Styled.Name>
        <Styled.Type>{locationType}</Styled.Type>
        <Styled.Button onClick={onEditClick}>Edit</Styled.Button>
      </Container>
    </Popup>
  );
};

export default LocationPopup;
