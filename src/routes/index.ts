import express from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('add /resize to URL and then query parameters');
});

routes.use('/resize', resize);

export default routes;
