import mongoose, { Schema } from 'mongoose';
import MongoModel from '../MongoModel';
import { InProgress, User } from '../../schemas/user/usersValidationSchema';

const inProgressMongooseSchema = new Schema<InProgress>(
    {
        status: { type: String },
        code: { type: Number }
    }
)

const userMongooseSchema = new Schema<User>(
    {
        inProgress: { type: inProgressMongooseSchema },
        providerId: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        nickname: { type: String },
        tag: { type: String },
        picture: { type: String },
        createdAt: { type: String, required: true },
        updatedAt: { type: String, required: true }

    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('user', { noListener: true, useCache: true });

export default class UsersModel extends MongoModel<User> {
    constructor(public model = connection.model('user', userMongooseSchema)) {
        super(model);
    }
}
