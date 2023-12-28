import { useState, useEffect } from "react";
import { useQuery } from "react-query"
import { rickAndMortyApi } from "../api/rickAndMortyApi";
import { ApiResponse } from "../interfaces";

async function getData<T>(query: string, endpoint: string, page: string): Promise<ApiResponse<T>> {
    const { data } = await rickAndMortyApi.get<ApiResponse<T>>(`/${endpoint}?name=${query}&page=${page}`);
    return data;
}

export function useGetData<T>(query: string, endpoint: string) {

    const [page, setPage] = useState(1);
    const [prevAvailable, setPrevAvailable] = useState(false)
    const [nextAvailable, setNextAvailable] = useState(false)

    useEffect(() => {
        setPage(1);
    }, [query, endpoint])


    const rickAndMortyQuery = useQuery({
        queryFn: () => getData<T>(query, endpoint, page.toString()),
        queryKey: [endpoint, page],
        staleTime: 1000 * 60 * 60, // Keep data fresh for an hour,
        onSuccess(data) {
            setNextAvailable(data?.info.next !== null);    
            setPrevAvailable(page > 1);
        },
    });

    const nextPage = () => {
        if (rickAndMortyQuery.data?.info.next === null) return;
        setPage(prevState => {
            const newPage = prevState + 1;
            setNextAvailable(rickAndMortyQuery.data?.info.next !== null);
            setPrevAvailable(newPage !== 1);
            return newPage;
        });
    }

    const prevPage = () => {
        setPage(prevPage => {
            const newPage = prevPage - 1;
            setPrevAvailable(newPage !== 1);
            return newPage;
        });
    };

    return {
        // Properties
        rickAndMortyQuery,

        //Getter
        page: rickAndMortyQuery.isFetching ? 'Loading...' : page,
        prevAvailable,
        nextAvailable,

        //Methods
        nextPage,
        prevPage
    }
}