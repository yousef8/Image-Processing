import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Started serving at http://localhost:${port}`);
});

app.use('/api', routes);
