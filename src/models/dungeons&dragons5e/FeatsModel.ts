import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Feat } from '../../schemas/dungeons&dragons5e/featsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';
import { ConnectionInstance } from '../../types/TableRiseConnection';

const schema = new Schema<Feat>(
    {
        name: { type: String, required: true },
        prerequisite: { type: String, required: true },
        description: { type: String, required: true },
        benefits: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const featsMongooseSchema = new Schema<Internacional<Feat>>(
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
    name: 'feat',
    schema: featsMongooseSchema
});

export default class FeatsModel extends MongoModel<Internacional<Feat>> {
    constructor(public mockObject: ModelOptions) {
        super(connection(mockObject));
    }
}
