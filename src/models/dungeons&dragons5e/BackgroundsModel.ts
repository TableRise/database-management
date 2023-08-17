import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import {
    Background,
    BackgroundCharacteristics,
    BackgroundSuggested,
} from '../../schemas/dungeons&dragons5e/backgroundsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';

const suggestedSchema = new Schema<BackgroundSuggested>(
    {
        personalityTrait: { type: [String], required: true },
        ideal: { type: [String], required: true },
        bond: { type: [String], required: true },
        flaw: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const characteristicsSchema = new Schema<BackgroundCharacteristics>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        suggested: suggestedSchema,
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Background>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        skillProficiences: { type: [String], required: true },
        languages: { type: [String], required: true },
        equipment: { type: [String], required: true },
        characteristics: characteristicsSchema,
    },
    { versionKey: false, _id: false }
);

export const backgroundsMongooseSchema = new Schema<Internacional<Background>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

export default class BackgroundsModel extends MongoModel<Internacional<Background>> {
    constructor(public mockObject: ModelOptions) {
        super(
            mockObject.mock ? connectInDB(mockObject)['dungeons&dragons5e'].model('background', backgroundsMongooseSchema)
            : connectInDB({ mock: false })['dungeons&dragons5e'].model('background', backgroundsMongooseSchema)
        );
    }
}
