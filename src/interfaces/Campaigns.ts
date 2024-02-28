export interface ImageObject {
  id: string;
  link: string;
  uploadDate: Date;
}

export interface MainStory {
  title: string;
  lore: string;
  image: ImageObject;
  created_at: string;
  updated_at: string;
}

export interface Environment {
  title: string;
  lore: string;
  environment_image: ImageObject;
  created_at: string;
  updated_at: string;
}

export interface CharacterLore {
  character_id: string;
  lore: string;
  created_at: string;
  updated_at: string;
}

export interface Lores {
  player_characters: CharacterLore[];
  dungeon_master_characters: CharacterLore[];
  environments: Environment[];
  main_history: MainStory[];
}

export interface Announcement {
  title: string;
  author: string;
  content: string;
}

export interface Infos {
  campaign_age: string;
  match_dates: string[];
  announcements: Announcement[];
  visibility: 'hidden' | 'visible';
}

export interface Log {
  logged_at: string;
  content: string;
}

export interface Music {
  title: string;
  youtube_link: string;
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
  avatar_id: string;
  user_id: string;
  picture: ImageObject;
  position: Position;
  size: Size;
  status: 'alive' | 'dead' | 'viewer';
}

export interface MatchData {
  match_id: string;
  avatars: Avatar[];
  music: Music[];
  map_image: ImageObject[];
  logs: Log[];
}

export interface Player {
  user_id: string;
  character_id: string[];
  role: 'admin_player' | 'dungeon_master' | 'player';
}

export default interface Campaign {
  campaign_id?: string;
  title: string;
  cover: ImageObject;
  description: string;
  campaign_players: Player[];
  match_data: MatchData;
  infos: Infos;
  lores: Lores;
  created_at: string;
  updated_at: string;
}
