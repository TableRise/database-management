// Armor entity
export interface Cost {
  homebrew?: boolean;
  value: number;
  currency: string;
}

export interface Armor {
  homebrew?: boolean;
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
  homebrew?: boolean;
  personalityTrait: string[];
  ideal: string[];
  bond: string[];
  flaw: string[];
}

export interface Characteristics {
  homebrew?: boolean;
  name: string;
  description: string;
  suggested: Suggested;
}

export interface Background {
  homebrew?: boolean;
  name: string;
  description: string;
  skillProficiencies: string[];
  languages: Number;
  equipment: string[];
  characteristics: Characteristics;
}

// Class entity
export interface HitPoints {
  homebrew?: boolean;
  hitDice: string;
  hitPointsAtFirstLevel: string;
  hitPointsAtHigherLevels: string;
}

export interface Proficiencies {
  homebrew?: boolean;
  armor: string[];
  weapons: string[];
  tools: string[];
  savingThrows: string[];
  skills: string[];
}

export interface Equipment {
  homebrew?: boolean;
  a: string;
  b: string;
  c?: string;
}

export interface CantripsKnown {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface SpellSlotsPerSpellLevel {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  spellLevel: number[];
  spellSpaces: number[][];
}

export interface SpellsKnown {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface KiPoints {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface MartialArts {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface UnarmoredMovement {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: string[];
}

export interface SneakAttack {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: string[];
}

export interface SorceryPoints {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface InvocationsKnown {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface Rages {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface RageDamage {
  homebrew?: boolean;
  isValidToThisClass: boolean;
  amount: number[];
}

export interface LevelingSpecs {
  homebrew?: boolean;
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
  homebrew?: boolean;
  title: string;
  description: string;
  tables: ClassCharacteristicsTables[];
  activationLevel: string;
  popUp: boolean;
}

export interface SubClass {
  homebrew?: boolean;
  title: string;
  description: string;
  characteristics: ClassCharacteristics[];
}
export interface Class {
  homebrew?: boolean;
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
  homebrew?: boolean;
  name: string;
  prerequisite: string;
  description?: string;
  benefits: string[];
}

// God entity
export interface God {
  homebrew?: boolean;
  name: string;
  alignment: string;
  suggestedDomains: string;
  symbol: string;
  pantheon: string;
}

// Item entity
export interface TradeGoods {
  homebrew?: boolean;
  isValid: boolean;
  goods: string;
}

export interface MountOrVehicle {
  homebrew?: boolean;
  isValid: boolean;
  speed: string;
  carryingCapacity: string;
}

export interface Item {
  homebrew?: boolean;
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
  homebrew?: boolean;
  name: string;
  characteristics: string[];
  description: string;
}

// Monster entity
export interface HitPointsStats {
  homebrew?: boolean;
  hitDice: string;
  default: number;
}

export interface SavingThrow {
  homebrew?: boolean;
  name: string;
  value: number;
}

export interface Stats {
  homebrew?: boolean;
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
  homebrew?: boolean;
  name: string;
  value: number;
  modifier: number;
}

export interface Skill {
  homebrew?: boolean;
  name: string;
  description: string;
}

export interface Action {
  homebrew?: boolean;
  name: string;
  description: string;
  type: string;
}

export interface Monster {
  homebrew?: boolean;
  name: string;
  characteristics: string[];
  stats: Stats;
  abilityScore: AbilityScore[];
  skills: Skill[];
  actions: Action[];
}

// Race entity
export interface AbilityScoreIncrease {
  homebrew?: boolean;
  name: string;
  value: number;
}

export interface RaceCharacteristics {
  homebrew?: boolean;
  name: string;
  description: string;
  activationLevel: string;
  popUp: boolean;
}

export interface SubRace {
  homebrew?: boolean;
  name: string;
  description: string;
  abilityScoreIncrease: AbilityScoreIncrease[];
  characteristics: RaceCharacteristics[];
}

export interface Race {
  homebrew?: boolean;
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
  homebrew?: boolean;
  name: string;
  description: string;
  thumbnail: string;
}

// Spell entity
export interface Damage {
  homebrew?: boolean;
  type: string;
  dice: string;
}

export interface HigherLevels {
  homebrew?: boolean;
  level: string;
  damage: Damage[];
  buffs: string[];
  debuffs: string[];
}

export interface Spell {
  homebrew?: boolean;
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
  homebrew?: boolean;
  srd: string;
  icon: string;
  cover: string;
}

export interface SystemContent {
  homebrew?: boolean;
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
  homebrew?: boolean;
  name: string;
  content: SystemContent;
  references: SystemReferences;
  active: boolean;
}

export interface SystemPayload {
  homebrew?: boolean;
  name: string;
  references: SystemReferences;
  active: boolean;
}

// Weapon entity
export interface Weapon {
  homebrew?: boolean;
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
  homebrew?: boolean;
  subTitle: string;
  description: string;
}

export interface Wiki {
  homebrew?: boolean;
  title: string;
  description: string;
  reference: string;
  image: string;
  subTopics: SubTopic[];
}
