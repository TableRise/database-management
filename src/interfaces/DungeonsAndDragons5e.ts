export interface HitPoints {
  hitDice: string;
  hitPointsAtFirstLevel: number;
  hitPointsAtHigherLevels: string;
}

export interface CantripsKnown {
  isValidToThisClass: boolean;
  amount?: number[];
}

export interface SpellSlotsPerSpellLevel {
  isValidToThisClass: boolean;
  spellLevel?: number[];
  spellSpaces?: number[][];
}

export interface SpellsKnown {
  isValidToThisClass: boolean;
  amount?: number[];
}

export interface LevelingSpecs {
  level: number[];
  proficiencyBonus: number[];
  features: string[];
  cantripsKnown: CantripsKnown;
  spellSlotsPerSpellLevel: SpellSlotsPerSpellLevel;
  spellsKnown: SpellsKnown;
}

export interface Class {
  name: string;
  hitPoints: HitPoints;
  magicClass: string;
  levelingSpecs: LevelingSpecs;
}

export interface Feat {
  name: string;
  prerequisite: string;
  description?: string;
  benefits: string[];
}

export interface AbilityScoreIncrease {
  name: string;
  value: number;
}

export interface Race {
  name: string;
  abilityScoreIncrease: AbilityScoreIncrease[];
  speed: [number, string];
  language: string[];
}

export interface Damage {
  type: string;
  dice: string;
}

export interface HigherLevels {
  level: string;
  damage: Damage[];
  buffs: string[];
  debuffs: string[];
}

export interface Spell {
  name: string;
  description: string;
  type: string;
  class: string[];
  level: number;
  higherLevels?: string;
  castingTime: string;
  duration: string;
  range: string;
  components: string;
}

export interface SystemReferences {
  srd: string;
  icon: string;
  cover: string;
}

export interface SystemContent {
  races: string[];
  classes: string[];
  spells: string[];
  feats: string[];
}

export interface System {
  name: string;
  content: SystemContent;
  references: SystemReferences;
  active: boolean;
}

export interface SystemPayload {
  name: string;
  references: SystemReferences;
  active: boolean;
}

export interface Equipment {
  name: string;
  type: string;
  price: Array<number | string>;
  armorClass?: Array<number | string>;
  strength?: string;
  stealth?: string;
  weight: string;
  damage?: string;
  properties?: string;
}
