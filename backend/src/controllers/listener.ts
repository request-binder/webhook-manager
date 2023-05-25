import express from 'express';

const listenerRouter = express.Router();

import { sendEventToClients } from './bins';
import { saveRequest } from '../mongoAPI';
import { endpointExists } from '../postgresAPI';

listenerRouter.post('/:endpoint', async (req, res) => {
  if (await endpointExists(req.params.endpoint)) {
    const requestJSON = await saveRequest(req);
    
    sendEventToClients(requestJSON, requestJSON.endpoint as string);
  }

  res.send();
});

export default listenerRouter;
