import { createContext, useContext } from 'react';

type MapContextType = {
  mapInstance: google.maps.Map | null;
};

export const MapContext = createContext<MapContextType>({
  mapInstance: null,
});

export const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) throw new Error('Missing map context');
  return context;
};
