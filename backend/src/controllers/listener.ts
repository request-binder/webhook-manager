import express from 'express';

const listenerRouter = express.Router();

import { ListenerRequest, } from '../models';
import requestModel from '../models';
import { sendEventToClients } from './bins';

// debug route
listenerRouter.get('/', (_req, res) => {
  requestModel.find({}).then((requests) => {
    res.json(requests);
  });
});

listenerRouter.post('/:endpoint', async (req, res) => {
  const body = req.body as object;

  const result: ListenerRequest = {
    headers: req.headers,
    endpoint: req.params.endpoint,
    body,
  };

  const request = new requestModel(result);

  await request.save();

  sendEventToClients(request.toJSON(), result.endpoint)

  res.send(request.toJSON());
});

export default listenerRouter;
