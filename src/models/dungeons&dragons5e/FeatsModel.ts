import mongoose, { Schema } from 'mongoose';
import { Feat } from '../../schemas/dungeons&dragons5e/featsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';

const schema = new Schema<Feat>(
    {
        name: { type: String, required: true },
        prerequisite: { type: String, required: true },
        description: { type: String, required: true },
        benefits: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const featsMongooseSchema = new Schema<Internacional<Feat>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true });

export default class FeatsModel extends MongoModel<Internacional<Feat>> {
    constructor(public model = connection.model('feat', featsMongooseSchema)) {
        super(model);
    }
}
