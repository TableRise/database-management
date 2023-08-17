import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Realm } from '../../schemas/dungeons&dragons5e/realmsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';

const schema = new Schema<Realm>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        thumbnail: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

export const realmsMongooseSchema = new Schema<Internacional<Realm>>(
    {
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

export default class RealmsModel extends MongoModel<Internacional<Realm>> {
    constructor(public mockObject: ModelOptions) {
        super(
            mockObject.mock ? connectInDB(mockObject)['dungeons&dragons5e'].model('realm', realmsMongooseSchema)
            : connectInDB({ mock: false })['dungeons&dragons5e'].model('realm', realmsMongooseSchema)
        );
    }
}
