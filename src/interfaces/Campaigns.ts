export interface MainStory {
  title: string;
  lore: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Environment {
  title: string;
  lore: string;
  environment_image: string;
  created_at: string;
  updated_at: string;
}

export interface Character {
  character_id: string;
  lore: string;
  created_at: string;
  updated_at: string;
}

export interface Lore {
  player_characters: Character[];
  dungeon_master_characters: Character[];
  environments: Environment[];
  main_history: MainStory[];
}

export interface Announcement {
  title: string;
  author: string;
  content: string;
}

//Verificar qual as opções do campo visibility
//troquei o campo announcements de objeto para array de objetos
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
  image: string;
  position: Position;
  size: Size;
  status: 'dead' | 'alive' | 'viewer';
}

export interface MatchData {
  match_id: string;
  avatars: Avatar[];
  music: Music[];
  map_image: string[];
  logs: Log[];
}

//Verificar qual as opções do campo role
export interface Player {
  user_id: string;
  character_id: string[];
  role: 'adm' | 'player' | 'dungeon master';
}

//troquei o campo campaign_players de objeto para array de objetos
export default interface Campaign {
  campaign_id?: string;
  title: string;
  cover: string;
  description: string;
  campaign_players: Player[];
  match_data: MatchData;
  infos: Infos;
  lore: Lore;
  created_at: string;
  updated_at: string;
}
