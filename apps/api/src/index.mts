import { config } from './config.mjs';
import { app } from './server.mjs';

app.listen(config.APP_PORT, '0.0.0.0', () => {
  console.info(`Listening on port 0.0.0.0:${config.APP_PORT}`);
});
