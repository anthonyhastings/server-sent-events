import { useEffect } from 'react';
import { useMapContext } from './context';
import { type LatLng } from 'types';
import truckIcon from './truck.svg';

type MarkerProps = {
  /** Center of the marker */
  center: LatLng;
};

export const Marker = ({ center }: MarkerProps) => {
  const { mapInstance } = useMapContext();

  useEffect(() => {
    console.log('Marker::useEffect', mapInstance);

    const marker = new window.google.maps.Marker({
      icon: truckIcon,
      map: mapInstance,
      position: center,
    });

    return () => {
      console.log('Marker::useEffect -- Cleanup');
      marker.setMap(null);
    };
  }, [center, mapInstance]);

  return null;
};
