import { useQuery } from "react-query";
import { rickAndMortyApi } from "../api/rickAndMortyApi";
import { Character, Episode } from "../interfaces";

async function getSingleCharacterData(id: string): Promise<Character> {
    const { data } = await rickAndMortyApi.get<Character>(`/character/${id}`);
    return data;
}


const getEpisodes = async (episodes: string): Promise<Episode[] | Episode> => {
    const { data } = await rickAndMortyApi.get<Episode[] | Episode>(`/episode/${episodes}`);
    return (data);
}


export const useGetCharacter = (id: number) => {

    const characterQuery = useQuery({
        queryKey: ['character', {id}],
        queryFn: () => getSingleCharacterData(id.toString()),
        staleTime: 1000 * 60 * 10
    })

    const episodes = characterQuery.data?.episode
    ? characterQuery.data.episode
        .map((it) => it.split('/'))
        .map((it) => it[it.length - 1])
        .toString()
    : '';

    const episodesQuery = useQuery({
        queryFn: () => getEpisodes(episodes),
        queryKey: ['episodes', characterQuery.data?.id],
        staleTime: 1000 * 60 * 60,
        enabled: characterQuery.data !== undefined
    })

    return {
        characterQuery,
        episodesQuery
    }
}
