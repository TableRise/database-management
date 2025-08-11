import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import {
  AbilityScoreIncrease,
  SubRace,
  Race,
  RaceCharacteristics,
} from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const characteristicsSchema = new Schema<RaceCharacteristics>(
    {
        original?: { type: Boolean, default: true }, 
        name: { type: String },
        description: { type: String },
        activationLevel: { type: String },
        popUp: { type: Boolean }
    },
    { versionKey: false, _id: false }
);

const abilityScoreIncreaseSchema = new Schema<AbilityScoreIncrease>(
    {
        original?: { type: Boolean, default: true }, 
        name: { type: String },
        value: { type: Number },
    },
    { versionKey: false, _id: false }
);

const subRacesSchema = new Schema<SubRace>(
    {
        original?: { type: Boolean, default: true }, 
        name: { type: String, required: true },
        description: { type: String },
        abilityScoreIncrease: { type: [abilityScoreIncreaseSchema] },
        characteristics: { type: [characteristicsSchema], required: true  },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Race>(
    {
        original?: { type: Boolean, default: true }, 
        name: { type: String, required: true },
        description: { type: String },
        abilityScoreIncrease: { type: [abilityScoreIncreaseSchema] },
        ageMax: { type: Number, required: true },
        heightMax: { type: Number, required: true },
        alignment: { type: [String], required: true },
        speed: { type: [String, Number], required: true },
        language: { type: [String], required: true },
        subRaces: { type: [subRacesSchema] },
        skillProficiencies: { type: [String], required: true },
        characteristics: { type: [characteristicsSchema], required: true },
        weightMax: { type: Number, required: true },
        size: { type: String, required: true },
        tale: { type: String, required: true }
    },
    { versionKey: false, _id: false }
);

export const racesMongooseSchema = new Schema<Internacional<Race> & { raceId: string }>(
    {
        raceId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema
    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', {
    noListener: true,
    useCache: true,
});

export default class RacesModel extends MongoModel<Internacional<Race>> {
    constructor(public model = connection.model('race', racesMongooseSchema)) {
        super(model);
    }
}
