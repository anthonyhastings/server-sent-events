import { useState } from 'react';
import { envVars } from './env';
import { MapLoader, Map, useMapContext, Marker } from './components/map';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

const RouteTracker = () => {
  return (
    <>
      <h1>Route Tracker</h1>
      <MapLoader apiKey={envVars.VITE_MAPS_API_KEY}>
        <Map
          initialCenter={{ lat: 54.662234, lng: -5.668236 }}
          initialZoom={14}
        >
          <RouteSync />
        </Map>
      </MapLoader>
    </>
  );
};

const RouteSync = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 36.146747,
    lng: -80.081358,
  });

  const mapContext = useMapContext();

  console.log('RouteSync::mapContext', mapContext);
  // TODO: Fetch Map Context.
  // TODO: Setup EventSource call and useEffect to update map center. Pipe updated latlngs into <Marker /> which is child of <Map />
  // return <Marker center={{ lat: 54.662234, lng: -5.668236 }} />;
  return (
    <>
      <Marker center={markerPosition} />
      <button
        onClick={() =>
          mapContext.centerMap({ lat: 36.146747, lng: -80.081358 })
        }
      >
        Center map somewhere else
      </button>
      <button
        onClick={() => {
          setMarkerPosition({ lat: 36.146747, lng: -80.081858 });
        }}
      >
        Slightly move marker
      </button>
    </>
  );
};
