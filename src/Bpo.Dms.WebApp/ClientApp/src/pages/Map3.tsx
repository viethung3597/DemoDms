import * as React from 'react';
import ReactMapGL from '@goongmaps/goong-map-react';
// import '@goongmaps/goong-js/dist/goong-js.css';

function Map() {
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 400,
    latitude: 21.03072,
    longitude: 105.85239,
    zoom: 12
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      goongApiAccessToken={"pk.eyJ1IjoiaHBuYWNlMjMwMiIsImEiOiJjbDE0b2Q5enAwY3M0M2RrYXUzenhjaDJlIn0.TNfw5lGqMoE1Q8_x4BVa-g"}
    />
  );
}

export default React.memo(Map)