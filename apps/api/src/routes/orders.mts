import { Router } from 'express';
import { z } from 'zod';
import { OrderSchema } from 'types';
import { exampleOrders, setExampleOrders } from '../data.mjs';
import { validateSchema } from '../validate-schema.mjs';

const OrderRequestSchema = z.object({
  body: OrderSchema.pick({ status: true }),
  params: OrderSchema.pick({ id: true }),
});

export const OrdersRouter = Router();

OrdersRouter.patch('/:id', validateSchema(OrderRequestSchema), (req, res) => {
  const orderIndex = exampleOrders.findIndex(
    (order) => order.id === req.params.id,
  );

  if (orderIndex === -1) return res.status(404).json({ error: 'Not found' });

  setExampleOrders(
    exampleOrders.map((order) => {
      if (order.id !== req.params.id) return order;

      return {
        ...order,
        ...(req.body.status && { status: req.body.status }),
      };
    }),
  );

  return res.json(exampleOrders[orderIndex]);
});
