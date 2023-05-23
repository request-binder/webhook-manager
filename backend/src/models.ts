import mongoose from 'mongoose';

export interface ListenerRequest {
  headers: object;
  endpoint: string;
  body: object;
}

const listenerSchema = new mongoose.Schema(
  {
    headers: Object,
    endpoint: String,
    body: Object,
  },
  {
    timestamps: true,
  },
);

listenerSchema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    delete returnedObject.__v;
  }
});

export default mongoose.model('Listener', listenerSchema);
