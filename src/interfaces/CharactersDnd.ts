import { ImageObject, Logs } from "./Common";

export interface CharactersDnd {
    characterId: string;
    campaignId?: string;
    matchId?: string;
    author: Author;
    data: Data;
    npc: boolean;
    picture: string;
    logs: Logs[];
    createdAt: string;
    updatedAt: string;
}

export interface Author {
    userId: string;
    nickname: string;
    fullname: string;
}

export interface Data {
    profile: Profile;
    stats: Stats;
    attacks: Attack[];
    equipments: string[];
    money: Money;
    features: string[];
    spells: Spells;
    createdAt: string;
    updatedAt: string;
}

export interface Profile {
    name: string;
    class: string;
    race: string;
    level: number;
    xp: number;
    characteristics: Characteristics;
}

export interface Attack {
    name: string;
    atkBonus: number;
    damage: Damage[];
}

export interface Damage {
    type: string;
    bonus: number;
    dice: string;
}

export interface Money {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
}

export interface Spells {
    cantrips: string[];
    1: SpellLevel;
    2: SpellLevel;
    3: SpellLevel;
    4: SpellLevel;
    5: SpellLevel;
    6: SpellLevel;
    7: SpellLevel;
    8: SpellLevel;
    9: SpellLevel;
}

export interface SpellLevel {
    spellIds: string[];
    slotsTotal: number;
    slotsExpended: number;
}

export interface Characteristics {
    alignment: string;
    backstory: string;
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    appearance: Appearance;
    alliesAndOrgs: AlliesAndOrgs[];
    other: Other;
    treasure: string[];
}

export interface Appearance {
    eyes: string;
    age: string;
    weight: string;
    height: string;
    skin: string;
    hair: string;
    picture: ImageObject;
}

export interface AlliesAndOrgs {
    orgName: string;
    symbol: string;
    content: string;
}

export interface Other {
    languages: string[];
    proficiencies: string;
    extraCharacteristics: string;
}

export interface Stats {
    abilityScores: AbilityScore[];
    skills: Record<string, number>;
    proficiencyBonus: number;
    inspiration: number;
    passiveWisdom: number;
    speed: number;
    initiative: number;
    armorClass: number;
    hitPoints: HitPoints;
    deathSaves: DeathSaves;
    spellCasting: SpellCasting;
}

export interface HitPoints {
    points: number;
    currentPoints: number;
    tempPoints: number;
    dicePoints: string;
}

export interface DeathSaves {
    success: number;
    failures: number;
}

export interface SpellCasting {
    class: string;
    ability: string;
    saveDc: number;
    attackBonus: number;
}

export interface AbilityScore {
    ability: string;
    value: number;
    modifier: number;
    proficiency: boolean;
}
