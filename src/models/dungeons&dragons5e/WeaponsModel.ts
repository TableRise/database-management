import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Cost, Weapon } from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';
import { Internacional } from '../../interfaces/Internacional';

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
        description: { type: String },
        cost: costMongooseSchema,
        type: { type: String, required: true },
        weight: { type: Number, required: true },
        damage: { type: String, required: true },
        properties: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const weaponsMongooseSchema = new Schema<Internacional<Weapon > & { weaponId: string }>(
    {
        weaponId: newUUID(),
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class WeaponsModel extends MongoModel<Internacional<Weapon>> {
    constructor(public model = connection.model('weapon', weaponsMongooseSchema)) {
        super(model);
    }
}
