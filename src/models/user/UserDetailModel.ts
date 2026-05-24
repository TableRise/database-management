import mongoose, { Schema } from 'mongoose';
import MongoModel from '../MongoModel';
import { GameInfo, SecretQuestion, UserDetail } from '../../interfaces/User';
import newUUID from '../../helpers/newUUID';
import CommonModelSchemas from '../common/CommonModelSchemas';

const gameInfoMongooseSchema = new Schema<GameInfo>(
    {
        campaigns: { type: [String], required: true },
        characters: { type: [String], required: true },
        badges: { type: [String], required: true },
        campaignsJoinedAmount: { type: Number,default: 0 },
        charactersCreatedAmount: { type: Number,default: 0 },
        campaignsClosedAmount: { type: Number,default: 0 },
    }, { versionKey: false, _id: false }
);

const userDetailsMongooseSchema = new Schema<UserDetail>(
    {
        userDetailId: { type: String, required: true, default: newUUID },
        userId: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        birthday: { type: String },
        gameInfo: { type: gameInfoMongooseSchema },
        biography: { type: String },
        rank: { type: String, default: 'bronze' },
        cover: { type: CommonModelSchemas.pictureMongooseSchema },
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
