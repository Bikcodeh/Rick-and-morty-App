import { rickAndMortyApi } from "../api/rickAndMortyApi";
import { Character } from "../interfaces";

export async function getCharacterData(ids: string): Promise<Character[]> {
    const { data } = await rickAndMortyApi.get<Character[]>(`/character/${ids}`);
    return data;
}