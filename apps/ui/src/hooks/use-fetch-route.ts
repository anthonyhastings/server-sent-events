import { useQuery } from '@tanstack/react-query';
import { RouteSchema } from 'types';
import { envVars } from '@/env';

type UseFetchRouteArgs = {
  enabled?: boolean;
  routeId: string | null;
};

export const useFetchRoute = ({
  enabled = true,
  routeId,
}: UseFetchRouteArgs) => {
  return useQuery({
    enabled: Boolean(enabled && routeId),
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
