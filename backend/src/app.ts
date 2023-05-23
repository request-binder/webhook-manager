import express, { Application, Request, Response, NextFunction } from 'express';
// import mongoAPI from './mongoAPI';

require('dotenv').config();

const app: Application = express();
const PORT = process.env.PORT;

app.use(express.static('build'))
app.use(express.json());

app.get('/bins/:endpoint_id', (req: Request, res: Response) => {
  const webhookRequests: String = mongoAPI.getAllRequests(req.params.endpoint_id);
  res.json(webhookRequests);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});