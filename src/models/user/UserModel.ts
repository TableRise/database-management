import mongoose, { Schema } from 'mongoose';
import { User } from '../../schemas/user/usersValidationSchema';
import MongoModel from '../MongoModel';

const userMongooseSchema = new Schema<User>(
    {
        providerId: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        nickname: { type: String },
        tag: { type: String, required: true, unique: true },
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
