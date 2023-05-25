import { connect, } from 'mongoose';
import { Request } from 'express';

import requestModel from './models';
import { ListenerRequest, } from './models';

const mongoDBUri = process.env.MONGODB_URI || "mongodb://localhost:27017/webhook-manager";

connect(mongoDBUri)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
  });

export const getBinRequests = (endpoint: String) => {
  return requestModel.find({ endpoint: endpoint }).sort({ createdAt: 'desc'}).exec();
};

export const saveRequest = async (req: Request) => {
  const body = req.body as object;

  const result: ListenerRequest = {
    headers: req.headers,
    endpoint: req.params.endpoint,
    body,
  };

  const request = new requestModel(result);

  await request.save();

  return request.toJSON();
};
