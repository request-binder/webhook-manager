import express, { Application, Request, Response, NextFunction } from 'express';
require('dotenv').config();

const app: Application = express();
const PORT = process.env.PORT;
app.use(express.static('build')) // deployment
app.use(express.json());


app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.send('Hello world');
});

app.get('/bins/:endpoint_id', (req: Request, res: Response) => {
  const webhookRequests = mongoAPI.getAllRequests(request.params.endpoint_id);
  res.send("Here's the GET endpoint");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});