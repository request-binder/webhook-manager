import express, { Application, Request, Response, NextFunction } from 'express';
require('dotenv').config();

const app: Application = express();
const PORT = process.env.PORT;
app.use(express.static('build')) // deployment
app.use(express.json());


app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.send('Hello world');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});