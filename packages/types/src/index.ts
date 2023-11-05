import { z } from 'zod';

export type Item = z.infer<typeof ItemSchema>;
export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export type Order = z.infer<typeof OrderSchema>;
export const OrderSchema = z.object({
  id: z.string(),
  routeId: z.string().nullable(),
  status: z.enum(['PENDING', 'DELIVERED']),
  items: z.array(ItemSchema),
});

export type LatLng = z.infer<typeof LatLngSchema>;
export const LatLngSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export type Route = z.infer<typeof RouteSchema>;
export const RouteSchema = z.object({
  id: z.string(),
  currentLatLng: LatLngSchema.nullable(),
  currentOrderId: z.string().nullable(),
});
