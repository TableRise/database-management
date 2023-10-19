import { Model, UpdateQuery } from 'mongoose';
import ModelType from '../types/Model';

abstract class MongoModel<T> implements ModelType<T> {
    constructor(protected _model: Model<T>) {}

    private _formatDbQuery(queryObj: unknown | null): T | T[] {
        return JSON.parse(JSON.stringify(queryObj));
    }

    public async create(payload: T): Promise<T> {
        return this._formatDbQuery(await this._model.create({ ...payload })) as T;
    }

    public async findAll(query = {}): Promise<T[]> {
        return this._formatDbQuery(await this._model.find(query)) as T[];
    }

    public async findOne(_id: string): Promise<T | null> {
        return await this._formatDbQuery(this._model.findOne({ _id })) as T;
    }

    public async update(_id: string, payload: T): Promise<T | null> {
        return await this._formatDbQuery(this._model.findByIdAndUpdate({ _id }, { ...payload } as UpdateQuery<T>, { new: true })) as T;
    }

    public async delete(_id: string): Promise<T | null> {
        return await this._model.findByIdAndDelete({ _id });
    }
}

export default MongoModel;
