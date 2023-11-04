import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Map } from '@/components/map';
import { Marker } from '@/components/marker';
import { envVars } from '@/env';
import { useFetchRoute } from '@/hooks/use-fetch-route';

type RouteTrackerProps = {
  orderId: string;
  routeId: string;
};

export const RouteTracker = ({ orderId, routeId }: RouteTrackerProps) => {
  const queryClient = useQueryClient();

  const routeQuery = useFetchRoute({ routeId });

  // Setting up EventSource after initial fetch and updating cache as messages are received.
  useEffect(() => {
    if (!routeQuery.isFetched) return;
    console.log('RouteTracker::useEffect -- isFetched -- setup');

    const eventSource = new EventSource(
      `${envVars.VITE_SERVICE_BASE_URL}/routes/${routeId}/track`,
    );

    eventSource.onmessage = function (event) {
      const parsedData = JSON.parse(event.data);
      console.log('EventSource::parsedData', parsedData);
      queryClient.setQueryData(['route', routeId], parsedData);
    };

    return () => {
      console.log('RouteTracker::useEffect -- isFetched -- teardown');
      eventSource.close();
    };
  }, [routeQuery.isFetched, routeId, queryClient]);

  // Invalidates order queries as the route changes (read: completes) orders.
  useEffect(() => {
    if (!routeQuery.isFetched) return;
    console.log('RouteTracker::useEffect -- current order changed');

    queryClient.invalidateQueries({
      queryKey: ['order', routeQuery.data?.currentOrderId].filter(Boolean),
    });
  }, [routeQuery.isFetched, routeQuery.data?.currentOrderId, queryClient]);

  if (orderId !== routeQuery.data?.currentOrderId) {
    return <h1>Your order is dispatched</h1>;
  }

  return (
    <Map initialCenter={routeQuery.data?.currentLatLng!}>
      <Marker center={routeQuery.data?.currentLatLng!} />
    </Map>
  );
};
