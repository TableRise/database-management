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

const connection = connectInDB({ mock: false })['dungeons&dragons5e'];
const connectionMock = (mockObject: ModelOptions | null) => connectInDB(mockObject)['dungeons&dragons5e'];

export default class RealmsModel extends MongoModel<Internacional<Realm>> {
    constructor(public mockObject: ModelOptions) {
        super(
            mockObject.mock ? connectionMock(mockObject).model('realm', realmsMongooseSchema)
            : connection.model('realm', realmsMongooseSchema)
        );

        this.connection = mockObject.mock ? connectionMock(mockObject) : connection;
    }
}
