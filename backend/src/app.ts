import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { connect, } from 'mongoose';
import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT = process.env.PORT;

import listenerRouter from "./controllers/listener";

app.use(express.static('build')); // deployment
app.use(express.json());

const mongoDBUri = process.env.MONGODB_URI || "mongodb://localhost:27017/webhook-manager";


connect(mongoDBUri)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
  });

app.use('/listener', listenerRouter);

app.get('/', (request: Request, response: Response, _next: NextFunction) => {
  response.send('Hello world');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
