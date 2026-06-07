import mongoose, { Schema } from 'mongoose';
import MongoModel from '../MongoModel';
import { Friends, GameInfo, Messages, Social, UserDetail } from '../../interfaces/User';
import newUUID from '../../helpers/newUUID';
import CommonModelSchemas from '../common/CommonModelSchemas';

const gameInfoMongooseSchema = new Schema<GameInfo>(
    {
        campaigns: { type: [String], required: true },
        characters: { type: [String], required: true },
        badges: { type: [String], required: true },
        campaignsJoinedAmount: { type: Number, default: 0 },
        charactersCreatedAmount: { type: Number, default: 0 },
        campaignsClosedAmount: { type: Number, default: 0 },
        equipBoughtAmount: { type: Number, default: 0 },
        donateAmount: { type: Number, default: 0 },
    }, { versionKey: false, _id: false }
);

const messagesMongooseSchema = new Schema<Messages>(
    {
        messageId: { type: String, required: true, default: newUUID  },
        title: { type: String, required: true },
        content: { type: String, required: true },
        userId: { type: String, required: true },
        timestamp: { type: String, required: true },
        status: { type: String, required: true, default: 'not-read' },
    }, { versionKey: false, _id: false }
);

const friendsMongooseSchema = new Schema<Friends>(
    {
        userId: { type: String, required: true },
        nickname: { type: String, required: true },
        tag: { type: String, required: true },
        picture: { type: String, required: true },
        rank: { type: String, required: true },
        status: { type: String, required: true, default: 'pending' },
        favorite: { type: Boolean, required: true, default: false }
    }, { versionKey: false, _id: false }
);

const socialMongooseSchema = new Schema<Social>(
    {
        discord: { type: String, default: '' },
        instagram: { type: String, default: '' },
        x: { type: String, default: '' },
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
        messages: { type: [messagesMongooseSchema], default: [] },
        gallery: { type: [CommonModelSchemas.pictureMongooseSchema], default: [] },
        friends: { type: [friendsMongooseSchema], default: [] },
        role: { type: String, required: true },
        social: { type: socialMongooseSchema, default: () => ({}) },
    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('user', { noListener: true, useCache: true });

export default class UserDetailsModel extends MongoModel<UserDetail> {
    constructor(public model = connection.model('userDetail', userDetailsMongooseSchema)) {
        super(model);
    }
}
