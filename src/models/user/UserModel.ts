import mongoose, { Schema } from 'mongoose';
import MongoModel from '../MongoModel';
import User, { InProgress, TwoFactorSecret } from '../../interfaces/User';
import newUUID from '../../helpers/newUUID';
import { ImageObject } from '../../interfaces/Common';

const inProgressMongooseSchema = new Schema<InProgress>(
  {
    status: { type: String },
    code: { type: String },
  },
  { _id: false }
);

const twoFactorSecretMongooseSchema = new Schema<TwoFactorSecret>(
  {
    secret: { type: String },
    qrcode: { type: String },
    active: { type: Boolean }
  },
  { _id: false }
);

const pictureMongooseSchema = new Schema<ImageObject>(
  {
    id: { type: String },
    title: { type: String },
    link: { type: String },
    uploadDate: { type: String },
    thumbSizeUrl: { type: String },
    mediumSizeUrl: { type: String },
    deleterUrl: { type: String },
    request: {
      success: { type: Boolean },
      status: { type: Number }
    }
  },
  { _id: false }
)

const userMongooseSchema = new Schema<User>(
  {
    userId: { type: String, required: true, default: newUUID() },
    inProgress: { type: inProgressMongooseSchema },
    providerId: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String },
    tag: { type: String },
    picture: { type: pictureMongooseSchema },
    twoFactorSecret: { type: twoFactorSecretMongooseSchema },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

const connection = mongoose.connection.useDb('user', {
  noListener: true,
  useCache: true,
});

export default class UsersModel extends MongoModel<User> {
  constructor(public model = connection.model('user', userMongooseSchema)) {
    super(model);
  }
}
