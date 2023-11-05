import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { envVars } from '@/env';
import { MapLoader } from '@/components/map';
import { CACHE_TIMES } from '@/constants/cache-times';
import { OrderDetails } from '@/sections/order-details';
import './app.css';

export const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: CACHE_TIMES.NORMAL,
          },
        },
      }),
  );

  return (
    <MapLoader apiKey={envVars.VITE_MAPS_API_KEY}>
      <QueryClientProvider client={queryClient}>
        <OrderDetails id={envVars.VITE_ORDER_ID} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MapLoader>
  );
};
