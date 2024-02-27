export interface charactersDnd5e {
    character_id: string;
    campaign_id: string;
    author: Author;
    data: Data;
    npc: boolean;
    picture: string;
    created_at: string;
    updated_at: string;
}

export interface Author {
    user_id: string;
    nickname: string;
    fullname: string;
}

export interface Data {
    profile: Profile;
    stats: Stats;
    attacks: Attack;
    equipments: [string];
    money: Money;
    features: [string];
    spells: Spells;
    created_at: string;
    updated_at: string;
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
    atk_bonus: number;
    damage: Damage;
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
    cantrips: [string];
    1: SpellLv;
    2: SpellLv;
    3: SpellLv;
    4: SpellLv;
    5: SpellLv;
    6: SpellLv;
    7: SpellLv;
    8: SpellLv;
    9: SpellLv;
}

export interface SpellLv {
    spell_ids: [string];
    slots_total: number;
    slots_expended: number;
}

export interface Characteristics {
    alignment: string;
    backstory: string;
    personality_traits: string;
    ideal: string;
    bonds: string;
    flaws: string;
    appearence: Appearence;
    allies_and_orgs: AlliesAndOrgs;
    other: Other;
    treasure: [string];
}

export interface Appearence {
    eyes: string;
    age: string;
    weight: string;
    height: string;
    skin: string;
    hair: string;
    picture: string;
}

export interface AlliesAndOrgs {
    orgName: string;
    symbol: string;
    content: string;
}

export interface Other {
    languages: [string];
    proficiences: string;
    extra_characteristics: string;
}

export interface Stats {
    ability_scores: AbilityScore;
    skills: Skills;
    proficiency_bonus: number;
    inspiration: number;
    passive_wisdom: number;
    speed: number;
    initiative: number;
    armor_class: number;
    hitPoints: HitPoints;
    death_saves: DeathSaves;
    spell_casting: SpellCasting;
}

export interface Skills {
    x_dinamyc: number;
}

export interface HitPoints {
    points: number;
    current_points: number;
    temp_points: number;
    dice_points: number;
}

export interface DeathSaves {
    sucess: number;
    failures: number;
}

export interface SpellCasting {
    class: string;
    ability: string;
    save_dc: number;
    attack_bonus: number;
}

export interface AbilityScore {
    ability: string;
    value: number;
    modifier: number;
    proficiency: boolean;
}
