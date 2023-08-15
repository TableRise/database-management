import { DnDEntities, RpgSystems } from './src/types/EntityModelType';
import models from './src/models';
import MongoModel from './src/models/MongoModel';

export default class DatabaseManagement {
    public modelInstance(rpgSystem: RpgSystems, entity: DnDEntities): MongoModel<unknown> {
        const entityString = `${entity}Model`;
        const model = models[rpgSystem][entityString];
        return model;
    }
}
