import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Markerposition from "components/markerPosition/MarkerPosition";

const Map = ({ results }) => {
  return (
    <MapContainer
      center={[results.location.lat, results.location.lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markerposition results={results} />
    </MapContainer>
  );
};

export default Map;
