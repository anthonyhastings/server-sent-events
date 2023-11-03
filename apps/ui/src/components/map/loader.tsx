import { type PropsWithChildren } from 'react';
import { Wrapper as GoogleMapsWrapper } from '@googlemaps/react-wrapper';

type MapLoaderProps = PropsWithChildren<{
  /** API Key for the maps project */
  apiKey: string;
}>;

export const MapLoader = ({ apiKey, children }: MapLoaderProps) => {
  return (
    <GoogleMapsWrapper apiKey={apiKey} libraries={['marker']}>
      {children}
    </GoogleMapsWrapper>
  );
};
