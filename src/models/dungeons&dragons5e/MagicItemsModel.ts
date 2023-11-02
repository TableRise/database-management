import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { MagicItem } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const schema = new Schema<MagicItem>(
    {
        name: { type: String, required: true },
        characteristics: { type: [String], required: true },
        description: { type: String },
    },
    { versionKey: false, _id: false }
);

export const magicItemsMongooseSchema = new Schema<Internacional<MagicItem > & { magicItemId: string }>(
    {
        magicItemId: newUUID(),
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class MagicItemsModel extends MongoModel<Internacional<MagicItem>> {
    constructor(public model = connection.model('magicItem', magicItemsMongooseSchema)) {
        super(model);
    }
}
