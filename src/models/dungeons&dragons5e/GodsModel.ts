import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { God } from '../../schemas/dungeons&dragons5e/godsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';
import { ConnectionInstance } from '../../types/TableRiseConnection';

const schema = new Schema<God>(
    {
        name: { type: String, required: true },
        alignment: { type: String, required: true },
        suggestedDomains: { type: String, required: true },
        symbol: { type: String, required: true },
        phanteon: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

export const godsMongooseSchema = new Schema<Internacional<God>>(
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
    name: 'god',
    schema: godsMongooseSchema
});

export default class GodsModel extends MongoModel<Internacional<God>> {
    constructor(public mockObject: ModelOptions) {
        super(connection(mockObject));
    }
}
