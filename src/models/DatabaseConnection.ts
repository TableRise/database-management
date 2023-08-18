import TableRiseConnections from '../types/TableRiseConnection';
import mongoose from 'mongoose';
import generateMongoURI from '../helpers/generateMongoURI';
import { ModelOptions } from '../types/ModelMock';

const logger = require('@tablerise/dynamic-logger');

const Connections: TableRiseConnections = {
    'dungeons&dragons5e': {} as mongoose.Connection,
};

export default function connectInDB({ mock }: ModelOptions): TableRiseConnections {
    logger('info', 'Database connection instanciated');

    Connections['dungeons&dragons5e'] = mock ? { model: () => {} } as unknown as mongoose.Connection
        : mongoose.createConnection(generateMongoURI('dungeons&dragons5e'));

    return Connections;
}
