import mongoose from 'mongoose';
import * as redis from 'redis';
import models from './src/models';
import MongoModel from './src/models/MongoModel';
import { DnDEntities, ModelEntity, UserEntities } from './src/types/DatabaseEntities';
import { MongooseEnvs, RedisEnvs } from './src/types/Envs';

const path = require('path');

export default class DatabaseManagement {
    static mongoose(altEnvs: MongooseEnvs = {} as MongooseEnvs) {
        const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

        const username = altEnvs.db_username || tableriseEnvs.database_username;
        const password = altEnvs.db_password || tableriseEnvs.database_password;
        const host = altEnvs.db_host || tableriseEnvs.database_host;
        const database = altEnvs.db_database || tableriseEnvs.database_database;
        const initialString = altEnvs.db_initialString || tableriseEnvs.database_initialString;

        return mongoose.connect(`${initialString}://${username}:${password}@${host}/${database}`);
    }

    static redis(altEnvs: RedisEnvs = {} as RedisEnvs) {
        const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

        const host = altEnvs.redis_host || tableriseEnvs.redis_host;
        const port = altEnvs.redis_port || tableriseEnvs.redis_port;
        const password = altEnvs.redis_password || tableriseEnvs.redis_password;

        const client = redis.createClient({
            password,
            socket: {
                host,
                port
            }
        })

        client.connect()

        return client;
    }

    static connect(on: boolean = false, db: 'mongoose' | 'redis', altEnvs: MongooseEnvs & RedisEnvs = {} as MongooseEnvs & RedisEnvs): Promise<any> | any {
        if (on) return DatabaseManagement[db](altEnvs);
    }

    public modelInstance(modelEntity: ModelEntity, entity: DnDEntities | UserEntities): MongoModel<any> {
        const entityString = `${entity}Model`;
        const model = new models[modelEntity][entityString]();
        return model;
    }
}

export { MongoModel, mongoose };
