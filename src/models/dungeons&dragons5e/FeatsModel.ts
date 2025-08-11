import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Feat } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const schema = new Schema<Feat>(
    {
        original?: { type: Boolean, default: true }, 
        name: { type: String, required: true },
        prerequisite: { type: String, required: true },
        description: { type: String },
        benefits: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const featsMongooseSchema = new Schema<Internacional<Feat > & { featId: string }>(
    {
        featId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class FeatsModel extends MongoModel<Internacional<Feat>> {
    constructor(public model = connection.model('feat', featsMongooseSchema)) {
        super(model);
    }
}
