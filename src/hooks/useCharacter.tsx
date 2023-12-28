import { useQuery } from "react-query";
import { rickAndMortyApi } from "../api/rickAndMortyApi";
import { Character } from "../interfaces";

async function getCharacterData(id: string): Promise<Character> {
    const { data } = await rickAndMortyApi.get<Character>(`/character/${id}`);
    return data;
}

const getAllCharacters = (charactersIds: string[]) => {
    let promises: Promise<Character>[] = []
    charactersIds.forEach(id => {
        promises.push(getCharacterData(id))
    })
    return Promise.all(promises)
}


export const useCharacter = (id: string) => {

    const characterQuery = useQuery({
        queryFn: () => getCharacterData(id),
        queryKey: ['character', id]
    })

    return {
        characterQuery
    }
}

export const useCharacters = (charactersIds: string[]) => {

    const charactersQuery = useQuery({
        queryFn: () => getAllCharacters(charactersIds),
        queryKey: ['all_characters', charactersIds]
    })

    return {
        charactersQuery
    }
}
