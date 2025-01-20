import mongoose, { Schema } from 'mongoose';
import newUUID from '../../helpers/newUUID';
import MongoModel from '../MongoModel';
import { AbilityScore, AlliesAndOrgs, Appearance, Attack, Author, Characteristics, CharactersDnd, Damage, Data, DeathSaves, HitPoints, Money, Other, Profile, SpellCasting, SpellLevel, Spells, Stats } from '../../interfaces/CharactersDnd';
import { ImageObject } from '../../interfaces/Common';


const imageObjectMongooseSchema = new Schema<ImageObject>(
    {
        id: { type: String },
        title: { type: String },
        link: { type: String },
        uploadDate: { type: String },
        thumbSizeUrl: { type: String },
        mediumSizeUrl: { type: String },
        deleteUrl: { type: String },
        request: {
            success: { type: Boolean },
            status: { type: Number }
        }
    }
)



const authorMongooseSchema = new Schema<Author>(
    {
        userId: { type: String, required: true },
        nickname: { type: String, required: true },
        fullname: { type: String, required: true },
    },
    { _id: false }
);

const appearanceMongooseSchema = new Schema<Appearance>(
    {
        eyes: { type: String, required: true },
        age: { type: String, required: true },
        weight: { type: String, required: true },
        height: { type: String, required: true },
        skin: { type: String, required: true },
        hair: { type: String, required: true },
        picture: { type: imageObjectMongooseSchema, required: true },
    },
    { _id: false }
);

const alliesAndOrgsMongooseSchema = new Schema<AlliesAndOrgs>(
    {
      orgName: { type: String, required: true },
      symbol: { type: String, required: true },
      content: { type: String, required: true },
    },
    { _id: false }
);  

const otherMongooseSchema = new Schema<Other>(
    {
      languages: { type: [String], required: true },
      proficiencies: { type: String, required: true },
      extraCharacteristics: { type: String, required: true },
    },
    { _id: false }
); 

const characteristicsMongooseSchema = new Schema<Characteristics>(
    {
        alignment: { type: String, required: true },
        backstory: { type: String, required: true },
        personalityTraits: { type: String, required: true },
        ideals: { type: String, required: true },
        bonds: { type: String, required: true },
        flaws: { type: String, required: true },
        appearance: { type: appearanceMongooseSchema, required: true },
        alliesAndOrgs: {type: alliesAndOrgsMongooseSchema, required: true },
        other: { type: otherMongooseSchema, required: true },
        treasure: { type: [String], required: true },
    },
    { _id: false }
);

const profileMongooseSchema = new Schema<Profile>(
    {
        name: { type: String, required: true },
        class: { type: String, required: true },
        race: { type: String, required: true },
        level: { type: Number, required: true },
        xp: { type: Number, required: true },
        characteristics: { type: characteristicsMongooseSchema, required: true },
    },
    { _id: false }
);

const spellCastingMongooseSchema = new Schema<SpellCasting>(
    {
        class: { type: String, required: true },
        ability: { type: String, required: true },
        saveDc: { type: Number, required: true },
        attackBonus: { type: Number, required: true },
    },
    { _id: false }
);

const deathSavesMongooseSchema = new Schema<DeathSaves>(
    {
        success: { type: Number, required: true },
        failures: { type: Number, required: true },
    },
    { _id: false }
);

const hitPointsMongooseSchema = new Schema<HitPoints>(
    {
        points: { type: Number, required: true },
        currentPoints: { type: Number, required: true },
        tempPoints: { type: Number, required: true },
        dicePoints: { type: String, required: true },
    },
    { _id: false }
);

const abilityScoreMongooseSchema = new Schema<AbilityScore>(
    {
        ability: { type: String, required: true },
        value: { type: Number, required: true },
        modifier: { type: Number, required: true },
        proficiency:{ type: Boolean, required: true },
    },
    { _id: false }
);

const statsMongooseSchema = new Schema<Stats>(
    {
        abilityScores: { type: [abilityScoreMongooseSchema], required: true },
        skills: { type: new Schema({}, { strict: false }), required: true },
        proficiencyBonus: { type: Number, required: true },
        inspiration: { type: Number, required: true },
        passiveWisdom: { type: Number, required: true },
        speed: { type: Number, required: true },
        initiative: { type: Number, required: true },
        armorClass: { type: Number, required: true },
        hitPoints: { type: hitPointsMongooseSchema, required: true },
        deathSaves: { type: deathSavesMongooseSchema, required: true },
        spellCasting: { type: spellCastingMongooseSchema, required: true },
    },
    { _id: false }
);  

const damageMongooseSchema = new Schema<Damage>(
    {
        type: { type: String, required: true },
        bonus: { type: Number, required: true },
        dice: { type: String, required: true },
    },
    { _id: false }
);

const attackMongooseSchema = new Schema<Attack>(
    {
        name: { type: String, required: true },
        atkBonus: { type: Number, required: true },
        damage: { type: [damageMongooseSchema], required: true },
    },
    { _id: false }
);

const moneyMongooseSchema = new Schema<Money>(
    {
        cp: { type: Number, required: true },
        sp: { type: Number, required: true },
        ep: { type: Number, required: true },
        gp: { type: Number, required: true },
        pp: { type: Number, required: true },
    },
    { _id: false }
);

const spellLevelMongooseSchema = new Schema<SpellLevel>(
    {
        spellIds: { type: [String], required: true },
        slotsTotal: { type: Number, required: true },
        slotsExpended: { type: Number, required: true },
    },
    { _id: false }
);


const spellsMongooseSchema = new Schema<Spells>(
    {
        cantrips: { type: [String], required: true },
        1: { type: spellLevelMongooseSchema, required: true },
        2: { type: spellLevelMongooseSchema, required: true },
        3: { type: spellLevelMongooseSchema, required: true },
        4: { type: spellLevelMongooseSchema, required: true },
        5: { type: spellLevelMongooseSchema, required: true },
        6: { type: spellLevelMongooseSchema, required: true },
        7: { type: spellLevelMongooseSchema, required: true },
        8: { type: spellLevelMongooseSchema, required: true },
        9: { type: spellLevelMongooseSchema, required: true },
    },
    { _id: false }
);

const dataMongooseSchema = new Schema<Data>(
  {
    profile: { type: profileMongooseSchema, required:true },
    stats: { type: statsMongooseSchema, required:true },
    attacks: { type: [attackMongooseSchema], required: true },
    equipments: { type: [String], required: true },
    money: { type: moneyMongooseSchema, required: true },
    features: { type: [String], required: true },
    spells: { type: spellsMongooseSchema, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { _id: false }
);


const charactersDndMongooseSchema = new Schema<CharactersDnd>(
    {
      characterId: { type: String, required: true, default: newUUID() },
      campaignId: { type: String },
      matchId: { type: String },
      author: { type: authorMongooseSchema },
      data: { type: dataMongooseSchema },
      npc: {type: Boolean },
      picture: { type: String },
      logs: { type: [String] },
      createdAt: { type: String, required: true },
      updatedAt: { type: String, required: true },
    },
    { versionKey: false }
  );

const connection = mongoose.connection.useDb('charactersDnd', {
  noListener: true,
  useCache: true,
});

export default class CharactersDndModel extends MongoModel<CharactersDnd> {
  constructor(public model = connection.model('charactersDnd', charactersDndMongooseSchema)) {
    super(model);
  }
}