import { connect, } from 'mongoose';

import requestModel from './models';

const mongoDBUri = process.env.MONGODB_URI || "mongodb://localhost:27017/webhook-manager";

connect(mongoDBUri)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
  });

export const getBinRequests = async (endpoint: String) => {
  return requestModel.find({ endpoint: endpoint });
};
