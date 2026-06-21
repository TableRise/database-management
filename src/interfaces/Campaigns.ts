import { ImageObject } from "./Common";

export interface MainStory {
  title: string;
  lore: string;
  image?: ImageObject;
  createdAt: string;
  updatedAt: string;
}

export interface Environment {
  title: string;
  lore: string;
  environmentImage: ImageObject;
  createdAt: string;
  updatedAt: string;
}

export interface CharacterLore {
  characterId: string;
  lore: string;
  createdAt: string;
  updatedAt: string;
}

export interface Lores {
  playerCharacters: CharacterLore[];
  dungeonMasterCharacters: CharacterLore[];
  environments: Environment[];
  mainHistory: MainStory[];
}

export interface Journal {
  postId: string;
  title: string;
  author: Player;
  content: string;
  timestamp: string;
  category: 'master' | 'admin' | 'players' | 'characters-players' | 'characters-master' | 'environment' | 'world-news' | 'announcements'
}

export interface SocialMedia {
  discord?: string;
  twitter?: string;
  youtube?: string;
}
  
export interface Infos {
  campaignAge: string;
  nextMatchDate: string;
  highlightedJournal: Journal;
  journal: Journal[];
  playerAmountLimit: number;
  visibility: 'hidden' | 'visible';
  socialMedia: SocialMedia;
}

export interface Log {
  loggedAt: string;
  content: string;
}

export interface Music {
  id: string;
  title: string;
  thumbnail: string;
}

export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface CharacterInGame {
  characterId: string;
  userId: string;
  position: Position;
  picture: ImageObject;
  size: Size;
  status: 'alive' | 'dead' | 'viewer';
}

export interface MatchToken {
  tokenId: string;                 // base:${characterId} or clone:${uuid}
  characterId: string;
  isClone: boolean;
  xPct: number;
  yPct: number;
  widthPct: number;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface MatchState {
  activeMapId: string | null;
  gridVisible: boolean;
  activeEffect: 'dark' | 'light' | 'rain' | null;
  playingMusicId: string | null;
  visibleCharacterIds: string[];
  playingMusicTimeSeconds: number;
  anchorUpdatedAt: string;
  tokens: MatchToken[];
}

export interface MatchData {
  matchId: string;
  prevDate: string;
  nextSessionResume?: string;
  confirmedPlayers: Player[];
  characters: CharacterInGame[];
  charactersInGame: CharacterInGame[];
  actualMapImage: ImageObject;
  mapImages: ImageObject[];
  images: ImageObject[];
  imageHighlighted: ImageObject;
  logs: Log[];
  state: MatchState;
}

export interface PlayerNotes {
  title: string;
  content: string;
}

export interface Player {
  userId: string;
  characterIds: string[];
  notes: PlayerNotes[];
  role: 'admin_player' | 'dungeon_master' | 'player';
  status: 'pending' | 'active' | 'inactive' | 'banned';
}

export interface ImageCampaign {
  maps: ImageObject[];
  characters: ImageObject[];
}

export interface Configurations {
  xpSystem: boolean;
  shopSystem: boolean;
  shopOn: boolean;
  playOn: boolean;
}

export interface CampaignBuys {
  name: string;
  cost: string;
  character: string;
  user: string;
  date: string;
}

export default interface Campaign {
  campaignId?: string;
  title: string;
  cover: ImageObject;
  code: string;
  status: string;
  mainHistory: string;
  ageRestriction: string;
  system: 'd&d5e' | 'other';
  description: string;
  campaignPlayers: Player[];
  matchData: MatchData;
  musics: Music[];
  infos: Infos;
  configurations: Configurations;
  buys: CampaignBuys[];
  password: string;
  createdAt: string;
  updatedAt: string;
}