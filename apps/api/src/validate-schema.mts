import { type Request, type Response, type NextFunction } from 'express';
import { type Schema, ZodError } from 'zod';

export const validateSchema =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err) {
      const returnError =
        err instanceof ZodError ? err.errors : { error: 'Unknown' };

      return res.status(400).send(returnError);
    }
  };
