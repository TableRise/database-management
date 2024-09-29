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

const characteristicsSchema = new Schema<RaceCharacteristics>({
  name: { type: String },
  description: { type: String },
},
{ 
  versionKey: false, 
  _id: false 
});

const abilityScoreIncreaseSchema = new Schema<AbilityScoreIncrease>({
  name: { type: String },
  value: { type: Number },
},
{ 
  versionKey: false, 
  _id: false 
});

const subRacesSchema = new Schema<SubRace>({
  name: { type: String, required: true },
  description: { type: String },
  abilityScoreIncrease: { type: [abilityScoreIncreaseSchema] },
  characteristics: { type: [characteristicsSchema] },
},
{ 
  versionKey: false, 
  _id: false 
});

const schema = new Schema<Race>({
  name: { type: String, required: true },
  description: { type: String },
  abilityScoreIncrease: { type: [abilityScoreIncreaseSchema], required: true },
  ageMax: { type: Number },
  heightMax: { type: Number },
  alignment: { type: [String], required: true },
  speed: { type: [String, Number], required: true },
  language: { type: [String], required: true },
  subRaces: { type: [subRacesSchema], required: true },
  skillProficiencies: { type: [String], required: true },
  characteristics: { type: [characteristicsSchema], required: true },
  weightMax: { type: Number },
  size: { type: String, required: true },
  tale: { type: String, required: true },
},
{ 
  versionKey: false, 
  _id: false 
});

export const racesMongooseSchema = new Schema<
  Internacional<Race> & { raceId: string }
>(
  {
    raceId: { type: String, required: true, default: newUUID() },
    active: { type: Boolean, required: true },
    en: schema,
    pt: schema,
  },
  {
    versionKey: false,
  }
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
