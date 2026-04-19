import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { HitPoints, Proficiencies, Equipment, CantripsKnown, SpellSlotsPerSpellLevel, SpellsKnown, KiPoints, MartialArts, UnarmoredMovement, SneakAttack, SorceryPoints, InvocationsKnown, Rages, RageDamage, LevelingSpecs, ClassCharacteristics, Class, SubClass } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const hitPointsMongooseSchema = new Schema<HitPoints>(
    {
        homebrew: { type: Boolean, default: true }, 
        hitDice: { type: String, required: true },
        hitPointsAtFirstLevel: { type: String, required: true },
        hitPointsAtHigherLevels: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const proficienciesMongooseSchema = new Schema<Proficiencies>(
    {
        homebrew: { type: Boolean, default: true }, 
        armor: { type: [String], required: true },
        weapons: { type: [String], required: true },
        tools: { type: [String], required: true },
        savingThrows: { type: [String], required: true },
        skills: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const equipmentMongooseSchema = new Schema<Equipment>(
    {
        homebrew: { type: Boolean, default: true }, 
        a: { type: String, required: true },
        b: { type: String, required: true },
        c: { type: String },
    },
    { versionKey: false, _id: false }
);

const cantripsKnownMongooseSchema = new Schema<CantripsKnown>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const spellSlotsPerSpellLevelMongooseSchema = new Schema<SpellSlotsPerSpellLevel>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        spellLevel: { type: [Number], required: true },
        spellSpaces: { type: [[Number]], required: true },
    },
    { versionKey: false, _id: false }
);

const spellsKnownMongooseSchema = new Schema<SpellsKnown>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const kiPointsMongooseSchema = new Schema<KiPoints>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const martialArtsMongooseSchema = new Schema<MartialArts>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const unarmoredMovementMongooseSchema = new Schema<UnarmoredMovement>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const sneakAttackMongooseSchema = new Schema<SneakAttack>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const sorceryPointsMongooseSchema = new Schema<SorceryPoints>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const invocationsKnownMongooseSchema = new Schema<InvocationsKnown>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const ragesMongooseSchema = new Schema<Rages>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const rageDamageMongooseSchema = new Schema<RageDamage>(
    {
        homebrew: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const levelingSpecsMongooseSchema = new Schema<LevelingSpecs>(
    {
        homebrew: { type: Boolean, default: true }, 
        level: { type: [Number], required: true },
        proficiencyBonus: { type: [Number], required: true },
        features: { type: [String], required: true },
        cantripsKnown: cantripsKnownMongooseSchema,
        spellSlotsPerSpellLevel: spellSlotsPerSpellLevelMongooseSchema,
        spellsKnown: spellsKnownMongooseSchema,
        kiPoints: kiPointsMongooseSchema,
        martialArts: martialArtsMongooseSchema,
        unarmoredMovement: unarmoredMovementMongooseSchema,
        sneakAttack: sneakAttackMongooseSchema,
        sorceryPoints: sorceryPointsMongooseSchema,
        invocationsKnown: invocationsKnownMongooseSchema,
        rages: ragesMongooseSchema,
        rageDamage: rageDamageMongooseSchema,
    },
    { versionKey: false, _id: false }
);

const characteristicsTableMongooseSchema = new Schema<any>(
    {
        title: { type: String },
        columns: { type: [String], required: true },
        lines: { type: [[String]], required: true }
    },
    { versionKey: false, _id: false }
)

const characteristicsMongooseSchema = new Schema<ClassCharacteristics>(
    {
        homebrew: { type: Boolean, default: true }, 
        title: { type: String, required: true },
        description: { type: String },
        activationLevel: { type: String },
        tables: { type: [characteristicsTableMongooseSchema] },
        popUp: { type: Boolean }
    },
    { versionKey: false, _id: false }
);

const subClassMoongoseSchema = new Schema<SubClass>(
    {
        homebrew: { type: Boolean, default: true }, 
        title: { type: String, required: true },
        description: { type: String },
        characteristics: [characteristicsMongooseSchema]
    },
    { versionKey: false, _id: false }
)

const schema = new Schema<Class>(
    {
        homebrew: { type: Boolean, default: true }, 
        name: { type: String, required: true },
        description: { type: String },
        hitPoints: hitPointsMongooseSchema,
        proficiencies: proficienciesMongooseSchema,
        equipment: [equipmentMongooseSchema],
        levelingSpecs: levelingSpecsMongooseSchema,
        characteristics: [characteristicsMongooseSchema],
        subClass: [subClassMoongoseSchema]
    },
    { versionKey: false, _id: false }
);

export const classMongooseSchema = new Schema<Internacional<Class > & { classId: string }>(
    {
        classId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class ClassesModel extends MongoModel<Internacional<Class>  & { classId: string }> {
    constructor(public model = connection.model('class', classMongooseSchema)) {
        super(model);
    }
}
