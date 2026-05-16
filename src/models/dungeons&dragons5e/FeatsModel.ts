import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Feat } from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';

type FeatDocument = Feat & {
    featId: string;
    active: boolean;
};

export const featsMongooseSchema = new Schema<FeatDocument>(
    {
        featId: { type: String, required: true, default: newUUID },
        active: { type: Boolean, required: true },
        name: { type: String, required: true },
        prerequisite: { type: String },
        description: { type: String },
        benefits: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class FeatsModel extends MongoModel<FeatDocument> {
    constructor(public model = connection.model('feat', featsMongooseSchema)) {
        super(model);
    }
}
