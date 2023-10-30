import { Model, UpdateQuery } from 'mongoose';
import ModelType from '../types/Model';

abstract class MongoModel<T> implements ModelType<T> {
    constructor(protected _model: Model<T>) {}

    public async create(payload: T): Promise<T> {
        return await this._model.create(payload);
    }

    public async findAll(query = {}): Promise<T[]> {
        return await this._model.find(query);
    }

    public async findOne(query = {}): Promise<T | null> {
        return await this._model.findOne(query);
    }

    public async update(query = {}, payload: T): Promise<T | null> {
        return await this._model.findOneAndUpdate(query, payload as UpdateQuery<T>, { new: true });
    }

    public async delete(query = {}): Promise<T | null> {
        return await this._model.findOneAndDelete(query);
    }

    public async erase(): Promise<void> {
        await this._model.deleteMany({});
    }
}

export default MongoModel;
