// src/index.ts

import app from './app';
import config from './config';
import { userData } from './leetCode';
 

// Add shortcut route here
app.get('/username/:username', (req, res) => {
  req.body = { username: req.params.username };
  userData(req as any, res); // casting to any to match expected type
});

// Start the server
app.listen(config.port, '0.0.0.0', () => {
  console.log(`Server is running at => http://localhost:${config.port} ⚙️`);
});
