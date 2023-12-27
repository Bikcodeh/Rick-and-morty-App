import { useQuery } from "react-query"
import { rickAndMortyApi } from "../api/rickAndMortyApi";
import { ApiResponse } from "../interfaces";

async function getData<T>(query: string, endpoint: string): Promise<ApiResponse<T>> {
    const { data } = await rickAndMortyApi.get<ApiResponse<T>>(`/${endpoint}?name=${query}`);
    return data;
}

export function useGetData<T>(query: string, endpoint: string) {

    const rickAndMortyQuery = useQuery({
        queryFn: () => getData<T>(query, endpoint),
        queryKey: [endpoint]
    });

    return {
        rickAndMortyQuery
    }
}