export interface Player {
  id: number;
  name: string;
  age: number;
  history: PlayerHistory[];
}
export interface Club {
  id: number;
  name: string;
  logoUrl: string;
  country: string;
}
export interface PlayerStats {
  goals?: number;
  matchesPlayed?: number;
}

export interface PlayerHistory {
  clubId: number;
  seasonYear: number;
  number: number;
  stats: PlayerStats;
}
