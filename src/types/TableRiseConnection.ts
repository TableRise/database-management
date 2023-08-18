import mongoose from 'mongoose';

export default interface TableRiseConnections {
    'dungeons&dragons5e': mongoose.Connection;
}

export interface ConnectionInstance {
    instance: mongoose.Connection,
    name: string,
    schema: any
}
