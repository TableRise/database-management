import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Realm } from '../../schemas/dungeons&dragons5e/realmsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';
import { ConnectionInstance } from '../../types/TableRiseConnection';

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

const connection = (mockObject: ModelOptions): ConnectionInstance => ({
    instance: connectInDB(mockObject)['dungeons&dragons5e'],
    name: 'realm',
    schema: realmsMongooseSchema
});

export default class RealmsModel extends MongoModel<Internacional<Realm>> {
    constructor(public mockObject: ModelOptions) {
        super(connection(mockObject));
    }
}
