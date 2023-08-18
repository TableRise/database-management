import mongoose, { Model, UpdateQuery } from 'mongoose';
import ModelType from '../types/Model';
import { ConnectionInstance } from '../types/TableRiseConnection';

abstract class MongoModel<T> implements ModelType<T> {
    protected _model: Model<T>;

    constructor(public connection: ConnectionInstance) {
        const { instance, name, schema } = connection;

        this._model = instance.model(name, schema);
    }

    public async create(payload: T): Promise<T> {
        return await this._model.create({ ...payload });
    }

    public async findAll(query = {}): Promise<T[]> {
        return await this._model.find(query);
    }

    public async findOne(_id: string): Promise<T | null> {
        return await this._model.findOne({ _id });
    }

    public async update(_id: string, payload: T): Promise<T | null> {
        return await this._model.findByIdAndUpdate({ _id }, { ...payload } as UpdateQuery<T>, { new: true });
    }

    public async delete(_id: string): Promise<T | null> {
        return await this._model.findByIdAndDelete({ _id });
    }
}

export default MongoModel;
