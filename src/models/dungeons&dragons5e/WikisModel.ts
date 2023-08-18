import { Schema } from 'mongoose';
import connectInDB from '../../models/DatabaseConnection';
import { Wiki, SubTopic } from '../../schemas/dungeons&dragons5e/wikisValidationSchema';
import MongoModel from '../../models/MongoModel';
import { Internacional } from '../../schemas/languagesWrapperSchema';
import { ModelOptions } from '../../types/ModelMock';

const subTopicsMongooseSchema = new Schema<SubTopic>(
    {
        subTitle: { type: String, required: true },
        description: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Wiki>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        reference: { type: String, required: true },
        image: { type: String, required: true },
        subTopics: { type: [subTopicsMongooseSchema], required: true },
    },
    { versionKey: false, _id: false }
);

export const wikisMongooseSchema = new Schema<Internacional<Wiki>>(
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
const connectionMock = (mockObject: ModelOptions | null) => connectionMock(mockObject);

export default class WikisModel extends MongoModel<Internacional<Wiki>> {
    constructor(public mockObject: ModelOptions) {
        super(
            mockObject.mock ? connectionMock(mockObject).model('wiki', wikisMongooseSchema)
            : connection.model('wiki', wikisMongooseSchema)
        );

        this.connection = mockObject.mock ? connectionMock(mockObject) : connection;
    }
}
