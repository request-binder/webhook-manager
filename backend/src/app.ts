import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import path from 'path';

const app: Application = express();
const PORT = process.env.PORT;

import listenerRouter from "./controllers/listener";
import binsRouter from "./controllers/bins";
import { endpointExists } from './postgresAPI';

app.use(express.static('../frontend/dist'));
app.use(express.json());

app.use(morgan('dev'));

app.use('/listener', listenerRouter);

app.use('/binders', binsRouter);

app.get('/:endpoint', async (req, res) => {
  if (await endpointExists(req.params.endpoint)) {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
