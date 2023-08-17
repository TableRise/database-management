import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Feat } from '../../schemas/dungeons&dragons5e/featsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';

const schema = new Schema<Feat>(
    {
        name: { type: String, required: true },
        prerequisite: { type: String, required: true },
        description: { type: String, required: true },
        benefits: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

export const featMongooseSchema = new Schema<Internacional<Feat>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);
export default class FeatsModel extends MongoModel<Internacional<Feat>> {
    constructor(public mockObject: ModelOptions) {
        super(
            mockObject.mock ? connectInDB(mockObject)['dungeons&dragons5e'].model('feat', featMongooseSchema)
            : connectInDB(null)['dungeons&dragons5e'].model('feat', featMongooseSchema)
        );
    }
}
