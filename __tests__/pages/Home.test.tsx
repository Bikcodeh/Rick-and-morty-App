import { BrowserRouter } from 'react-router-dom';
import * as reactQuery from 'react-query';
import { render } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';
import { QueryClientProvider } from 'react-query';
import { rickAndMortyApi } from '../../src/api/rickAndMortyApi';
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { ApiResponse, Character, StatusCharacter } from '../../src/interfaces';
import { Home } from '../../src/pages';

const mock = new MockAdapter(rickAndMortyApi);

const client = new reactQuery.QueryClient()

function renderWithClient(client: reactQuery.QueryClient, ui: React.ReactElement) {
    const { container } = render(
        <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    )
    return {
        container
    }
}

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

const dataSuccess: ApiResponse<Character> = {
    info: {
        count: 826,
        prev: null,
        next: "https://rickandmortyapi.com/api/character?page=2",
        pages: 42
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
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/13",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/17",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/24",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/27",
                "https://rickandmortyapi.com/api/episode/28",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/34",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/37",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/50",
                "https://rickandmortyapi.com/api/episode/51"
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
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/13",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/17",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/24",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/27",
                "https://rickandmortyapi.com/api/episode/28",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/34",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/37",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/50",
                "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/2",
            created: "2017-11-04T18:50:21.651Z"

        },
        {

            id: 3,
            name: "Summer Smith",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Female",
            origin: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/17",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/24",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/27",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/34",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/3",
            created: "2017-11-04T19:09:56.428Z"

        },
        {

            id: 4,
            name: "Beth Smith",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Female",
            origin: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/24",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/27",
                "https://rickandmortyapi.com/api/episode/28",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/34",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/4",
            created: "2017-11-04T19:22:43.665Z"

        },
        {

            id: 5,
            name: "Jerry Smith",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/13",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/50",
                "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/5",
            created: "2017-11-04T19:26:56.301Z"

        },
        {

            id: 6,
            name: "Abadango Cluster Princess",
            status: StatusCharacter.ALIVE,
            species: "Alien",
            type: "",
            gender: "Female",
            origin: {
                name: "Abadango",
                url: "https://rickandmortyapi.com/api/location/2"
            },
            location: {
                name: "Abadango",
                url: "https://rickandmortyapi.com/api/location/2"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/27"
            ],
            url: "https://rickandmortyapi.com/api/character/6",
            created: "2017-11-04T19:50:28.250Z"

        },
        {

            id: 7,
            name: "Abradolf Lincler",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "Genetic experiment",
            gender: "Male",
            origin: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
                name: "Testicle Monster Dimension",
                url: "https://rickandmortyapi.com/api/location/21"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11"
            ],
            url: "https://rickandmortyapi.com/api/character/7",
            created: "2017-11-04T19:59:20.523Z"

        },
        {

            id: 8,
            name: "Adjudicator Rick",
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
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/28"
            ],
            url: "https://rickandmortyapi.com/api/character/8",
            created: "2017-11-04T20:03:34.737Z"

        },
        {

            id: 9,
            name: "Agency Director",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/24"
            ],
            url: "https://rickandmortyapi.com/api/character/9",
            created: "2017-11-04T20:06:54.976Z"

        },
        {

            id: 10,
            name: "Alan Rails",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "Superhuman (Ghost trains summoner)",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Worldender's lair",
                url: "https://rickandmortyapi.com/api/location/4"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/25"
            ],
            url: "https://rickandmortyapi.com/api/character/10",
            created: "2017-11-04T20:19:09.017Z"

        },
        {

            id: 11,
            name: "Albert Einstein",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/12"
            ],
            url: "https://rickandmortyapi.com/api/character/11",
            created: "2017-11-04T20:20:20.965Z"

        },
        {

            id: 12,
            name: "Alexander",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
                name: "Anatomy Park",
                url: "https://rickandmortyapi.com/api/location/5"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/3"
            ],
            url: "https://rickandmortyapi.com/api/character/12",
            created: "2017-11-04T20:32:33.144Z"

        },
        {

            id: 13,
            name: "Alien Googah",
            status: StatusCharacter.ALIVE,
            species: "Alien",
            type: "",
            gender: "unknown",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/31"
            ],
            url: "https://rickandmortyapi.com/api/character/13",
            created: "2017-11-04T20:33:30.779Z"

        },
        {

            id: 14,
            name: "Alien Morty",
            status: StatusCharacter.ALIVE,
            species: "Alien",
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
            image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10"
            ],
            url: "https://rickandmortyapi.com/api/character/14",
            created: "2017-11-04T20:51:31.373Z"

        },
        {

            id: 15,
            name: "Alien Rick",
            status: StatusCharacter.ALIVE,
            species: "Alien",
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
            image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10"
            ],
            url: "https://rickandmortyapi.com/api/character/15",
            created: "2017-11-04T20:56:13.215Z"

        },
        {

            id: 16,
            name: "Amish Cyborg",
            status: StatusCharacter.ALIVE,
            species: "Alien",
            type: "Parasite",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/15"
            ],
            url: "https://rickandmortyapi.com/api/character/16",
            created: "2017-11-04T21:12:45.235Z"

        },
        {

            id: 17,
            name: "Annie",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "",
            gender: "Female",
            origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
                name: "Anatomy Park",
                url: "https://rickandmortyapi.com/api/location/5"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/3"
            ],
            url: "https://rickandmortyapi.com/api/character/17",
            created: "2017-11-04T22:21:24.481Z"

        },
        {

            id: 18,
            name: "Antenna Morty",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "Human with antennae",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/28"
            ],
            url: "https://rickandmortyapi.com/api/character/18",
            created: "2017-11-04T22:25:29.008Z"

        },
        {

            id: 19,
            name: "Antenna Rick",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "Human with antennae",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "unknown",
                url: ""
            },
            image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10"
            ],
            url: "https://rickandmortyapi.com/api/character/19",
            created: "2017-11-04T22:28:13.756Z"

        },
        {

            id: 20,
            name: "Ants in my Eyes Johnson",
            status: StatusCharacter.ALIVE,
            species: "Human",
            type: "Human with ants in his eyes",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Interdimensional Cable",
                url: "https://rickandmortyapi.com/api/location/6"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/8"
            ],
            url: "https://rickandmortyapi.com/api/character/20",
            created: "2017-11-04T22:34:53.659Z"

        }]
}

