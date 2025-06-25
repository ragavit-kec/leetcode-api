import app from './app';
import config from './config';

app.listen(config.port, '0.0.0.0', () => {
  console.log(`Server is running at => http://localhost:${config.port} ⚙️`);
});
