import express from 'express';
import resizeEndPoint from './api/resizeRoute';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('add /resize to URL and then query parameters');
});

routes.use('/resize', resizeEndPoint);

export default routes;
