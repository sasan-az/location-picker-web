import { ReactElement } from "react";
import { MapContainer, MapContainerProps, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (prop: MapContainerProps): ReactElement => {
  return (
    <MapContainer zoom={13} scrollWheelZoom={true} {...prop}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {prop.children}
    </MapContainer>
  );
};

export default Map;
