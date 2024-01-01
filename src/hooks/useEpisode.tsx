import { useQuery } from "react-query";
import { rickAndMortyApi } from "../api/rickAndMortyApi"
import { Episode } from "../interfaces"
import { getCharacterData } from "./useCharacter";

const getEpisode = async (numCap: string): Promise<Episode> => {
    const { data } = await rickAndMortyApi.get<Episode>(`/episode/${numCap}`)
    return data;
}

export const useGetEpisode = (numCap: string) => {

    console.log('reeeeeeender');

    const episodeQuery = useQuery({
        queryFn: () => getEpisode(numCap),
        queryKey: ['episode', numCap],
        staleTime: 1000 * 60 * 60, // Keep data fresh for an hour,
    });

    const ids = episodeQuery.data?.characters
        ? episodeQuery.data.characters
            .map((it) => it.split('/'))
            .map((it) => it[it.length - 1])
            .toString()
        : '';

    const charactersQuery = useQuery({
        queryFn: () => getCharacterData(ids),
        queryKey: ['all_characters', numCap],
        staleTime: 1000 * 60 * 60, // Keep data fresh for an hour,
        enabled: episodeQuery.data !== undefined
    })

    return {
        episodeQuery,
        charactersQuery
    }
}