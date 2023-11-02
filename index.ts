import mongoose from 'mongoose';

import models from './src/models';
import MongoModel from './src/models/MongoModel';
import { DnDEntities, ModelEntity, UserEntities } from './src/types/DatabaseEntities';
import { Envs } from './src/types/Envs';

const path = require('path');

export default class DatabaseManagement {
    static connect(on: boolean = false, testEnvs: Envs = {} as Envs): Promise<mongoose.Mongoose> {
        if (on) {
            const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

            const username = tableriseEnvs.database_username || testEnvs.db_username;
            const password = tableriseEnvs.database_password || testEnvs.db_password;
            const host = tableriseEnvs.database_host || testEnvs.db_host;
            const database = tableriseEnvs.database_database || testEnvs.db_database;
            const initialString = tableriseEnvs.database_initialString || testEnvs.db_initialString;

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
