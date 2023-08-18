import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Weapon, Cost } from '../../schemas/dungeons&dragons5e/weaponsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';
import { ConnectionInstance } from '../../types/TableRiseConnection';

const costMongooseSchema = new Schema<Cost>(
    {
        currency: { type: String, required: true },
        value: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Weapon>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        cost: costMongooseSchema,
        type: { type: String, required: true },
        weight: { type: Number, required: true },
        damage: { type: String, required: true },
        properties: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const weaponsMongooseSchema = new Schema<Internacional<Weapon>>(
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
    name: 'weapon',
    schema: weaponsMongooseSchema
});

export default class WeaponsModel extends MongoModel<Internacional<Weapon>> {
    constructor(public mockObject: ModelOptions) {
        super(connection(mockObject));
    }
}
