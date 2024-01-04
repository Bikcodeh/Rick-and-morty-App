import React from 'react';
import { render, screen } from '@testing-library/react';
import { Status } from '../../src/components';
import { StatusCharacter } from '../../src/interfaces';

describe('Tests for <Status/>', () => {

    test('should render status alive correctly', () => {
        render(<Status status={StatusCharacter.ALIVE} />);
        const container = screen.getByLabelText("container-status")
        const containerStyles = window.getComputedStyle(container);
        expect(screen.getByText(StatusCharacter.ALIVE)).toBeTruthy();
        expect(containerStyles.backgroundColor).toBe('green');
    });

    test('should render status dead correctly', () => {
        render(<Status status={StatusCharacter.DEAD} />);
        const container = screen.getByLabelText("container-status")
        const containerStyles = window.getComputedStyle(container);
        expect(screen.getByText(StatusCharacter.DEAD)).toBeTruthy();
        expect(containerStyles.backgroundColor).toBe('red');
    });

    test('should render status unknown correctly', () => {
        render(<Status status={StatusCharacter.UNKNOWN} />);
        const container = screen.getByLabelText("container-status")
        const containerStyles = window.getComputedStyle(container);
        expect(screen.getByText(StatusCharacter.UNKNOWN)).toBeTruthy();
        expect(containerStyles.backgroundColor).toBe('gray');
    });
});