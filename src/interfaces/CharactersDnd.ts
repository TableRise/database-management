import { ImageObject, Logs } from "./Common";
import { Equipment } from "./DungeonsAndDragons5e";

export interface CharactersDnd {
    characterId: string;
    campaignId?: string;
    matchId?: string;
    author: Author;
    data: Data;
    npc: boolean;
    picture: ImageObject;
    logs: Logs[];
    createdAt: string;
    updatedAt: string;
}

export interface Author {
    userId: string;
    nickname: string;
    fullname: string;
}

interface EquipmentsData extends Equipment {
    equipmentId: string;
};

export interface Data {
    profile: Profile;
    stats: Stats;
    inventory: string;
    equipments: EquipmentsData[]
    money: Money;
    spells: Spells;
    extraAbilities: ExtraAbilities;
    createdAt: string;
    updatedAt: string;
}

export interface Profile {
    name: string;
    class: string;
    race: string;
    level: number;
    prevLevel: number;
    notificationsOn: boolean;
    xp: number;
    characteristics: Characteristics;
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

export interface ExtraAbilities {
    cantrips: string[];
    1: ExtraAbilityLevel;
    2: ExtraAbilityLevel;
    3: ExtraAbilityLevel;
    4: ExtraAbilityLevel;
    5: ExtraAbilityLevel;
    6: ExtraAbilityLevel;
    7: ExtraAbilityLevel;
    8: ExtraAbilityLevel;
    9: ExtraAbilityLevel;
}

export interface SpellLevel {
    spellIds: string[];
    slotsTotal: number;
    slotsExpended: number;
}

export interface ExtraAbilityLevel {
    extraAbilityNames: string[];
    slotsTotal: number;
    slotsExpended: number;
}

export interface Characteristics {
    alignment: string;
    backstory: string;
    background: string;
    personalityTraits?: string;
    ideals?: string;
    bonds?: string;
    flaws?: string;
    appearance: Appearance;
    alliesAndOrgs?: string;
    other: Other;
    treasure?: string;
}

export interface Appearance {
    description: string;
    eyes: string;
    age: string;
    weight: string;
    height: string;
    skin: string;
    hair: string;
    picture: ImageObject;
}

export interface Other {
    characteristicsAndAbilities?: string;
    characteristicsAndAdditionalAbilities?: string;
    languagesAndProficiencies?: string;
}

export interface Stats {
    abilityScores: AbilityScore[];
    skills: {
        name: string;
        value: number;
        checked: boolean;
    }[];
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
