import mongoose, { Schema } from 'mongoose';
import { UserDetail, UserGameInfo, UserSecretQuestion } from '../../schemas/user/userDetailsValidationSchema';
import MongoModel from '../MongoModel';

const gameInfoMongooseSchema = new Schema<UserGameInfo>(
    {
        campaigns: { type: [String], required: true },
        characters: { type: [String], required: true },
        badges: { type: [String], required: true },
    }, { _id: false }
)

const secretQuestionMongooseSchema = new Schema<UserSecretQuestion>(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true },
    }, { _id: false }
)

const userDetailsMongooseSchema = new Schema<UserDetail>(
    {
        userId: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        pronoun: { type: String },
        secretQuestion: { type: secretQuestionMongooseSchema },
        birthday: { type: String },
        gameInfo: { type: gameInfoMongooseSchema, required: true },
        biography: { type: String },
        role: { type: String, required: true },

    },
    { versionKey: false, _id: false }
);

const connection = mongoose.connection.useDb('user', { noListener: true, useCache: true });

export default class UserDetailsModel extends MongoModel<UserDetail> {
    constructor(public model = connection.model('userDetail', userDetailsMongooseSchema)) {
        super(model);
    }
}