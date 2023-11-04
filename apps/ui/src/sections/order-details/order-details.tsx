import { RouteTracker } from '@/components/route-tracker';
import { useFetchOrder } from '@/hooks/use-fetch-order';

type OrderDetailsProps = {
  id: string;
};

export const OrderDetails = ({ id }: OrderDetailsProps) => {
  const orderQuery = useFetchOrder({ orderId: id });

  const isDelivered = orderQuery.data?.status === 'DELIVERED';
  const isOutForDelivery = Boolean(
    orderQuery.data?.status === 'PENDING' && orderQuery.data?.routeId,
  );

  if (orderQuery.isLoading) {
    return <h1>Please wait&hellip;</h1>;
  }

  if (isDelivered) {
    return <h1>Order Delivered!</h1>;
  }

  if (!isOutForDelivery) {
    return <h1>Scheduled for delivery: check back soon!</h1>;
  }

  return (
    <RouteTracker
      routeId={orderQuery.data?.routeId!}
      orderId={orderQuery.data?.id!}
    />
  );
};
