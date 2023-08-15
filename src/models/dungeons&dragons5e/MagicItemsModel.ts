import { Schema } from 'mongoose';
import Connections from '../../models/DatabaseConnection';
import { MagicItem } from '../../schemas/dungeons&dragons5e/magicItemsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';

const schema = new Schema<MagicItem>(
    {
        name: { type: String, required: true },
        characteristics: { type: [String], required: true },
        description: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

export const magicItemsMongooseSchema = new Schema<Internacional<MagicItem>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const model = Connections['dungeons&dragons5e'].model('magicItem', magicItemsMongooseSchema);

export default class MagicItemsModel extends MongoModel<Internacional<MagicItem>> {
    constructor() {
        super(model);
    }
}
