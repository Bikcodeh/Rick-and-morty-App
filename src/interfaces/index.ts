export interface ApiResponse<T> {
    info: Info;
    results: T[];
}

export interface Character {
    id: number;
    name: string;
    status: StatusCharacter;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export enum StatusCharacter {
    ALIVE = "Alive",
    DEAD = "Dead",
    UNKNOWN = "unknown"
}

export interface Origin {
    name: string;
    url: string;
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}