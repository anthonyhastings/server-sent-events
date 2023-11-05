import { useEffect } from 'react';
import { useMapContext } from '@/components/map/context';
import { type LatLng } from 'types';
import truckIcon from './truck.svg';
import './marker.css';

type MarkerProps = {
  /** Center of the marker */
  center: LatLng;
};

export const Marker = ({ center }: MarkerProps) => {
  const { mapInstance } = useMapContext();

  useEffect(() => {
    const markerIcon = document.createElement('img');
    markerIcon.src = truckIcon;
    markerIcon.style.display = 'block';
    markerIcon.style.width = '45px';
    markerIcon.classList.add('animation-wobble');

    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      content: markerIcon,
      map: mapInstance,
      position: center,
    });

    return () => {
      marker.map = null;
    };
  }, [center, mapInstance]);

  return null;
};
