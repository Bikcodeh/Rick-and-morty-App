import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '../../src/components';

describe('Tests for <Title />', () => {
    test('should render correctly', () => {
        render(<Title text='Test Title' />);
        expect(screen.findByText('Test Title')).toBeTruthy();
    });

    test('should be a h4 component', () => {
        render(<Title text='Test Title' />);
        expect(screen.getByRole('heading', { level: 4 })).toBeTruthy();
    });
});