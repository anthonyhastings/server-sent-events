import { type PropsWithChildren, useEffect, useState, useRef } from 'react';
import { MapContext } from './context';
import { LatLng } from 'types';

type MapProps = PropsWithChildren<{
  /** Inital center of the map */
  initialCenter: LatLng;
  /** Initial zoom level of the map */
  initialZoom: number;
}>;

export const Map = ({ children, initialCenter, initialZoom }: MapProps) => {
  const mapElement = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapElement.current || mapInstance instanceof google.maps.Map) return;

    setMapInstance(
      new window.google.maps.Map(mapElement.current, {
        center: initialCenter,
        mapTypeControl: false,
        streetViewControl: false,
        zoom: initialZoom,
        zoomControl: false,
      }),
    );
  }, [mapInstance, initialCenter, initialZoom]);

  const centerMap = (newCenter: LatLng) => {
    mapInstance?.setCenter(newCenter);
  };

  return (
    <MapContext.Provider value={{ mapInstance, centerMap }}>
      <div ref={mapElement} id="map" style={{ height: 300 }} />
      {mapInstance && children}
    </MapContext.Provider>
  );
};
