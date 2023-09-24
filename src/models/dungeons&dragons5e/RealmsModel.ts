import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../interfaces/Internacional';
import { Realm } from '../../interfaces/DungeonsAndDragons5e';

const schema = new Schema<Realm>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        thumbnail: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

export const realmsMongooseSchema = new Schema<Internacional<Realm>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class RealmsModel extends MongoModel<Internacional<Realm>> {
    constructor(public model = connection.model('realm', realmsMongooseSchema)) {
        super(model);
    }
}
