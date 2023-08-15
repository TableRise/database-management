import { Schema } from 'mongoose';
import Connections from '../../models/DatabaseConnection';
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

const model = Connections['dungeons&dragons5e'].model('feat', featsMongooseSchema);

export default class FeatsModel extends MongoModel<Internacional<Feat>> {
    constructor() {
        super(model);
    }
}
