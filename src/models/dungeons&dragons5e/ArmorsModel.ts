import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Armor, Cost } from '../../schemas/dungeons&dragons5e/armorsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';

const costMongooseSchema = new Schema<Cost>(
    {
        currency: { type: String, required: true },
        value: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Armor>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        cost: costMongooseSchema,
        type: { type: String, required: true },
        weight: { type: Number, required: true },
        armorClass: { type: Number, required: true },
        requiredStrength: { type: Number, required: true },
        stealthPenalty: { type: Boolean, required: true },
    },
    { versionKey: false, _id: false }
);

export const armorsMongooseSchema = new Schema<Internacional<Armor>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = connectInDB({ mock: false })['dungeons&dragons5e'];
const connectionMock = (mockObject: ModelOptions | null) => connectionMock(mockObject);

export default class ArmorsModel extends MongoModel<Internacional<Armor>> {
    constructor(public mockObject: ModelOptions | null) {
        super(
            mockObject.mock ? connectionMock(mockObject).model('armor', armorsMongooseSchema)
            : connection.model('armor', armorsMongooseSchema)
        );

        this.connection = mockObject.mock ? connectionMock(mockObject) : connection;
    }
}
