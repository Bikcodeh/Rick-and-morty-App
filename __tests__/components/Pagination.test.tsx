import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from '../../src/components';

describe('Tests for <Pagination />', () => {
    const onNextMock = jest.fn()
    const onPrevMock = jest.fn()
    test('should render correctly', () => {
        render(<Pagination
            currentPage='1'
            prevAvailable={false}
            nextAvailable
            onNext={onNextMock}
            onPrev={onPrevMock}
            isFetching={false} />
        );
        expect(screen.getByText('1')).toBeTruthy();
        expect(screen.getByLabelText('next-button')).toBeEnabled();
        expect(screen.getByLabelText('prev-button')).toBeDisabled();
    });

    test('should call onNext when click on next button', () => {
        const onNextMock = jest.fn()
        const onPrevMock = jest.fn()
        render(<Pagination
            currentPage='1'
            prevAvailable={false}
            nextAvailable
            onNext={onNextMock}
            onPrev={onPrevMock}
            isFetching={false} />
        );
       fireEvent.click(screen.getByLabelText('next-button'));
       expect(onNextMock).toHaveBeenCalled();
    });

    test('should call onPrev when click on prev button', () => {
        const onNextMock = jest.fn()
        const onPrevMock = jest.fn()
        render(<Pagination
            currentPage='1'
            prevAvailable={true}
            nextAvailable
            onNext={onNextMock}
            onPrev={onPrevMock}
            isFetching={false} />
        );
       fireEvent.click(screen.getByLabelText('prev-button'));
       expect(onPrevMock).toHaveBeenCalled();
    });
});