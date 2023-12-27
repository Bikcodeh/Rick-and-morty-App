export interface CharactersResponse {
    info: Info;
    results: Character[];
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