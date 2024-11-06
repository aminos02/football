export interface Player{
    id:number;
    name:string;
    age:number;
}
export interface Club{
    id:number;
    name:string;
    logoUrl:string;
    country:string
    players:Player[]
}
export interface Season {
    startYear: number;
    endYear: number;
}
export interface PlayerStats {
    goals: number;
    matchesPlayed: number;
}

export interface PlayerHistory{
    clubId: string;
    season: Season;
    number: number;
    stats: PlayerStats;
}
