import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Suggested, Characteristics, Background } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const suggestedSchema = new Schema<Suggested>(
    {
        personalityTrait: { type: [String], required: true },
        ideal: { type: [String], required: true },
        bond: { type: [String], required: true },
        flaw: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const characteristicsSchema = new Schema<Characteristics>(
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
        skillProficiencies: { type: [String], required: true },
        languages: { type: [String], required: true },
        equipment: { type: [String], required: true },
        characteristics: characteristicsSchema,
    },
    { versionKey: false, _id: false }
);

export const backgroundsMongooseSchema = new Schema<Internacional<Background > & { backgroundId: string }>(
    {
        backgroundId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class BackgroundsModel extends MongoModel<Internacional<Background>> {
    constructor(public model = connection.model('background', backgroundsMongooseSchema)) {
        super(model);
    }
}
