import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import {
    HitPoints,
    CantripsKnown,
    SpellSlotsPerSpellLevel,
    SpellsKnown,
    LevelingSpecs,
    Class,
} from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';

type ClassDocument = Class & {
    classId: string;
    active: boolean;
};

const hitPointsMongooseSchema = new Schema<HitPoints>(
    {
        hitDice: { type: [String], required: true },
        hitPointsAtFirstLevel: { type: Number, required: true },
        hitPointsAtHigherLevels: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const cantripsKnownMongooseSchema = new Schema<CantripsKnown>(
    {
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number] },
    },
    { versionKey: false, _id: false }
);

const spellSlotsPerSpellLevelMongooseSchema = new Schema<SpellSlotsPerSpellLevel>(
    {
        isValidToThisClass: { type: Boolean, required: true },
        spellLevel: { type: [Number] },
        spellSpaces: { type: [[Number]] },
    },
    { versionKey: false, _id: false }
);

const spellsKnownMongooseSchema = new Schema<SpellsKnown>(
    {
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number] },
    },
    { versionKey: false, _id: false }
);

const levelingSpecsMongooseSchema = new Schema<LevelingSpecs>(
    {
        level: { type: [Number], required: true },
        proficiencyBonus: { type: [Number], required: true },
        features: { type: [String], required: true },
        cantripsKnown: cantripsKnownMongooseSchema,
        spellSlotsPerSpellLevel: spellSlotsPerSpellLevelMongooseSchema,
        spellsKnown: spellsKnownMongooseSchema,
    },
    { versionKey: false, _id: false }
);

export const classMongooseSchema = new Schema<ClassDocument>(
    {
        classId: { type: String, required: true, default: newUUID },
        active: { type: Boolean, required: true },
        name: { type: String, required: true },
        hitPoints: { type: hitPointsMongooseSchema, required: true },
        magicClass: { type: String },
        levelingSpecs: { type: levelingSpecsMongooseSchema, required: true },
    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class ClassesModel extends MongoModel<ClassDocument> {
    constructor(public model = connection.model('class', classMongooseSchema)) {
        super(model);
    }
}
