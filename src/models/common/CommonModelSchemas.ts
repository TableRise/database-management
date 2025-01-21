import { Schema } from 'mongoose';
import { ImageObject } from '../../interfaces/Common';

const pictureMongooseSchema = new Schema<ImageObject>(
    {
      id: { type: String },
      title: { type: String },
      link: { type: String },
      uploadDate: { type: String },
      thumbSizeUrl: { type: String },
      mediumSizeUrl: { type: String },
      deleteUrl: { type: String },
      request: {
        success: { type: Boolean },
        status: { type: Number },
      },
    },
    { _id: false }
);

export default {
    pictureMongooseSchema
}
