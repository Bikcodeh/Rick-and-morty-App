import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';
import { useGetEpisode } from '../../src/hooks/useEpisode';
import { rickAndMortyApi } from '../../src/api/rickAndMortyApi';
import { Character, Episode, StatusCharacter } from '../../src/interfaces';
import { AxiosError } from 'axios';

const data: Episode = {
    id: 1,
    name: "Pilot Test",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
    ],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z"
}

const dataCharacter: Character[] = [

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
        episode: ["https://rickandmortyapi.com/api/episode/1",],
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
        episode: ["https://rickandmortyapi.com/api/episode/1"],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
    }
]

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: true,
        },
    },
});

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

const wrapperCustom = ({ children }) => (
    <QueryClientProvider client={queryClientCustom}>{children}</QueryClientProvider>
);


describe('Tests for useEpisode hook', () => {

    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(rickAndMortyApi);
    })

    afterEach(() => {
        mock.reset()
    })

    test('should return error', async () => {
        mock.onGet('https://rickandmortyapi.com/api/episode/1').replyOnce(500, 'Internal');

        const { result } = renderHook(() => useGetEpisode('1'), { wrapper: wrapperCustom });

        await waitFor(() => expect(result.current.episodeQuery.isSuccess).toBeFalsy());
        await waitFor(() => expect(result.current.episodeQuery.data).toBeUndefined());
        await waitFor(() => expect(result.current.episodeQuery.status).toBe('error'));
        await waitFor(() => expect(result.current.episodeQuery.isError).toBeTruthy());
        await waitFor(() => expect((result.current.episodeQuery.error as AxiosError).response?.data).toEqual('Internal'));
    });

    test('should return data correctly', async () => {
        mock.onGet('https://rickandmortyapi.com/api/episode/3').replyOnce(200, data);
        mock.onGet('https://rickandmortyapi.com/api/character/1,2').replyOnce(200, dataCharacter);
        const { result } = renderHook(() => useGetEpisode('3'), { wrapper });

        await waitFor(() => expect(result.current.episodeQuery.isSuccess).toBe(true));
        await waitFor(() => expect(result.current.charactersQuery.isSuccess).toBe(true));
        await waitFor(() => expect(result.current.episodeQuery.data).toEqual(data));
        await waitFor(() => expect(result.current.charactersQuery.data).toEqual(dataCharacter));
        await waitFor(() => expect(result.current.episodeQuery.status).toBe('success'));
    });
});