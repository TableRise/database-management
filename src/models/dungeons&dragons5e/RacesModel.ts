import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { AbilityScoreIncrease, Race } from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';

type RaceDocument = Race & {
    raceId: string;
    active: boolean;
};

const abilityScoreIncreaseSchema = new Schema<AbilityScoreIncrease>(
    {
        name: { type: String },
        value: { type: Number },
    },
    { versionKey: false, _id: false }
);

export const racesMongooseSchema = new Schema<RaceDocument>(
    {
        raceId: { type: String, required: true, default: newUUID },
        active: { type: Boolean, required: true },
        name: { type: String, required: true },
        abilityScoreIncrease: { type: [abilityScoreIncreaseSchema] },
        speed: { type: [Schema.Types.Mixed], required: true },
        language: { type: [String], required: true },
    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', {
    noListener: true,
    useCache: true,
});

export default class RacesModel extends MongoModel<RaceDocument> {
    constructor(public model = connection.model('race', racesMongooseSchema)) {
        super(model);
    }
}
