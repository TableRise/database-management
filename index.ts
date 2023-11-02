import mongoose from 'mongoose';

import models from './src/models';
import MongoModel from './src/models/MongoModel';
import { DnDEntities, ModelEntity, UserEntities } from './src/types/DatabaseEntities';
import { Envs } from './src/types/Envs';

const path = require('path');

export default class DatabaseManagement {
    static connect(on: boolean = false, altEnvs: Envs = {} as Envs): Promise<mongoose.Mongoose> {
        if (on) {
            const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

            const username = altEnvs.db_username || tableriseEnvs.database_username;
            const password = altEnvs.db_password || tableriseEnvs.database_password;
            const host = altEnvs.db_host || tableriseEnvs.database_host;
            const database = altEnvs.db_database || tableriseEnvs.database_database;
            const initialString = altEnvs.db_initialString || tableriseEnvs.database_initialString;

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
