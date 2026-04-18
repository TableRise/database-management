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

export interface Avatar {
  avatarId: string;
  userId: string;
  picture: ImageObject;
  position: Position;
  size: Size;
  status: 'alive' | 'dead' | 'viewer';
}

export interface MatchData {
  matchId: string;
  prevDate: string;
  confirmedPlayers: Player[];
  avatars: Avatar[];
  avatarsInGame: Avatar[];
  musics: Music[];
  mapImages: ImageObject[];
  actualMapImage: ImageObject;
  password: string;
  logs: Log[];
}

export interface Player {
  userId: string;
  characterIds: string[];
  role: 'admin_player' | 'dungeon_master' | 'player';
  status: 'pending' | 'active' | 'inactive' | 'banned';
}

export interface ImageCampaign {
  maps: ImageObject[];
  characters: ImageObject[];
}

export default interface Campaign {
  campaignId?: string;
  title: string;
  cover: ImageObject;
  ageRestriction: string;
  system: 'd&d5e' | 'other';
  description: string;
  campaignPlayers: Player[];
  matchData: MatchData;
  musics: Music[];
  infos: Infos;
  lores: Lores;
  images: ImageCampaign;
  password: string;
  createdAt: string;
  updatedAt: string;
}