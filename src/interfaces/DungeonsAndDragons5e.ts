// Armor entity
export interface Cost {
  original: boolean;
  value: number;
  currency: string;
}

export interface Armor {
  original: boolean;
  type: string;
  name: string;
  description: string;
  cost: Cost;
  weight: number;
  armorClass: string;
  requiredStrength: number;
  stealthPenalty: boolean;
}

// Background entity
export interface Suggested {
  original: boolean;
  personalityTrait: string[];
  ideal: string[];
  bond: string[];
  flaw: string[];
}

export interface Characteristics {
  original: boolean;
  name: string;
  description: string;
  suggested: Suggested;
}

export interface Background {
  original: boolean;
  name: string;
  description: string;
  skillProficiencies: string[];
  languages: string[];
  equipment: string[];
  characteristics: Characteristics;
}

// Class entity
export interface HitPoints {
  original: boolean;
  hitDice: string;
  hitPointsAtFirstLevel: string;
  hitPointsAtHigherLevels: string;
}

export interface Proficiencies {
  original: boolean;
  armor: string[];
  weapons: string[];
  tools: string[];
  savingThrows: string[];
  skills: string[];
}

export interface Equipment {
  original: boolean;
  a: string;
  b: string;
  c?: string;
}

export interface CantripsKnown {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface SpellSlotsPerSpellLevel {
  original: boolean;
  isValidToThisClass: boolean;
  spellLevel: number[];
  spellSpaces: number[][];
}

export interface SpellsKnown {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface KiPoints {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface MartialArts {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface UnarmoredMovement {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface SneakAttack {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface SorceryPoints {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface InvocationsKnown {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface Rages {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface RageDamage {
  original: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface LevelingSpecs {
  original: boolean;
  level: number[];
  proficiencyBonus: number[];
  features: string[];
  cantripsKnown: CantripsKnown;
  spellSlotsPerSpellLevel: SpellSlotsPerSpellLevel;
  spellsKnown: SpellsKnown;
  kiPoints: KiPoints;
  martialArts: MartialArts;
  unarmoredMovement: UnarmoredMovement;
  sneakAttack: SneakAttack;
  sorceryPoints: SorceryPoints;
  invocationsKnown: InvocationsKnown;
  rages: Rages;
  rageDamage: RageDamage;
}

export interface ClassCharacteristicsTables {
  title?: string;
  columns: string[];
  lines: string[][];
}

export interface ClassCharacteristics {
  original: boolean;
  title: string;
  description: string;
  tables: ClassCharacteristicsTables[];
  activationLevel: string;
  popUp: boolean;
}

export interface SubClass {
  original: boolean;
  title: string;
  description: string;
  characteristics: ClassCharacteristics[];
}
export interface Class {
  original: boolean;
  name: string;
  description: string;
  hitPoints: HitPoints;
  proficiencies: Proficiencies;
  equipment: Equipment[];
  levelingSpecs: LevelingSpecs;
  characteristics: ClassCharacteristics[];
  subClass: SubClass[]; 
}

// Feat entity
export interface Feat {
  original: boolean;
  name: string;
  prerequisite: string;
  description: string;
  benefits: string[];
}

// God entity
export interface God {
  original: boolean;
  name: string;
  alignment: string;
  suggestedDomains: string;
  symbol: string;
  pantheon: string;
}

// Item entity
export interface TradeGoods {
  original: boolean;
  isValid: boolean;
  goods: string;
}

export interface MountOrVehicle {
  original: boolean;
  isValid: boolean;
  speed: string;
  carryingCapacity: string;
}

export interface Item {
  original: boolean;
  name: string;
  description: string;
  cost: Cost;
  type: string;
  weight: number;
  mountOrVehicle: MountOrVehicle;
  tradeGoods: TradeGoods;
}

// MagicIem entity
export interface MagicItem {
  original: boolean;
  name: string;
  characteristics: string[];
  description: string;
}

// Monster entity
export interface HitPointsStats {
  original: boolean;
  hitDice: string;
  default: number;
}

export interface SavingThrow {
  original: boolean;
  name: string;
  value: number;
}

export interface Stats {
  original: boolean;
  armorClass: number;
  hitPoints: HitPointsStats;
  speed: string;
  savingThrows: SavingThrow[];
  damageImmunities: string[];
  conditionImmunities: string[];
  damageResistances: string[];
  senses: string[];
  languages: string[];
  challengeLevel: number;
}

export interface AbilityScore {
  original: boolean;
  name: string;
  value: number;
  modifier: number;
}

export interface Skill {
  original: boolean;
  name: string;
  description: string;
}

export interface Action {
  original: boolean;
  name: string;
  description: string;
  type: string;
}

export interface Monster {
  original: boolean;
  name: string;
  characteristics: string[];
  stats: Stats;
  abilityScore: AbilityScore[];
  skills: Skill[];
  actions: Action[];
  picture: string;
}

// Race entity
export interface AbilityScoreIncrease {
  original: boolean;
  name: string;
  value: number;
}

export interface RaceCharacteristics {
  original: boolean;
  name: string;
  description: string;
  activationLevel: string;
  popUp: boolean;
}

export interface SubRace {
  original: boolean;
  name: string;
  description: string;
  abilityScoreIncrease: AbilityScoreIncrease[];
  characteristics: RaceCharacteristics[];
}

export interface Race {
  original: boolean;
  name: string;
  description: string;
  abilityScoreIncrease: AbilityScoreIncrease[];
  ageMax: number;
  alignment: string[];
  heightMax: number;
  speed: [number, string];
  language: string[];
  subRaces: SubRace[];
  skillProficiencies: string[];
  characteristics: RaceCharacteristics[];
  weightMax: number;
  size: string;
  tale: string;
}

// Realm entity
export interface Realm {
  original: boolean;
  name: string;
  description: string;
  thumbnail: string;
}

// Spell entity
export interface Damage {
  original: boolean;
  type: string;
  dice: string;
}

export interface HigherLevels {
  original: boolean;
  level: string;
  damage: Damage[];
  buffs: string[];
  debuffs: string[];
}

export interface Spell {
  original: boolean;
  name: string;
  description: string;
  type: string;
  level: number;
  higherLevels: HigherLevels[];
  damage: Damage[] | null;
  castingTime: string;
  duration: string;
  range: string;
  components: string;
  buffs: string[];
  debuffs: string[];
}

// System entity
export interface SystemReferences {
  original: boolean;
  srd: string;
  icon: string;
  cover: string;
}

export interface SystemContent {
  original: boolean;
  races: string[];
  classes: string[];
  spells: string[];
  items: string[];
  weapons: string[];
  armors: string[];
  feats: string[];
  realms: string[];
  gods: string[];
  monsters: string[];
}

export interface System {
  original: boolean;
  name: string;
  content: SystemContent;
  references: SystemReferences;
  active: boolean;
}

export interface SystemPayload {
  original: boolean;
  name: string;
  references: SystemReferences;
  active: boolean;
}

// Weapon entity
export interface Weapon {
  original: boolean;
  name: string;
  description: string;
  cost: Cost;
  type: string;
  weight: number;
  damage: string;
  properties: string[];
}

// Wiki entity
export interface SubTopic {
  original: boolean;
  subTitle: string;
  description: string;
}

export interface Wiki {
  original: boolean;
  title: string;
  description: string;
  reference: string;
  image: string;
  subTopics: SubTopic[];
}
