import { useQuery } from '@tanstack/react-query';
import { OrderSchema } from 'types';
import { envVars } from '@/env';

type UseFetchOrderArgs = {
  orderId: string;
};

export const useFetchOrder = ({ orderId }: UseFetchOrderArgs) => {
  return useQuery({
    queryKey: ['order', orderId] as const,
    queryFn: async () => {
      const response = await fetch(
        `${envVars.VITE_SERVICE_BASE_URL}/orders/${orderId}`,
      );

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      const responseData = await response.json();
      return OrderSchema.parse(responseData);
    },
  });
};
