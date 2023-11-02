import mongoose, { Schema } from 'mongoose';
import MongoModel from '../MongoModel';
import { GameInfo, SecretQuestion, UserDetail } from '../../interfaces/User';
import newUUID from '../../helpers/newUUID';

const gameInfoMongooseSchema = new Schema<GameInfo>(
    {
        campaigns: { type: [String], required: true },
        characters: { type: [String], required: true },
        badges: { type: [String], required: true },
    }, { _id: false }
)

const secretQuestionMongooseSchema = new Schema<SecretQuestion>(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true },
    }, { _id: false }
)

const userDetailsMongooseSchema = new Schema<UserDetail>(
    {
        userDetailId: newUUID(),
        userId: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        pronoun: { type: String },
        secretQuestion: { type: secretQuestionMongooseSchema },
        birthday: { type: String },
        gameInfo: { type: gameInfoMongooseSchema },
        biography: { type: String },
        role: { type: String, required: true },

    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('user', { noListener: true, useCache: true });

export default class UserDetailsModel extends MongoModel<UserDetail> {
    constructor(public model = connection.model('userDetail', userDetailsMongooseSchema)) {
        super(model);
    }
}
