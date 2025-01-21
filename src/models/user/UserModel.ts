import mongoose, { Schema } from 'mongoose';
import MongoModel from '../MongoModel';
import User, { InProgress, TwoFactorSecret } from '../../interfaces/User';
import newUUID from '../../helpers/newUUID';
import CommonModelSchemas from '../common/CommonModelSchemas';

const inProgressMongooseSchema = new Schema<InProgress>(
  {
    status: { type: String },
    currentFlow: { type: String },
    prevStatusMustBe: { type: String },
    nextStatusWillBe: { type: String },
    code: { type: String },
  },
  { _id: false }
);

const twoFactorSecretMongooseSchema = new Schema<TwoFactorSecret>(
  {
    secret: { type: String },
    qrcode: { type: String },
    active: { type: Boolean },
  },
  { _id: false }
);

const userMongooseSchema = new Schema<User>(
  {
    userId: { type: String, required: true, default: newUUID() },
    inProgress: { type: inProgressMongooseSchema },
    providerId: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String },
    tag: { type: String },
    picture: { type: CommonModelSchemas.pictureMongooseSchema },
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
