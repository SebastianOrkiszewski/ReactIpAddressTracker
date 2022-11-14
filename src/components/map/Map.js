import React from 'react'
import { Wrapper } from './Map.styles'
import icon from 'components/iconLocation/IconLocation'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Markerposition from 'components/markerPosition/MarkerPosition'

const Map = ({address} ) => {
    
  return (
    
        <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{height: "100%", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markerposition address={address} />
          </MapContainer>
    
  )
}

export default Map