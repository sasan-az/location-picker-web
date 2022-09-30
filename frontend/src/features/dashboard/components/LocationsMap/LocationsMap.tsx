import { ReactElement } from "react";
import { Marker } from "react-leaflet";
import { icon } from "leaflet";
import useLocationMap from "features/dashboard/hooks/useLocationMap";
import * as Styled from "./styles";
import LocationPopup from "features/dashboard/components/LocationPopup";

const Icon = icon({
  iconUrl: "images/marker-icon.png",
  iconSize: [35, 55],
});

const LocationsMap = (): ReactElement => {
  const { initialLocation, isLoading, locations, handleEditClick } =
    useLocationMap();

  return (
    <>
      {!isLoading && (
        <Styled.Map
          center={[initialLocation.latitude, initialLocation.longitude]}
        >
          {locations?.map(
            ({ id, logo, latitude, longitude, name, locationType }) => (
              <Marker
                icon={Icon}
                key={id}
                position={[Number(latitude), Number(longitude)]}
              >
                <LocationPopup
                  name={name}
                  logo={logo}
                  locationType={locationType}
                  onEditClick={() => handleEditClick(id)}
                />
              </Marker>
            )
          )}
        </Styled.Map>
      )}
    </>
  );
};

export default LocationsMap;
