import * as reactQuery from 'react-query';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';

import { ApiResponse, Location } from '../../src/interfaces';
import { Locations } from '../../src/pages';
import { rickAndMortyApi } from '../../src/api/rickAndMortyApi';

const mock = new MockAdapter(rickAndMortyApi);

const client = new reactQuery.QueryClient()

describe('Tests for <Locations />', () => {
    test('should render correctly', () => {

    });
});