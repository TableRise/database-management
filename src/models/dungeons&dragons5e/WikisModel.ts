import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { SubTopic, Wiki } from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';
import { Internacional } from '../../interfaces/Internacional';

const subTopicsMongooseSchema = new Schema<SubTopic>(
    {
        original: { type: Boolean, default: true }, 
        subTitle: { type: String, required: true },
        description: { type: String },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Wiki>(
    {
        original: { type: Boolean, default: true }, 
        title: { type: String, required: true },
        description: { type: String },
        reference: { type: String, required: true },
        image: { type: String, required: true },
        subTopics: { type: [subTopicsMongooseSchema], required: true },
    },
    { versionKey: false, _id: false }
);

export const wikisMongooseSchema = new Schema<Internacional<Wiki > & { wikiId: string }>(
    {
        wikiId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class WikisModel extends MongoModel<Internacional<Wiki>> {
    constructor(public model = connection.model('wiki', wikisMongooseSchema)) {
        super(model);
    }
}
