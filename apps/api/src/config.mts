import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: '.env.local' });

export const configSchema = z.object({
  APP_PORT: z.string().regex(/^\d+$/).transform(Number),
});

export let config: z.infer<typeof configSchema>;

try {
  config = configSchema.parse(process.env);
} catch (err) {
  if (err instanceof z.ZodError) {
    const { fieldErrors } = err.flatten();

    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) =>
        errors ? `${field}: ${errors.join(', ')}` : field,
      )
      .join('\n  ');

    throw new Error(`Missing environment variables:\n  ${errorMessage}`);
  }
}
