import { ReactElement, useEffect } from "react";
import { MapContainerProps, Marker, useMapEvents } from "react-leaflet";
import { icon } from "leaflet";
import Map from "core/components/Map";
import { LatLng } from "features/dashboard/types";

const Icon = icon({
  iconUrl: "images/marker-icon.png",
  iconSize: [35, 55],
});

type FormMapProps = {
  onClick: (location: LatLng) => void;
  location: LatLng;
};

const FormMap = ({ onClick, location }: FormMapProps): ReactElement => {
  const map = useMapEvents({
    click: ({ latlng }) => {
      onClick(new LatLng(latlng.lat, latlng.lng));
    },
  });

  useEffect(() => {
    map.flyTo([location.latitude, location.longitude]);
  }, [location, map]);

  return (
    <>
      {location && (
        <Marker
          icon={Icon}
          position={[location.latitude, location.longitude]}
        />
      )}
    </>
  );
};

export default ({
  onClick,
  location,
  ...rest
}: MapContainerProps & FormMapProps) => (
  <Map
    style={{ width: "100%" }}
    center={[location.latitude, location.longitude]}
    {...rest}
  >
    <FormMap location={location} onClick={onClick} />
  </Map>
);
