import EventEmitter from 'node:events';
import { Router } from 'express';
import { z } from 'zod';
import { type Route, RouteSchema } from 'types';
import { exampleRoute, setExampleRoute } from '../data.mjs';
import { validateSchema } from '../validate-schema.mjs';

const RouteEvents = new EventEmitter();

RouteEvents.on('newListener', (eventName: string, listener: () => void) => {
  console.log('RouteEvents::newListener', eventName, listener);
});

RouteEvents.on('removeListener', (eventName: string, listener: () => void) => {
  console.log('RouteEvents::removeListener', eventName, listener);
});

const RouteFetchRequestSchema = z.object({
  params: RouteSchema.pick({ id: true }),
});

const RoutePatchRequestSchema = z.object({
  body: z.object({
    currentLatLng: RouteSchema.shape.currentLatLng.nullish(),
    currentOrderId: RouteSchema.shape.currentOrderId.nullish(),
  }),
  params: RouteSchema.pick({ id: true }),
});

export const RoutesRouter = Router();

RoutesRouter.patch(
  '/:id',
  validateSchema(RoutePatchRequestSchema),
  (req, res) => {
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

    // Emit the newly updated route to any listeners.
    RouteEvents.emit('routeUpdate', exampleRoute);

    return res.json(exampleRoute);
  },
);

RoutesRouter.get(
  '/:id',
  validateSchema(RouteFetchRequestSchema),
  (req, res) => {
    if (req.params.id !== exampleRoute.id) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(exampleRoute);
  },
);

RoutesRouter.get(
  '/:id/track',
  validateSchema(RouteFetchRequestSchema),
  (req, res) => {
    if (req.params.id !== exampleRoute.id) {
      return res.status(404).json({ error: 'Not found' });
    }

    console.log('GET /:id/track -- connection opened');
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    // Server-Sent Events is a text-based transport so data must be stringified.
    // Messages are delimited with a double line break.
    const sendRouteUpdate = (route: Route) => {
      res.write(`data: ${JSON.stringify(route)}\n\n`);
    };

    // Sending an initial event to the client.
    sendRouteUpdate(exampleRoute);

    RouteEvents.on('routeUpdate', sendRouteUpdate);
    res.on('close', () => {
      console.log('GET /:id/track -- connection closed');
      RouteEvents.off('routeUpdate', sendRouteUpdate);
    });
  },
);
