import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
// import '@mapbox-gl/dist/mapbox-gl.css'

const App = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 21.030653,
    longitude: 105.847130,
    zoom: 16
  })
  return (
    <div className="App">
      <div className="App-content">
        <ReactMapGL 
          {...viewport} 
          style={{ width: '100%', height: '500px', marginTop: '50px' }} 
          mapboxApiAccessToken="pk.eyJ1IjoiaHBuYWNlMjMwMiIsImEiOiJjbDE0b2Q5enAwY3M0M2RrYXUzenhjaDJlIn0.TNfw5lGqMoE1Q8_x4BVa-g"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(viewport:any) => setViewport(viewport)}
        >
          hello world
        </ReactMapGL>
      </div>
    </div>
  );
}

export default React.memo(App)