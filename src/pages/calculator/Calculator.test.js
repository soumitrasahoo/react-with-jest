import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from "./Calculator";

describe(Calculator, () => {
    it('Initially First Input field should be blank', () => {
        render(<Calculator />);

        const input = screen.queryByTestId('input1');
        expect(input).toHaveValue(null);
    });

    it('Initially Second Input field should be blank', () => {
        render(<Calculator />);

        const input = screen.queryByTestId('input2');
        expect(input).toHaveValue(null);
    });

    it('Initially Total Input field should be blank', () => {
        render(<Calculator />);

        const input = screen.queryByTestId('total');
        expect(input).toHaveValue(null);
    });

    it('add button should enable if both values are there', () => {
        render(<Calculator />);
        const input1 = screen.queryByTestId('input1');
        const input2 = screen.queryByTestId('input2');
        fireEvent.change(input1, { target: { value: 10 } });
        fireEvent.change(input2, { target: { value: 2 } });
        const addBtn = screen.getByRole("button", { name: '+' });
        expect(addBtn).toBeEnabled();
    });

    it('Reset button should enable if any one of the value is there', () => {
        render(<Calculator />);
        const input2 = screen.queryByTestId('input2');
        fireEvent.change(input2, { target: { value: 2 } });
        const resetBtn = screen.getByRole("button", { name: 'Reset' });
        expect(resetBtn).toBeEnabled();
    });

    it('Should add both number after click on the plus button', () => {
        render(<Calculator />);
        const input1 = screen.queryByTestId('input1');
        const input2 = screen.queryByTestId('input2');
        fireEvent.change(input1, { target: { value: 10 } });
        fireEvent.change(input2, { target: { value: 2 } });
        const addBtn = screen.getByRole("button", { name: '+' });
        fireEvent.click(addBtn);
        const total = screen.queryByTestId('total');
        expect(total).toHaveValue(12);
    });

    it('Should substruct both number after click on the minus button', () => {
        render(<Calculator />);
        const input1 = screen.queryByTestId('input1');
        const input2 = screen.queryByTestId('input2');
        fireEvent.change(input1, { target: { value: 10 } });
        fireEvent.change(input2, { target: { value: 2 } });
        const addBtn = screen.getByRole("button", { name: '-' });
        fireEvent.click(addBtn);
        const total = screen.queryByTestId('total');
        expect(total).toHaveValue(8);
    });

    it('Should multiply both number after click on the multiplication button', () => {
        render(<Calculator />);
        const input1 = screen.queryByTestId('input1');
        const input2 = screen.queryByTestId('input2');
        fireEvent.change(input1, { target: { value: 10 } });
        fireEvent.change(input2, { target: { value: 2 } });
        const addBtn = screen.getByRole("button", { name: 'X' });
        fireEvent.click(addBtn);
        const total = screen.queryByTestId('total');
        expect(total).toHaveValue(20);
    });

    it('Should devide both number after click on the division button', () => {
        render(<Calculator />);
        const input1 = screen.queryByTestId('input1');
        const input2 = screen.queryByTestId('input2');
        fireEvent.change(input1, { target: { value: 10 } });
        fireEvent.change(input2, { target: { value: 2 } });
        const addBtn = screen.getByRole("button", { name: '/' });
        fireEvent.click(addBtn);
        const total = screen.queryByTestId('total');
        expect(total).toHaveValue(5);
    });
});