import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Damage, HigherLevels, Spell } from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';
import { Internacional } from '../../interfaces/Internacional';

const damageMongooseSchema = new Schema<Damage>(
    {
        type: { type: String, required: true },
        dice: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const higherLevelsMongooseSchema = new Schema<HigherLevels>(
    {
        level: { type: String, required: true },
        damage: { type: [damageMongooseSchema], required: true },
        buffs: { type: [String], required: true },
        debuffs: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Spell>(
    {
        name: { type: String, required: true },
        description: { type: String },
        type: { type: String, required: true },
        level: { type: Number, required: true },
        higherLevels: { type: [higherLevelsMongooseSchema], required: true },
        damage: { type: [damageMongooseSchema], required: false },
        castingTime: { type: String, required: true },
        duration: { type: String, required: true },
        range: { type: String, required: true },
        components: { type: String, required: true },
        buffs: { type: [String], required: true },
        debuffs: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const spellsMongooseSchema = new Schema<Internacional<Spell > & { spellId: string }>(
    {
        spellId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class SpellsModel extends MongoModel<Internacional<Spell>> {
    constructor(public model = connection.model('spell', spellsMongooseSchema)) {
        super(model);
    }
}
