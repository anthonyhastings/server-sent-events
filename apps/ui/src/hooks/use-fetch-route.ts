import { useQuery } from '@tanstack/react-query';
import { RouteSchema } from 'types';
import { envVars } from '@/env';

type UseFetchRouteArgs = {
  routeId: string;
};

export const useFetchRoute = ({ routeId }: UseFetchRouteArgs) => {
  return useQuery({
    queryKey: ['route', routeId] as const,
    queryFn: async () => {
      const response = await fetch(
        `${envVars.VITE_SERVICE_BASE_URL}/routes/${routeId}`,
      );

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      const responseData = await response.json();
      return RouteSchema.parse(responseData);
    },
  });
};
