import { Router } from 'express';
import { z } from 'zod';
import { RouteSchema } from 'types';
import { exampleRoute, setExampleRoute } from '../data.mjs';
import { validateSchema } from '../validate-schema.mjs';

const RouteRequestSchema = z.object({
  body: z.object({
    currentLatLng: RouteSchema.shape.currentLatLng.nullish(),
    currentOrderId: RouteSchema.shape.currentOrderId.nullish(),
  }),
  params: RouteSchema.pick({ id: true }),
});

export const RoutesRouter = Router();

RoutesRouter.patch('/:id', validateSchema(RouteRequestSchema), (req, res) => {
  if (req.params.id !== exampleRoute.id) {
    return res.status(404).json({ error: 'Not found' });
  }

  setExampleRoute({
    ...exampleRoute,
    ...('currentOrderId' in req.body && {
      currentOrderId: req.body.currentOrderId,
    }),
    currentLatLng:
      'currentLatLng' in req.body
        ? req.body.currentLatLng
        : exampleRoute.currentLatLng,
  });

  return res.json(exampleRoute);
});
