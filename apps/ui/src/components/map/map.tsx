import { type PropsWithChildren, useEffect, useState, useRef } from 'react';
import { type LatLng } from 'types';
import { MapContext } from './context';

type MapProps = PropsWithChildren<{
  /** Inital center of the map */
  initialCenter: LatLng;
}>;

export const Map = ({ children, initialCenter }: MapProps) => {
  const mapElement = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapElement.current || mapInstance instanceof google.maps.Map) return;

    setMapInstance(
      new window.google.maps.Map(mapElement.current, {
        center: initialCenter,
        mapId: 'DEMO_MAP_ID', // Advanced markers require a Map ID.
        mapTypeControl: false,
        streetViewControl: false,
        zoom: 15,
      }),
    );
  }, [mapInstance, initialCenter]);

  return (
    <MapContext.Provider value={{ mapInstance }}>
      <div ref={mapElement} id="map" style={{ height: 300, width: '100%' }} />
      {mapInstance && children}
    </MapContext.Provider>
  );
};
