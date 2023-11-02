import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { God } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const schema = new Schema<God>(
    {
        name: { type: String, required: true },
        alignment: { type: String, required: true },
        suggestedDomains: { type: String, required: true },
        symbol: { type: String, required: true },
        pantheon: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

export const godsMongooseSchema = new Schema<Internacional<God > & { godId: string }>(
    {
        godId: { type: String, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class GodsModel extends MongoModel<Internacional<God>> {
    constructor(public model = connection.model('god', godsMongooseSchema)) {
        super(model);
    }
}
