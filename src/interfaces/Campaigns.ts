export interface ImageObject {
  id: string;
  link: string;
  uploadDate: Date;
}

export interface MainStory {
  title: string;
  lore: string;
  image: ImageObject;
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

export interface Announcement {
  title: string;
  author: string;
  content: string;
}

export interface Infos {
  campaignAge: string;
  matchDates: string[];
  announcements: Announcement[];
  visibility: 'hidden' | 'visible';
}

export interface Log {
  loggedAt: string;
  content: string;
}

export interface Music {
  title: string;
  youtubeLink: string;
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
  avatars: Avatar[];
  music: Music[];
  mapImages: ImageObject[];
  logs: Log[];
}

export interface Player {
  userId: string;
  characterIds: string[];
  role: 'admin_player' | 'dungeon_master' | 'player';
}

export default interface Campaign {
  campaignId?: string;
  title: string;
  cover: ImageObject;
  description: string;
  campaignPlayers: Player[];
  matchData: MatchData;
  infos: Infos;
  lores: Lores;
  createdAt: string;
  updatedAt: string;
}
