import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT = process.env.PORT;

import listenerRouter from "./controllers/listener";
import binsRouter from "./controllers/bins";

app.use(express.static('build')); // deployment
app.use(express.json());

app.use('/listener', listenerRouter);

app.use('/bins', binsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
