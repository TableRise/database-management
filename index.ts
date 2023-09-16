import { z } from 'zod';
import mongoose from 'mongoose';

import models from './src/models';
import MongoModel from './src/models/MongoModel';
import schemas, { SchemasDnDType, SchemasUserType } from './src/schemas';
import { SystemContent } from './src/schemas/dungeons&dragons5e/systemValidationSchema';
import { DnDEntities, ModelEntity, UserEntities } from './src/types/DatabaseEntities';

const path = require('path');

export default class DatabaseManagement {
    static connect(on: boolean = false): Promise<mongoose.Mongoose> {
        if (on) {
            const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

            const username = tableriseEnvs.database_username as string;
            const password = tableriseEnvs.database_password as string;
            const host = tableriseEnvs.database_host as string;
            const database = tableriseEnvs.database_database as string;
            const initialString = tableriseEnvs.database_initialString as string;

            return mongoose.connect(`${initialString}://${username}:${password}@${host}/${database}`);
        }

        return;
    }

    public modelInstance(modelEntity: ModelEntity, entity: DnDEntities | UserEntities): MongoModel<any> {
        const entityString = `${entity}Model`;
        const model = new models[modelEntity][entityString]();
        return model;
    }

    public schemaInstance(modelEntity: ModelEntity): SchemasDnDType | SchemasUserType {
        const allSchemasFromGroup = schemas[modelEntity];
        return allSchemasFromGroup;
    }
}

export { MongoModel, SchemasDnDType, SchemasUserType, SystemContent, mongoose };

export interface Internacional<T> {
    _id?: string;
    active?: boolean;
    en: T;
    pt: T;
}

const updateContent = schemas['dungeons&dragons5e'].updateContentZodSchema;
export type UpdateContent = z.infer<typeof updateContent>

// Dungeons & Dragons Schemas Type Export
const dndarmor = schemas['dungeons&dragons5e'].armorZod;
const dndbackground = schemas['dungeons&dragons5e'].backgroundZod;
const dndclasses = schemas['dungeons&dragons5e'].classZod;
const dndfeat = schemas['dungeons&dragons5e'].featZod;
const dndgod = schemas['dungeons&dragons5e'].godZod;
const dnditem = schemas['dungeons&dragons5e'].itemZod;
const dndmagicItem = schemas['dungeons&dragons5e'].magicItemZod;
const dndmonster = schemas['dungeons&dragons5e'].monsterZod;
const dndrace = schemas['dungeons&dragons5e'].raceZod;
const dndrealm = schemas['dungeons&dragons5e'].realmZod;
const dndspell = schemas['dungeons&dragons5e'].spellZod;
const dndsystem = schemas['dungeons&dragons5e'].systemZod.systemZod;
const dndsystempayload = schemas['dungeons&dragons5e'].systemZod.systemPayloadZodSchema;
const dndweapon = schemas['dungeons&dragons5e'].weaponZod;
const dndwiki = schemas['dungeons&dragons5e'].wikiZod;
export type DnDArmor = z.infer<typeof dndarmor>
export type DnDBackground = z.infer<typeof dndbackground>
export type DnDClass = z.infer<typeof dndclasses>
export type DnDFeat = z.infer<typeof dndfeat>
export type DnDGod = z.infer<typeof dndgod>
export type DnDItem = z.infer<typeof dnditem>
export type DnDMagicItem = z.infer<typeof dndmagicItem>
export type DnDMonster = z.infer<typeof dndmonster>
export type DnDRace = z.infer<typeof dndrace>
export type DnDRealm = z.infer<typeof dndrealm>
export type DnDSpell = z.infer<typeof dndspell>
export type DnDSystem = z.infer<typeof dndsystem>
export type DnDSystemPayload = z.infer<typeof dndsystempayload>
export type DnDWeapon = z.infer<typeof dndweapon>
export type DnDWiki = z.infer<typeof dndwiki>

// User Schemas Type Export
const user = schemas.user.userZod;
const userDetails = schemas.user.userDetailZod;
export type User = z.infer<typeof user>
export type UserDetail = z.infer<typeof userDetails>
