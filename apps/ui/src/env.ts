import { z } from 'zod';

export const envVarsSchema = z.object({
  MODE: z.string(),
  PROD: z.boolean(),
  VITE_SERVICE_BASE_URL: z.string(),
  VITE_ORDER_ID: z.string(),
  VITE_MAPS_API_KEY: z.string(),
});

export let envVars: z.infer<typeof envVarsSchema>;

// Performing runtime validation of environment variables.
try {
  envVars = envVarsSchema.parse(import.meta.env);
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
