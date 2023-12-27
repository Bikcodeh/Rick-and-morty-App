import { useQuery } from "react-query"
import { chractersApi } from "../api/charactersApi";
import { CharactersResponse } from "../interfaces";

const getCharacters = async (): Promise<CharactersResponse> => {
    const { data } = await chractersApi.get<CharactersResponse>('/character');
    return data;
}

export const useCharacters = () => {

    const charactersQuery = useQuery({
        queryFn: getCharacters,
        queryKey: ['characters ']
    });

    return {
        charactersQuery
    }
}