import axios from "axios";

export const chractersApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {}
})