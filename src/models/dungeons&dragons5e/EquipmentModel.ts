import mongoose, { Schema } from 'mongoose';
import MongoModel from '../../models/MongoModel';
import { Equipment } from '../../interfaces/DungeonsAndDragons5e';
import newUUID from '../../helpers/newUUID';

type EquipmentDocument = Equipment & {
    equipmentId: string;
    active: boolean;
};

const equipmentMongooseSchema = new Schema<EquipmentDocument>(
    {
        equipmentId: { type: String, default: newUUID },
        name: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: [Schema.Types.Mixed], required: true },
        armorClass: { type: [Schema.Types.Mixed] },
        strength: { type: String },
        stealth: { type: String },
        weight: { type: String, required: true },
        damage: { type: String },
        properties: { type: String },
        active: { type: Boolean, default: true },
    },
    { versionKey: false, _id: false }
);

export default class EquipmentModel extends MongoModel<EquipmentDocument> {
    constructor() {
        super(
            mongoose.models.Equipment ||
                mongoose.model<EquipmentDocument>('Equipment', equipmentMongooseSchema)
        );
    }
}
