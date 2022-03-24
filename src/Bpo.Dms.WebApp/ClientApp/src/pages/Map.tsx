import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function MyMap() {
  return (
    <MapContainer center={[21.030653 , 105.847130]} zoom={13} scrollWheelZoom={false} style={{height: "500px", width: "100%", zIndex: "10"}}>
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default React.memo(MyMap)