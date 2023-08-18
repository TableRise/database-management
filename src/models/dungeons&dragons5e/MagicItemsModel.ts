import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { MagicItem } from '../../schemas/dungeons&dragons5e/magicItemsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';
import { ConnectionInstance } from '../../types/TableRiseConnection';

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

const connection = (mockObject: ModelOptions): ConnectionInstance => ({
    instance: connectInDB(mockObject)['dungeons&dragons5e'],
    name: 'magicItem',
    schema: magicItemsMongooseSchema
});

export default class MagicItemsModel extends MongoModel<Internacional<MagicItem>> {
    constructor(public mockObject: ModelOptions) {
        super(connection(mockObject));
    }
}
