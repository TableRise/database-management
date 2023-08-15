import { Schema } from 'mongoose';
import Connections from '../../models/DatabaseConnection';
import { Realm } from '../../schemas/dungeons&dragons5e/realmsValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';

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

const model = Connections['dungeons&dragons5e'].model('realm', realmsMongooseSchema);

export default class RealmsModel extends MongoModel<Internacional<Realm>> {
    constructor() {
        super(model);
    }
}
