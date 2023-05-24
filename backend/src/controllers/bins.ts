import express, { Request, Response } from 'express';
import { getBinRequests } from '../mongoAPI';

const binsRouter = express.Router();

binsRouter.get('/:endpoint_id', async (req: Request, res: Response) => {
  res.json(await getBinRequests(req.params.endpoint_id));
});

export default binsRouter;