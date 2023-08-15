import { z } from 'zod';
import { DnDEntities, RpgSystems } from 'src/types/RPG';
import models from 'src/models';
import MongoModel from 'src/models/MongoModel';
import schemas from 'src/schemas';

export default class DatabaseManagement {
    public modelInstance(rpgSystem: RpgSystems, entity: DnDEntities): MongoModel<unknown> {
        const entityString = `${entity}Model`;
        const model = models[rpgSystem][entityString];
        return model;
    }

    public schemaInstance(RpgSystem: RpgSystems) {
        const allSchemasFromGroup = schemas[RpgSystem];
        return allSchemasFromGroup;
    }
}

export { MongoModel };

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
const dndsystem = schemas['dungeons&dragons5e'].systemZod;
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
export type DnDWeapon = z.infer<typeof dndweapon>
export type DnDWiki = z.infer<typeof dndwiki>