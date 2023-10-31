import express from 'express';
import cors from 'cors';
import { OrdersRouter } from './routes/orders.mjs';
import { RoutesRouter } from './routes/routes.mjs';

export const app = express();

app.use(cors());

app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/orders', OrdersRouter);

app.use('/routes', RoutesRouter);
