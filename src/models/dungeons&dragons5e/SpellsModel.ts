import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Spell, Damage, HigherLevels } from '../../schemas/dungeons&dragons5e/spellsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';
import { ConnectionInstance } from '../../types/TableRiseConnection';

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
        description: { type: String, required: true },
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

export const spellsMongooseSchema = new Schema<Internacional<Spell>>(
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
    name: 'spell',
    schema: spellsMongooseSchema
});

export default class SpellsModel extends MongoModel<Internacional<Spell>> {
    constructor(public mockObject: ModelOptions) {
        super(connection(mockObject));
    }
}
