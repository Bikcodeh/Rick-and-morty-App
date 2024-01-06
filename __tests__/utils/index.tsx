import React from 'react';
import * as reactQuery from 'react-query';
import {render } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';
import { QueryClientProvider } from 'react-query';
import { rickAndMortyApi } from '../../src/api/rickAndMortyApi';
import '@testing-library/jest-dom';

export const mock = new MockAdapter(rickAndMortyApi);

export const client = new reactQuery.QueryClient()

export function renderWithClient(client: reactQuery.QueryClient, ui: React.ReactElement) {
    const { container } = render(
        <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    )
    return {
        container
    }
}