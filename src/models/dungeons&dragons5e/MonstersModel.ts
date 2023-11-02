import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { HitPointsStats, Stats, AbilityScore, Monster, Action, SavingThrow, Skill } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const hitPointsMongooseSchema = new Schema<HitPointsStats>(
    {
        hitDice: { type: String, required: true },
        default: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const savingThrowsMongooseSchema = new Schema<SavingThrow>(
    {
        name: { type: String, required: true },
        value: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const statsMongooseSchema = new Schema<Stats>(
    {
        armorClass: { type: Number, required: true },
        hitPoints: { type: hitPointsMongooseSchema, required: true },
        speed: { type: String, required: true },
        savingThrows: { type: [savingThrowsMongooseSchema], required: true },
        damageImmunities: { type: [String], required: true },
        conditionImmunities: { type: [String], required: true },
        damageResistances: { type: [String], required: true },
        senses: { type: [String], required: true },
        languages: { type: [String], required: true },
        challengeLevel: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const abilityScoreMongooseSchema = new Schema<AbilityScore>(
    {
        name: { type: String, required: true },
        value: { type: Number, required: true },
        modifier: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const skillsMongooseSchema = new Schema<Skill>(
    {
        name: { type: String, required: true },
        description: { type: String },
    },
    { versionKey: false, _id: false }
);

const actionsMongooseSchema = new Schema<Action>(
    {
        name: { type: String, required: true },
        description: { type: String },
        type: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Monster>(
    {
        name: { type: String, required: true },
        characteristics: { type: [String], required: true },
        stats: { type: statsMongooseSchema, required: true },
        abilityScore: { type: [abilityScoreMongooseSchema], required: true },
        skills: { type: [skillsMongooseSchema], required: true },
        actions: { type: [actionsMongooseSchema], required: true },
        picture: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

export const monstersMongooseSchema = new Schema<Internacional<Monster > & { monsterId: string }>(
    {
        monsterId: { type: String, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class MonstersModel extends MongoModel<Internacional<Monster>> {
    constructor(public model = connection.model('monster', monstersMongooseSchema)) {
        super(model);
    }
}
