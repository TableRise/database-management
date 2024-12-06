import mongoose, { Schema } from 'mongoose'
import Campaign, {
  Announcement,
  Avatar,
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
  { _id: false }
)

const mainStoryMongooseSchema = new Schema<MainStory>(
  {
    title: { type: String, required: true },
    lore: { type: String, required: true },
    image: { type: imageObjectMongooseSchema, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { _id: false }
)

const environmentMongooseSchema = new Schema<Environment>(
  {
    title: { type: String, required: true },
    lore: { type: String, required: true },
    environmentImage: { type: imageObjectMongooseSchema, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { _id: false }
)

const characterMongooseSchema = new Schema<CharacterLore>(
  {
    characterId: { type: String, required: true },
    lore: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { _id: false }
)

const loresMongooseSchema = new Schema<Lores>(
  {
    playerCharacters: { type: [characterMongooseSchema], required: true },
    dungeonMasterCharacters: {
      type: [characterMongooseSchema],
      required: true,
    },
    environments: { type: [environmentMongooseSchema], required: true },
    mainHistory: { type: [mainStoryMongooseSchema], required: true },
  },
  { _id: false }
)

const announcementMongooseSchema = new Schema<Announcement>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
)

const infosMongooseSchema = new Schema<Infos>(
  {
    campaignAge: { type: String, required: true },
    matchDates: { type: [String], required: true },
    announcements: { type: [announcementMongooseSchema], required: true },
    visibility: { type: String, required: true },
  },
  { _id: false }
)

const logMongooseSchema = new Schema<Log>(
  {
    loggedAt: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
)

const musicMongooseSchema = new Schema<Music>(
  {
    title: { type: String, required: true },
    youtubeLink: { type: String, required: true },
  },
  { _id: false }
)

const sizeMongooseSchema = new Schema<Size>(
  {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  { _id: false }
)

const positionMongooseSchema = new Schema<Position>(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
)

const avatarMongooseSchema = new Schema<Avatar>(
  {
    avatarId: { type: String, required: true },
    userId: { type: String, required: true },
    picture: { type: imageObjectMongooseSchema, required: true },
    position: { type: positionMongooseSchema, required: true },
    size: { type: sizeMongooseSchema, required: true },
    status: { type: String, required: true },
  },
  { _id: false }
)

const matchDataMongooseSchema = new Schema<MatchData>(
  {
    matchId: { type: String, required: true },
    avatars: { type: [avatarMongooseSchema], required: true },
    avatarsInGame: { type: [avatarMongooseSchema], required: true, default: [] },
    musics: { type: [musicMongooseSchema], required: true },
    mapImages: { type: [imageObjectMongooseSchema], required: true },
    actualMapImage: { type: imageObjectMongooseSchema, required: true, default: {
      id: '',
      title: '',
      link: '',
      uploadDate: '',
      deleteUrl: '',
      request: { success: true, status: 200 }
    }},
    password: { type: String, required: true },
    logs: { type: [logMongooseSchema], required: true },
  },
  { _id: false }
)

const playerMongooseSchema = new Schema<Player>(
  {
    userId: { type: String, required: true },
    characterIds: { type: [String], required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
  },
  { _id: false }
)

const imagesCampaignSchema = new Schema<ImageCampaign>(
  {
    maps: { type: [imageObjectMongooseSchema], required: true },
    characters: { type: [imageObjectMongooseSchema], required: true },
  },
  { _id: false }
)

const campaignMongooseSchema = new Schema<Campaign>(
  {
    campaignId: { type: String, required: true, default: newUUID() },
    title: { type: String, required: true },
    cover: { type: imageObjectMongooseSchema },
    description: { type: String },
    ageRestriction: { type: Number, required: true },
    system: { type: String, required: true },
    campaignPlayers: { type: [playerMongooseSchema] },
    matchData: { type: matchDataMongooseSchema },
    bannedPlayers: { type: [String] },
    infos: { type: infosMongooseSchema },
    lores: { type: loresMongooseSchema },
    images: { type: imagesCampaignSchema },
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