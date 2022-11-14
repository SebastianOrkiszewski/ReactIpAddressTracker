import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "components/iconLocation/IconLocation";

export default function Markerposition({ results }) {
  const position = useMemo(() => {
    return [results.location.lat, results.location.lng];
  }, [results.location.lat, results.location.lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup>This this is your location.</Popup>
      </Marker>
    </>
  );
}
