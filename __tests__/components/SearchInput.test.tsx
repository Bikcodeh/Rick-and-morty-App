import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchInput } from '../../src/components';

describe('Tests for SearchInput', () => {

    const mockOnInputChange = jest.fn()
    const mockOnSearch = jest.fn()
    test('should render correctly', () => {
        render(<SearchInput placeholder='test' text='hola' onInputChange={mockOnInputChange} onSearch={mockOnSearch} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('hola');
    });

    test('should call onInputChange', () => {
        render(<SearchInput placeholder='test' text='hola' onInputChange={mockOnInputChange} onSearch={mockOnSearch} />);
        const input = screen.getByLabelText('search-input').querySelector('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: '42' } });
        expect(mockOnInputChange).toHaveBeenCalledWith('42');
    });

    test('should call onSearch', () => {
        render(<SearchInput placeholder='test' text='hola' onInputChange={mockOnInputChange} onSearch={mockOnSearch} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnSearch).toHaveBeenCalled();
    });
});