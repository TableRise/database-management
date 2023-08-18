import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import {
    Race,
    SubRace,
    Characteristic,
    AbilityScoreIncrease,
} from '../../schemas/dungeons&dragons5e/racesValidationSchema';
import MongoModel from '../../models/MongoModel';
import { ModelOptions } from '../../types/ModelMock';

const abilityScoreIncreaseSchema = new Schema<AbilityScoreIncrease>({
    name: { type: String, required: true },
    value: { type: Number, required: true },
});

const characteristicsSchema = new Schema<Characteristic>({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const subRacesSchema = new Schema<SubRace>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    abilityScoreIncrease: abilityScoreIncreaseSchema,
    characteristics: { type: [characteristicsSchema], required: true },
});

const schema = new Schema<Race>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    abilityScoreIncrease: abilityScoreIncreaseSchema,
    ageMax: { type: Number, required: true },
    alignment: { type: [String], required: true },
    heightMax: { type: Number, required: true },
    speed: { type: [String, Number], required: true },
    language: { type: [String], required: true },
    subRaces: { type: [subRacesSchema], required: true },
    skillProficiences: { type: [String], required: true },
    characterstics: { type: [characteristicsSchema], required: true },
    weightMax: { type: Number, required: true },
});

export const racesMongooseSchema = new Schema<Internacional<Race>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = connectInDB({ mock: false })['dungeons&dragons5e'];
const connectionMock = (mockObject: ModelOptions | null) => connectInDB(mockObject)['dungeons&dragons5e'];

export default class RacesModel extends MongoModel<Internacional<Race>> {
    constructor(public mockObject: ModelOptions) {
        super(
            mockObject.mock ? connectionMock(mockObject).model('race', racesMongooseSchema)
            : connection.model('race', racesMongooseSchema)
        );

        this.connection = mockObject.mock ? connectionMock(mockObject) : connection;
    }
}
