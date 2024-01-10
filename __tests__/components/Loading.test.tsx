import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from '../../src/components';

describe('Tests for <Loading />', () => {

    test('should render correctly', () => {
        render(<Loading />)
        expect(screen.getByRole('progressbar')).toBeTruthy();
    });
});