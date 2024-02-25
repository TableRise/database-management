import mongoose, { Schema } from 'mongoose';
import Campaign, {
  Announcement,
  Avatar,
  Character,
  Environment,
  Infos,
  Log,
  Lores,
  MainStory,
  MatchData,
  Music,
  Player,
  Position,
  Size,
} from '../../interfaces/Campaigns';
import newUUID from '../../helpers/newUUID';
import MongoModel from '../MongoModel';

const mainStoryMongooseSchema = new Schema<MainStory>(
  {
    title: { type: String, required: true },
    lore: { type: String, required: true },
    image: { type: String, required: true },
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true },
  },
  { _id: false }
);

const environmentMongooseSchema = new Schema<Environment>(
  {
    title: { type: String, required: true },
    lore: { type: String, required: true },
    environment_image: { type: String, required: true },
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true },
  },
  { _id: false }
);

const characterMongooseSchema = new Schema<Character>(
  {
    character_id: { type: String, required: true },
    lore: { type: String, required: true },
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true },
  },
  { _id: false }
);

const loresMongooseSchema = new Schema<Lores>(
  {
    player_characters: { type: [characterMongooseSchema], required: true },
    dungeon_master_characters: { type: [characterMongooseSchema], required: true },
    environments: { type: [environmentMongooseSchema], required: true },
    main_history: { type: [mainStoryMongooseSchema], required: true },
  },
  { _id: false }
);

const announcementMongooseSchema = new Schema<Announcement>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const infosMongooseSchema = new Schema<Infos>(
  {
    campaign_age: { type: String, required: true },
    match_dates: { type: [String], required: true },
    announcements: { type: [announcementMongooseSchema], required: true },
    visibility: { type: String, required: true },
  },
  { _id: false }
);

const logMongooseSchema = new Schema<Log>(
  {
    logged_at: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const musicMongooseSchema = new Schema<Music>(
  {
    title: { type: String, required: true },
    youtube_link: { type: String, required: true },
  },
  { _id: false }
);

const sizeMongooseSchema = new Schema<Size>(
  {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  { _id: false }
);

const positionMongooseSchema = new Schema<Position>(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

const avatarMongooseSchema = new Schema<Avatar>(
  {
    avatar_id: { type: String, required: true },
    user_id: { type: String, required: true },
    image: { type: String, required: true },
    position: { type: positionMongooseSchema, required: true },
    size: { type: sizeMongooseSchema, required: true },
    status: { type: String, required: true },
  },
  { _id: false }
);

const matchDataMongooseSchema = new Schema<MatchData>(
  {
    match_id: { type: String, required: true },
    avatars: { type: [avatarMongooseSchema], required: true },
    music: { type: [musicMongooseSchema], required: true },
    map_image: { type: [String], required: true },
    logs: { type: [logMongooseSchema], required: true },
  },
  { _id: false }
);

const playerMongooseSchema = new Schema<Player>(
  {
    user_id: { type: String, required: true },
    character_id: { type: [String], required: true },
    role: { type: String, required: true },
  },
  { _id: false }
);

const campaignMongooseSchema = new Schema<Campaign>(
  {
    campaign_id: { type: String, required: true, default: newUUID() },
    title: { type: String, required: true },
    cover: { type: String, required: true },
    description: { type: String, required: true },
    campaign_players: { type: [playerMongooseSchema], required: true },
    match_data: { type: matchDataMongooseSchema, required: true },
    infos: { type: infosMongooseSchema, required: true },
    lores: { type: loresMongooseSchema, required: true },
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true },
  },
  { versionKey: false }
);

const connection = mongoose.connection.useDb('campaign', {
  noListener: true,
  useCache: true,
});

export default class CampaignsModel extends MongoModel<Campaign> {
  constructor(public model = connection.model('campaign', campaignMongooseSchema)) {
    super(model);
  }
}
