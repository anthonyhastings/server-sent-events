import { createContext, useContext } from 'react';
import { type LatLng } from 'types';

type MapContextType = {
  mapInstance: google.maps.Map | null;
  centerMap: (latlng: LatLng) => void;
};

export const MapContext = createContext<MapContextType>({
  mapInstance: null,
  centerMap: () => {},
});

export const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) throw new Error('Missing map context');
  return context;
};
