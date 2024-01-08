import React from 'react';
import { AxiosError } from 'axios';
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';

import { useGetData } from '../../src/hooks/useGetData';
import { rickAndMortyApi } from '../../src/api/rickAndMortyApi';
import { Episode, Character, StatusCharacter, ApiResponse } from '../../src/interfaces';

const data: ApiResponse<Character> = {
    info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character?page=2",
          prev: null
    },
    results: [
          {
                id: 1,
                name: "Rick Sanchez",
                status: StatusCharacter.ALIVE,
                species: "Human",
                type: "",
                gender: "Male",
                origin: {
                      name: "Earth (C-137)",
                      url: "https://rickandmortyapi.com/api/location/1"
                },
                location: {
                      name: "Citadel of Ricks",
                      url: "https://rickandmortyapi.com/api/location/3"
                },
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                episode: [
                      "https://rickandmortyapi.com/api/episode/1",
                      "https://rickandmortyapi.com/api/episode/2",
                      "https://rickandmortyapi.com/api/episode/3"
                ],
                url: "https://rickandmortyapi.com/api/character/1",
                created: "2017-11-04T18:48:46.250Z"
          },
          {
                id: 2,
                name: "Morty Smith",
                status: StatusCharacter.ALIVE,
                species: "Human",
                type: "",
                gender: "Male",
                origin: {
                      name: "unknown",
                      url: ""
                },
                location: {
                      name: "Citadel of Ricks",
                      url: "https://rickandmortyapi.com/api/location/3"
                },
                image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                episode: [
                      "https://rickandmortyapi.com/api/episode/1",
                      "https://rickandmortyapi.com/api/episode/2"
                ],
                url: "https://rickandmortyapi.com/api/character/2",
                created: "2017-11-04T18:50:21.651Z"
          }
    ]
}

const dataPage2: ApiResponse<Character> = {
    info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character?page=3",
          prev: "https://rickandmortyapi.com/api/character?page=1"
    },
    results: [
          {
                id: 20,
                name: "Aqua Morty",
                status: StatusCharacter.ALIVE,
                species: "Human",
                type: "",
                gender: "Male",
                origin: {
                      name: "Earth (C-137)",
                      url: "https://rickandmortyapi.com/api/location/1"
                },
                location: {
                      name: "Citadel of Ricks",
                      url: "https://rickandmortyapi.com/api/location/3"
                },
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                episode: [
                      "https://rickandmortyapi.com/api/episode/1",
                      "https://rickandmortyapi.com/api/episode/2",
                      "https://rickandmortyapi.com/api/episode/3"
                ],
                url: "https://rickandmortyapi.com/api/character/1",
                created: "2017-11-04T18:48:46.250Z"
          }
    ]
}

const queryClient = new QueryClient();

const queryClientCustom = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const wrapperError = ({ children }) => (
    <QueryClientProvider client={queryClientCustom}>{children}</QueryClientProvider>
);

describe('Tests fro useGetData', () => {

    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(rickAndMortyApi);
    })

    afterEach(() => {
        mock.reset()
    })

    test('should return data correctly', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').replyOnce(200, data);
        const { result } = renderHook(() => useGetData<Character>('', 'character'), { wrapper });

        await waitFor(() => expect(result.current.rickAndMortyQuery.isSuccess).toBe(true));
        await waitFor(() => expect(result.current.rickAndMortyQuery.data).toEqual(data));
        await waitFor(() => expect(result.current.rickAndMortyQuery.status).toBe('success'));
        await waitFor(() => expect(result.current.prevAvailable).toBe(false));
        await waitFor(() => expect(result.current.nextAvailable).toBe(true));
        await waitFor(() => expect(result.current.page).toBe(1));
    });

    test('should return data correctly when onNext', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').replyOnce(200, data);
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=2').replyOnce(200, dataPage2);
        const { result } = renderHook(() => useGetData<Character>('', 'character'), { wrapper });

        await waitFor(() => result.current.nextPage());
        await waitFor(() => expect(result.current.rickAndMortyQuery.data).toEqual(dataPage2)); 
    });

    test('should return data correctly when onPrev', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').replyOnce(200, data);
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=2').replyOnce(200, dataPage2);
        const { result } = renderHook(() => useGetData<Character>('', 'character'), { wrapper });

        await waitFor(() => result.current.nextPage());
        await waitFor(() => result.current.prevPage());
        await waitFor(() => expect(result.current.rickAndMortyQuery.data).toEqual(data)); 
    });


    test('should return error', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').replyOnce(500, 'Internal');

        const { result } = renderHook(() => useGetData<Character>('', 'character'), { wrapper: wrapperError });

        await waitFor(() => expect(result.current.rickAndMortyQuery.isSuccess).toBeFalsy());
        await waitFor(() => expect(result.current.rickAndMortyQuery.data).toBeUndefined());
        await waitFor(() => expect(result.current.rickAndMortyQuery.status).toBe('error'));
        await waitFor(() => expect(result.current.rickAndMortyQuery.isError).toBeTruthy());
        await waitFor(() => expect((result.current.rickAndMortyQuery.error as AxiosError).response?.data).toEqual('Internal'));
        await waitFor(() => expect((result.current.rickAndMortyQuery.error as AxiosError).response?.status).toEqual(500));
    });

    test('should return not found error', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').replyOnce(404, 'Not found');

        const { result } = renderHook(() => useGetData<Character>('', 'character'), { wrapper: wrapperError });

        await waitFor(() => expect(result.current.rickAndMortyQuery.isSuccess).toBeFalsy());
        await waitFor(() => expect(result.current.rickAndMortyQuery.data).toBeUndefined());
        await waitFor(() => expect(result.current.rickAndMortyQuery.status).toBe('error'));
        await waitFor(() => expect(result.current.rickAndMortyQuery.isError).toBeTruthy());
        await waitFor(() => expect((result.current.rickAndMortyQuery.error as AxiosError).response?.data).toEqual('Not found'));
        await waitFor(() => expect((result.current.rickAndMortyQuery.error as AxiosError).response?.status).toEqual(404));
    });

    test('should return loading', async () => {
        const { result } = renderHook(() => useGetData<Character>('', 'character'), { wrapper: wrapperError });

        await waitFor(() => expect(result.current.rickAndMortyQuery.isLoading).toBeTruthy());
        await waitFor(() => expect(result.current.rickAndMortyQuery.data).toBeUndefined());
    });

});