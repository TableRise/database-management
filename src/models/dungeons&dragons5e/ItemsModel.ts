import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Cost, MountOrVehicle, TradeGoods, Item } from '../../interfaces/DungeonsAndDragons5e';
import { Internacional } from '../../interfaces/Internacional';
import newUUID from '../../helpers/newUUID';

const costSchema = new Schema<Cost>(
    {
        currency: { type: String, required: true },
        value: { type: Number, required: true },
    },
    { versionKey: false, _id: false }
);

const mountOrVehicleSchema = new Schema<MountOrVehicle>(
    {
        isValid: { type: Boolean, required: true },
        speed: { type: String, required: true },
        carryingCapacity: { type: String, required: true }
    },
    { versionKey: false, _id: false }
);

const tradeGoodsSchema = new Schema<TradeGoods>(
    {
        isValid: { type: Boolean, required: true },
        goods: { type: String, required: true },
    },
    { versionKey: false, _id: false }
);

const schema = new Schema<Item>(
    {
        name: { type: String, required: true },
        description: { type: String },
        cost: costSchema,
        type: { type: String, required: true },
        weight: { type: Number, required: true },
        mountOrVehicle: mountOrVehicleSchema,
        tradeGoods: tradeGoodsSchema,
    },
    { versionKey: false, _id: false }
);

export const itemsMongooseSchema = new Schema<Internacional<Item > & { itemId: string }>(
    {
        itemId: { type: String, required: true, default: newUUID() },
        active: { type: Boolean, required: true },
        en: schema,
        pt: schema,
    },
    { versionKey: false }
);

const connection = mongoose.connection.useDb('dungeons&dragons5e', { noListener: true, useCache: true });

export default class ItemsModel extends MongoModel<Internacional<Item>> {
    constructor(public model = connection.model('item', itemsMongooseSchema)) {
        super(model);
    }
}
