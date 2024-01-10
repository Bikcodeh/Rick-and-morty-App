import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormSelect } from '../../src/components';
describe('Tests for <FormSelect />', () => {

    const mockOnChange = jest.fn();
    test('should render correctly', () => {
        render(<FormSelect text='1' onChangeValue={mockOnChange} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
});