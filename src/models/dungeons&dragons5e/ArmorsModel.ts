import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Cost, Armor } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';

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

export const armorsMongooseSchema = new Schema<Internacional<Armor> & { armorId: string }>(
    {
        armorId: { type: String, required: true },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class ArmorsModel extends MongoModel<Internacional<Armor>> {
    constructor(public model = connection.model('armor', armorsMongooseSchema)) {
        super(model);
    }
}
