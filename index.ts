import { z } from 'zod';
import mongoose from 'mongoose';

import { DnDEntities, RpgSystems } from './src/types/RPG';
import models from './src/models';
import MongoModel from './src/models/MongoModel';
import schemas, { SchemasDnDType } from './src/schemas';
import { SystemContent } from './src/schemas/dungeons&dragons5e/systemValidationSchema';

const path = require('path');
const logger = require('@tablerise/dynamic-logger');

export default class DatabaseManagement {
    static connect(on: boolean = false) {
        if (on) {
            const tableriseEnvs = require(path.resolve('./tablerise.environment.js'));

            const username = tableriseEnvs.database_username as string;
            const password = tableriseEnvs.database_password as string;
            const host = tableriseEnvs.database_host as string;
            const database = tableriseEnvs.database_database as string;
            const initialString = tableriseEnvs.database_initialString as string;

            mongoose.connect(`${initialString}://${username}:${password}@${host}/${database}`)
                .then(() => logger('info', 'Database connection instanciated'))
                .catch(() => logger('error', 'Database connection failed'));
        }
    }

    public modelInstance(rpgSystem: RpgSystems, entity: DnDEntities): MongoModel<any> {
        const entityString = `${entity}Model`;
        const model = new models[rpgSystem][entityString]();
        return model;
    }

    public schemaInstance(RpgSystem: RpgSystems): SchemasDnDType {
        const allSchemasFromGroup = schemas[RpgSystem];
        return allSchemasFromGroup;
    }
}

export { MongoModel, SchemasDnDType, SystemContent };

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