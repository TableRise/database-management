import mongoose, { Schema } from 'mongoose';
import { Internal } from '../../interfaces/Internal';
import CommonModelSchemas from '../common/CommonModelSchemas';
import MongoModel from '../MongoModel';

const internalMongooseSchema = new Schema<Internal>(
    {
      imagesForDeletion: { type: [CommonModelSchemas.pictureMongooseSchema] }
    },
    { versionKey: false, _id: false }
);

const connection = mongoose.connection.useDb('internal', {
  noListener: true,
  useCache: true,
})

export default class InternalModel extends MongoModel<Internal> {
  constructor(public model = connection.model('internal', internalMongooseSchema)) {
    super(model)
  }
}
