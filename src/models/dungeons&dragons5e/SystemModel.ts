import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { SystemReferences, System, SystemContent } from '../../interfaces/DungeonsAndDragons5e';

const systemReferenceMongooseSchema = new Schema<SystemReferences>(
    {
        srd: { type: String, required: true },
        icon: { type: String, required: true },
        cover: { type: String, required: false },
    },
    { versionKey: false, _id: false }
);

const systemContentMongooseSchema = new Schema<SystemContent>(
    {
        races: { type: [String], required: true },
        classes: { type: [String], required: true },
        spells: { type: [String], required: true },
        items: { type: [String], required: true },
        weapons: { type: [String], required: true },
        armors: { type: [String], required: true },
        feats: { type: [String], required: true },
        realms: { type: [String], required: true },
        gods: { type: [String], required: true },
        monsters: { type: [String], required: true },
    },
    { versionKey: false, _id: false }
);

const systemMongooseSchema = new Schema<System & { systemId: string }>(
    {
        systemId: { type: String, required: true },
        name: { type: String, required: true },
        content: systemContentMongooseSchema,
        references: systemReferenceMongooseSchema,
        active: { type: Boolean, required: true },
    },
    {
        versionKey: false,
    }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class SystemModel extends MongoModel<System> {
    constructor(public model = connection.model('system', systemMongooseSchema, 'system')) {
        super(model);
    }
}
