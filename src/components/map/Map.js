import React from 'react'
import { Wrapper } from './Map.styles'
import icon from 'components/iconLocation/IconLocation'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Map = () => {
    const position = [51.505, -0.09]
  return (
    
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: "100%", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
          </MapContainer>
    
  )
}

export default Map