import mongoose, { Schema } from 'mongoose'
import Campaign, {
  Journal,
  CharacterInGame,
  CharacterLore,
  Environment,
  ImageCampaign,
  Infos,
  Log,
  Lores,
  MainStory,
  MatchData,
  Music,
  Player,
  Position,
  Size,
  SocialMedia,
  MatchState,
  MatchToken,
  Configurations,
} from '../../interfaces/Campaigns'
import newUUID from '../../helpers/newUUID'
import MongoModel from '../MongoModel'
import { ImageObject } from '../../interfaces/Common'

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
  },
  { versionKey: false, _id: false }
)

const mainStoryMongooseSchema = new Schema<MainStory>(
  {
    title: { type: String, required: true },
    lore: { type: String, required: true },
    image: { type: imageObjectMongooseSchema },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const environmentMongooseSchema = new Schema<Environment>(
  {
    title: { type: String, required: true },
    lore: { type: String, required: true },
    environmentImage: { type: imageObjectMongooseSchema, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const characterMongooseSchema = new Schema<CharacterLore>(
  {
    characterId: { type: String, required: true },
    lore: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const logMongooseSchema = new Schema<Log>(
  {
    loggedAt: { type: String, required: true },
    content: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const musicMongooseSchema = new Schema<Music>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const sizeMongooseSchema = new Schema<Size>(
  {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  { versionKey: false, _id: false }
)

const positionMongooseSchema = new Schema<Position>(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { versionKey: false, _id: false }
)

const characterInGameMongooseSchema = new Schema<CharacterInGame>(
  {
    characterId: { type: String, required: true },
    userId: { type: String, required: true },
    position: { type: positionMongooseSchema, required: true },
    picture: { type: imageObjectMongooseSchema },
    size: { type: sizeMongooseSchema, required: true },
    status: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const playerMongooseSchema = new Schema<Player>(
  {
    userId: { type: String, required: true },
    characterIds: { type: [String], required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const matchTokenMongooseSchema = new Schema<MatchToken>(
  {
    tokenId: { type: String },
    characterId: { type: String },
    isClone: { type: Boolean },
    xPct: { type: Number },
    yPct: { type: Number },
    widthPct: { type: Number },
    createdBy: { type: String },
    updatedBy: { type: String },
    createdAt: { type: String },
    updatedAt: { type: String },
  }
)

const matchStateMongooseSchema = new Schema<MatchState>(
  {
    activeMapId: { type: String },
    gridVisible: { type: Boolean },
    activeEffect: { type: String },
    playingMusicId: { type: String },
    visibleCharacterIds: { type: [String] },
    tokens: { type: [matchTokenMongooseSchema] },
  }
)

const matchDataMongooseSchema = new Schema<MatchData>(
  {
    matchId: { type: String, required: true },
    characters: { type: [characterInGameMongooseSchema], required: true },
    nextSessionResume: { type: String },
    charactersInGame: { type: [characterInGameMongooseSchema], required: true },
    mapImages: { type: [imageObjectMongooseSchema], required: true },
    confirmedPlayers: { type: [playerMongooseSchema] },
    actualMapImage: { type: imageObjectMongooseSchema },
    logs: { type: [logMongooseSchema], required: true },
    state: { type: matchStateMongooseSchema }
  },
  { versionKey: false, _id: false }
)

const journalMongooseSchema = new Schema<Journal>(
  {
    postId: { type: String, required: true, default: newUUID },
    title: { type: String, required: true },
    author: { type: playerMongooseSchema, required: true },
    content: { type: String, required: true },
    timestamp: { type: String, required: true },
    category: { type: String, required: true },
  },
  { versionKey: false, _id: false }
)

const socialMediaMongooseSchema = new Schema<SocialMedia>(
  {
    discord: { type: String },
    twitter: { type: String },
    youtube: { type: String },
  },
  { versionKey: false, _id: false }
)

const infosMongooseSchema = new Schema<Infos>(
  {
    campaignAge: { type: String, required: true },
    nextMatchDate: { type: String, required: true },
    highlightedJournal: { type: journalMongooseSchema },
    journal: { type: [journalMongooseSchema], required: true },
    playerAmountLimit: { type: Number, required: true },
    visibility: { type: String, required: true },
    socialMedia: { type: socialMediaMongooseSchema }
  },
  { versionKey: false, _id: false }
)

const configurationsMongooseSchema = new Schema<Configurations>(
  {
    xpSystem: { type: Boolean },
    shopSystem: { type: Boolean },
    shopOn: { type: Boolean },
  }
)

const campaignMongooseSchema = new Schema<Campaign>(
  {
    campaignId: { type: String, required: true, default: newUUID },
    title: { type: String, required: true },
    code: { type: String, required: true },
    cover: { type: imageObjectMongooseSchema },
    description: { type: String },
    mainHistory: { type: String },
    ageRestriction: { type: String, required: true },
    system: { type: String, required: true },
    campaignPlayers: { type: [playerMongooseSchema] },
    matchData: { type: matchDataMongooseSchema },
    musics: { type: [musicMongooseSchema] },
    infos: { type: infosMongooseSchema },
    configurations: { type: configurationsMongooseSchema, default: {
      xpSystem: true,
      shopSystem: true,
      shopOn: true
    } },
    password: { type: String },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
)

const connection = mongoose.connection.useDb('campaign', {
  noListener: true,
  useCache: true,
})

export default class CampaignsModel extends MongoModel<Campaign> {
  constructor(public model = connection.model('campaign', campaignMongooseSchema)) {
    super(model)
  }
}