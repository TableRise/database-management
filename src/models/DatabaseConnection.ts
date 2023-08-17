import TableRiseConnections from '../types/TableRiseConnection';
import mongoose from 'mongoose';
import generateNewMongoID from '../helpers/generateNewMongoID';
import generateMongoURI from '../helpers/generateMongoURI';
import { ModelMock, ModelMockArgs } from '../types/ModelMock';

const logger = require('@tablerise/dynamic-logger');

const Connections: TableRiseConnections = {
    'dungeons&dragons5e': {} as mongoose.Connection,
};

export default function connectInDB({
    mock = null,
    createReturn = null,
    findReturn = null,
    findOneReturn = null,
    findByIdAndUpdateReturn = null,
    findByIdAndDeleteReturn = null
}: ModelMockArgs): TableRiseConnections {
    if (mock) {
        Connections['dungeons&dragons5e'] = {
            model: (): ModelMock => ({
                create: async (payload) => createReturn ? ({ ...createReturn }) : ({ _id: generateNewMongoID(), ...payload }),
                find: async () => findReturn ? ([ ...findReturn ]) : [],
                findOne: async (_id) => findOneReturn ?  ({ ...findOneReturn }) : ({ _id }),
                findByIdAndUpdate: async (_id) => findByIdAndUpdateReturn ? ({ ...findByIdAndDeleteReturn }) : ({ _id }),
                findByIdAndDelete: async (_id) => findByIdAndUpdateReturn ? ({ ...findByIdAndDeleteReturn }) : {}
            }),
        } as unknown as mongoose.Connection;

        return Connections;
    }

    Connections['dungeons&dragons5e'] = mongoose.createConnection(generateMongoURI('dungeons&dragons5e'));
    logger('info', 'Dungeons and Dragons 5° Edition - Database Connection Instanciated');

    return Connections;
}
