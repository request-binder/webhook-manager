import express, { Request, Response } from 'express';
import { getBinRequests } from '../mongoAPI';

const binsRouter = express.Router();

binsRouter.get('/:endpoint_id', (req: Request, res: Response) => {
  getBinRequests(req.params.endpoint_id).then((webhookRequests) => res.json(webhookRequests));
});

export default binsRouter;