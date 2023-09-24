import mongoose from 'mongoose';

import models from './src/models';
import MongoModel from './src/models/MongoModel';
import { DnDEntities, ModelEntity, UserEntities } from './src/types/DatabaseEntities';

const path = require('path');

export default class DatabaseManagement {
    static connect(on: boolean = false): Promise<mongoose.Mongoose> {
        if (on) {
            const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

            const username = tableriseEnvs.database_username as string;
            const password = tableriseEnvs.database_password as string;
            const host = tableriseEnvs.database_host as string;
            const database = tableriseEnvs.database_database as string;
            const initialString = tableriseEnvs.database_initialString as string;

            return mongoose.connect(`${initialString}://${username}:${password}@${host}/${database}`);
        }

        return;
    }

    public modelInstance(modelEntity: ModelEntity, entity: DnDEntities | UserEntities): MongoModel<any> {
        const entityString = `${entity}Model`;
        const model = new models[modelEntity][entityString]();
        return model;
    }
}

export { MongoModel, mongoose };
