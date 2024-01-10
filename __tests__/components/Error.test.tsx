import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from '../../src/components';
import { handleError } from '../../src/helpers';
import { AxiosError } from 'axios';

describe('Tests for <Error />', () => {
    test('should render correctly with undefined error', () => {
        render(<Error />);
        expect(screen.getByLabelText('animation')).toBeTruthy();
        expect(screen.getByRole('heading', { level: 5 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 5 }).textContent).toBe(handleError(undefined));
    });

    test('should render correctly with server error', () => {
        const axiosError = {
            message: 'Network Error',
            response: {
              status: 500,
              data: 'Internal Server Error',
            },
          } as AxiosError;
        render(<Error error={axiosError}/>);
        expect(screen.getByLabelText('animation')).toBeTruthy();
        expect(screen.getByRole('heading', { level: 5 })).toBeTruthy();
        expect(screen.getByRole('heading', { level: 5 }).textContent).toBe(handleError(500));
    });
});