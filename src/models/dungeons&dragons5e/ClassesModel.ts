import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { HitPoints, Proficiencies, Equipment, CantripsKnown, SpellSlotsPerSpellLevel, SpellsKnown, KiPoints, MartialArts, UnarmoredMovement, SneakAttack, SorceryPoints, InvocationsKnown, Rages, RageDamage, LevelingSpecs, ClassCharacteristics, Class, SubClass } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const hitPointsMongooseSchema = new Schema<HitPoints>(
    {
        original: { type: Boolean, default: true }, 
        hitDice: { type: String, required: true },
        hitPointsAtFirstLevel: { type: String, required: true },
        hitPointsAtHigherLevels: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const proficienciesMongooseSchema = new Schema<Proficiencies>(
    {
        original: { type: Boolean, default: true }, 
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
        original: { type: Boolean, default: true }, 
        a: { type: String, required: true },
        b: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const cantripsKnownMongooseSchema = new Schema<CantripsKnown>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const spellSlotsPerSpellLevelMongooseSchema = new Schema<SpellSlotsPerSpellLevel>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        spellLevel: { type: [Number], required: true },
        spellSpaces: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const spellsKnownMongooseSchema = new Schema<SpellsKnown>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const kiPointsMongooseSchema = new Schema<KiPoints>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const martialArtsMongooseSchema = new Schema<MartialArts>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const unarmoredMovementMongooseSchema = new Schema<UnarmoredMovement>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const sneakAttackMongooseSchema = new Schema<SneakAttack>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const sorceryPointsMongooseSchema = new Schema<SorceryPoints>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const invocationsKnownMongooseSchema = new Schema<InvocationsKnown>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const ragesMongooseSchema = new Schema<Rages>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const rageDamageMongooseSchema = new Schema<RageDamage>(
    {
        original: { type: Boolean, default: true }, 
        isValidToThisClass: { type: Boolean, required: true },
        amount: { type: [Number], required: true },
    },
    { versionKey: false, _id: false }
);

const levelingSpecsMongooseSchema = new Schema<LevelingSpecs>(
    {
        original: { type: Boolean, default: true }, 
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

const characteristicsMongooseSchema = new Schema<ClassCharacteristics>(
    {
        original: { type: Boolean, default: true }, 
        title: { type: String, required: true },
        description: { type: String },
    },
    { versionKey: false, _id: false }
);

const subClassMoongoseSchema = new Schema<SubClass>(
    {
        original: { type: Boolean, default: true }, 
        title: { type: String, required: true },
        description: { type: String },
        characteristics: [characteristicsMongooseSchema]
    },
    { versionKey: false, _id: false }
)

const schema = new Schema<Class>(
    {
        original: { type: Boolean, default: true }, 
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

export default class ClassesModel extends MongoModel<Internacional<Class>> {
    constructor(public model = connection.model('class', classMongooseSchema)) {
        super(model);
    }
}
