import TableRiseConnections from '../types/TableRiseConnection';
import mongoose from 'mongoose';
import generateMongoURI from '../helpers/generateMongoURI';
import { ModelOptions } from '../types/ModelMock';

const logger = require('@tablerise/dynamic-logger');

const Connections: TableRiseConnections = {
    'dungeons&dragons5e': {} as mongoose.Connection,
};

export default function connectInDB({ mock = null }: ModelOptions): TableRiseConnections {
    if (mock) {
        Connections['dungeons&dragons5e'] = {
            model: () => {},
        } as unknown as mongoose.Connection;

        return Connections;
    }

    Connections['dungeons&dragons5e'] = mongoose.createConnection(generateMongoURI('dungeons&dragons5e'));
    logger('info', 'Dungeons and Dragons 5° Edition - Database Connection Instanciated');

    return Connections;
}