const dataSuccess2: ApiResponse<Character> =
{

    info: {
        count: 826,
        pages: 42,
        next: "https://rickandmortyapi.com/api/character?page=3",
        prev: "https://rickandmortyapi.com/api/character?page=1"
    },
    results: [
        {
            id: 21,
            name: "Aqua Morty",
            status: StatusCharacter.ALIVE,
            species: "Humanoid",
            type: "Fish-Person",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/22"
            ],
            url: "https://rickandmortyapi.com/api/character/21",
            created: "2017-11-04T22:39:48.055Z"
        },
        {
            id: 22,
            name: "Aqua Rick",
            status: StatusCharacter.ALIVE,
            species: "Humanoid",
            type: "Fish-Person",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/28"
            ],
            url: "https://rickandmortyapi.com/api/character/22",
            created: "2017-11-04T22:41:07.171Z"
        },
        {
            id: 23,
            name: "Arcade Alien",
            status: StatusCharacter.ALIVE,
            species: "Alien",
            type: "",
            gender: "Male",
            origin: {
                name: "unknown",
                url: ""
            },
            location: {
                name: "Immortality Field Resort",
                url: "https://rickandmortyapi.com/api/location/7"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/13",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26"
            ],
            url: "https://rickandmortyapi.com/api/character/23",
            created: "2017-11-05T08:43:05.095Z"
        },
        {
            id: 24,
            name: "Armagheadon",
            status: StatusCharacter.ALIVE,
            species: "Alien",
            type: "Cromulon",
            gender: "Male",
            origin: {
                name: "Signus 5 Expanse",
                url: "https://rickandmortyapi.com/api/location/22"
            },
            location: {
                name: "Signus 5 Expanse",
                url: "https://rickandmortyapi.com/api/location/22"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/16"
            ],
            url: "https://rickandmortyapi.com/api/character/24",
            created: "2017-11-05T08:48:30.776Z"
        },
        {
            id: 25,
            name: "Armothy",
            status: StatusCharacter.ALIVE,
            species: "unknown",
            type: "Self-aware arm",
            gender: "Male",
            origin: {
                name: "Post-Apocalyptic Earth",
                url: "https://rickandmortyapi.com/api/location/8"
            },
            location: {
                name: "Post-Apocalyptic Earth",
                url: "https://rickandmortyapi.com/api/location/8"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/23"
            ],
            url: "https://rickandmortyapi.com/api/character/25",
            created: "2017-11-05T08:54:29.343Z"
        },
        {
            id: 26,
            name: "Arthricia",
            status: StatusCharacter.ALIVE,
            species: "Alien",
            type: "Cat-Person",
            gender: "Female",
            origin: {
                name: "Purge Planet",
                url: "https://rickandmortyapi.com/api/location/9"
            },
            location: {
                name: "Purge Planet",
                url: "https://rickandmortyapi.com/api/location/9"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/20"
            ],
            url: "https://rickandmortyapi.com/api/character/26",
            created: "2017-11-05T08:56:46.165Z"
        }
    ]

}

describe('Tests for <Home />', () => {

    beforeEach(() => {
        mock.reset()
    })

    test('should match snapshot', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').reply(200, dataSuccess);
        const { container } = await act(() =>
            renderWithClient(
                client,
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
        );
        expect(container).toMatchSnapshot();
    });

    test('should render correctly', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').reply(200, dataSuccess);
        await act(() =>
            renderWithClient(
                client,
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
        );
        expect(screen.getByText('Morty Smith')).toBeInTheDocument();
        expect(screen.getByText('Ants in my Eyes Johnson')).toBeInTheDocument();
        expect(screen.getByLabelText('prev-button')).toBeDisabled()
        expect(screen.getByLabelText('next-button')).toBeEnabled()
    });

    test('should invoke navigate when click on some character card', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').reply(200, dataSuccess);
        await act(() =>
            renderWithClient(
                client,
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
        );
        const element = screen.getAllByLabelText('container-character');
        fireEvent.click(element[0])
        expect(mockUseNavigate).toHaveBeenCalledWith("/character/1");
    });

    test('should paginate when click on next button correctly', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').reply(200, dataSuccess);
        const { container } = renderWithClient(
            client,
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const nextButton = await screen.findByLabelText('next-button');
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=2').reply(200, dataSuccess2);
        await act(async () => {
            fireEvent.click(nextButton);
        });
        expect(container.getElementsByClassName('characterContainer').length).toBe(6)

    });

    test('should paginate when click on prev button correctly', async () => {
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=1').reply(200, dataSuccess);
        const { container } = await act(() =>
            renderWithClient(
                client,
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
        );

        const nextButton = await screen.findByLabelText('next-button');
        mock.onGet('https://rickandmortyapi.com/api/character?name=&page=2').reply(200, dataSuccess2);
        await act(async () => {
            fireEvent.click(nextButton);
        });

        await waitFor(() => new Promise((res) => setTimeout(res, 600)));
        const prevButton = await screen.findByLabelText('prev-button');

        await act(async () => {
            fireEvent.click(prevButton);
        });
        expect(container.getElementsByClassName('characterContainer').length).toBe(20);
    });
});