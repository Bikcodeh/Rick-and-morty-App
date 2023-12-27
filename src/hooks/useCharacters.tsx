import { useQuery } from "react-query"
import { chractersApi } from "../api/charactersApi";
import { CharactersResponse } from "../interfaces";

const getCharacters = async (query: string): Promise<CharactersResponse> => {
    const { data } = await chractersApi.get<CharactersResponse>(`/character/?name=${query}`);
    return data;
}

export const useCharacters = (query: string) => {

    const charactersQuery = useQuery({
        queryFn:() => getCharacters(query),
        queryKey: ['characters ']
    });

    return {
        charactersQuery
    }
}