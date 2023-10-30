import { type Route, type Order } from 'types';

export let exampleRoute: Route = {
  id: 'route_TZJBdCAk0bP9OYHKpORG1',
  currentOrderId: 'order_v1mW3aplThhaaomHyLrPU',
  currentLatLng: {
    lat: 54.6497,
    lng: -5.713098,
  },
};

export const setExampleRoute = (newValue: Route) => {
  exampleRoute = newValue;
};

export let exampleOrders: Order[] = [
  {
    id: 'order_v1mW3aplThhaaomHyLrPU',
    items: [
      {
        id: 'item_OzvUYbUvK1xaJC3jqEhH2',
        name: 'Bicycle',
        price: 12999,
      },
    ],
    status: 'PENDING',
  },
  {
    id: 'order_2dVHSgjEltuWRWXAbL16S',
    items: [
      {
        id: 'item_2IW9mQuMdLrkJN0sDk2ZW',
        name: 'Trumpet',
        price: 6999,
      },
    ],
    status: 'PENDING',
  },
];

export const setExampleOrders = (newValue: Order[]) => {
  exampleOrders = newValue;
};
