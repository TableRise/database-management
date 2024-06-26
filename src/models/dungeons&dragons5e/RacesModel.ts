import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import {
  AbilityScoreIncrease,
  SubRace,
  Race,
  SubRaceCharacteristics,
} from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const abilityScoreIncreaseSchema = new Schema<AbilityScoreIncrease>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const characteristicsSchema = new Schema<SubRaceCharacteristics>({
  name: { type: String, required: true },
  description: { type: String },
});

const subRacesSchema = new Schema<SubRace>({
  name: { type: String, required: true },
  description: { type: String },
  abilityScoreIncrease: abilityScoreIncreaseSchema,
  characteristics: { type: [characteristicsSchema], required: true },
});

const schema = new Schema<Race>({
  name: { type: String, required: true },
  description: { type: String },
  abilityScoreIncrease: abilityScoreIncreaseSchema,
  ageMax: { type: Number, required: true },
  alignment: { type: [String], required: true },
  heightMax: { type: Number, required: true },
  speed: { type: [String, Number], required: true },
  language: { type: [String], required: true },
  subRaces: { type: [subRacesSchema], required: true },
  skillProficiencies: { type: [String], required: true },
  characteristics: { type: [characteristicsSchema], required: true },
  weightMax: { type: Number, required: true },
  size: { type: String, required: true },
  tale: { type: String, required: true },
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
