import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect(<string>process.env.MONGO_CONNECTION_URL);

export const getAllRequests = async (endpointID: String) => {
  // return await Requests.find({}); // subject to change based on db "schema"
};
