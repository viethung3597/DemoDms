import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, SVGOverlay } from 'react-leaflet'
import L, { divIcon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { getStores } from '@/services/dms/Stores'
import markerIcon from 'leaflet/dist/images/marker.png';

function MyMap() {
  const [data, setData] = useState([])
  useEffect(async () => {
    const data = await getStores()

    setData(data);
  }, [])

  const markerIconConst = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
  });

  console.log(data);
  
  return (
    <MapContainer center={[21.030653 , 105.847130]} zoom={2} scrollWheelZoom={false} style={{height: "500px", width: "100%", zIndex: "10"}}>
      {data.map((item:any) => {
        // console.log(item.location);
        
        return (
          <div key={item.id}>
            <TileLayer
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={markerIconConst} position={[item.location.lat, item.location.lng]}>
              <Popup>
                {item.name}
              </Popup>
            </Marker>
          </div>
        )
      })}
      {/* <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay> */}
    </MapContainer>
  )
}

export default React.memo(MyMap)