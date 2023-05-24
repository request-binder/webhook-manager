import express, { Request, Response } from 'express';
import { getBinRequests } from '../mongoAPI';

const binsRouter = express.Router();
interface Client {
  connection: Response,
  endpoint: string
}
let clients: Client[] = [];

binsRouter.get('/:endpoint_id', async (req: Request, res: Response) => {
  res.json(await getBinRequests(req.params.endpoint_id));
});

binsRouter.get('/events/:endpoint_id', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Add the response object to the clients array
  clients.push({ endpoint: req.params.endpoint_id, connection: res });

  // Handle client disconnection
  req.on('close', () => {
    // Remove the response object from the clients array
    clients = clients.filter(({ connection }) => connection !== res)
  })
});

export function sendEventToClients(eventData, endpoint) {
  const formattedEventData = `data: ${JSON.stringify(eventData)}\n\n`;

  clients.forEach(client => {
    if (client.endpoint === endpoint) {
      client.connection.write(formattedEventData);
    }
  });
}

export default binsRouter;
