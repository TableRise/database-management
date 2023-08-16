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
    mock,
    createReturn,
    findReturn,
    findOneReturn,
    findByIdAndUpdateReturn,
    findByIdAndDeleteReturn
}: ModelMockArgs): TableRiseConnections {
    if (mock) {
        Connections['dungeons&dragons5e'] = {
            model: (): ModelMock => ({
                create: (payload) => createReturn ? ({ ...createReturn }) : ({ _id: generateNewMongoID(), ...payload }),
                find: () => findReturn ? ({ ...createReturn }) : [],
                findOne: (_id) => findOneReturn ?  ({ ...createReturn }) : ({ _id }),
                findByIdAndUpdate: (_id) => findByIdAndUpdateReturn ? ({ ...findByIdAndDeleteReturn }) : ({ _id }),
                findByIdAndDelete: (_id) => findByIdAndUpdateReturn ? ({ ...findByIdAndDeleteReturn }) : {}
            }),
        } as unknown as mongoose.Connection;

        return Connections;
    }

    Connections['dungeons&dragons5e'] = mongoose.createConnection(generateMongoURI('dungeons&dragons5e'));
    logger('info', 'Dungeons and Dragons 5° Edition - Database Connection Instanciated');

    return Connections;
}
