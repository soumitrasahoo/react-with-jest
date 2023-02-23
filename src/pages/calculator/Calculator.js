import { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
    const initialValue = {
        input1: '',
        input2: '',
        total: ''
    }
    const [inputValue, setInputValue] = useState({ ...initialValue });
    const { input1, input2, total } = inputValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: parseFloat(value)
        });
    };

    const addition = () => {
        setInputValue({
            ...inputValue,
            total: (input1 + input2)
        });
    }

    const substruction = () => {
        setInputValue({
            ...inputValue,
            total: (input1 - input2)
        });
    }
    const multiplication = () => {
        setInputValue({
            ...inputValue,
            total: (input1 * input2)
        });
    }
    const division = () => {
        setInputValue({
            ...inputValue,
            total: (input1 / input2)
        });
    }
    const reset = () => {
        setInputValue({ ...initialValue });
    }
    const isDisabled = () => {
        return ((input1 || input1 === 0) && (input2 || input2 === 0)) ? false : true;
    }
    const isDisabledReset = () => {
        return (input1 || input1 === 0 || input2 || input2 === 0 || total || total === 0) ? false : true;
    }

    return (
        <div className="container">
            <h1>Calculator</h1>
            <div className="calculator">
                <div className="input-area">
                    <input
                        type="number"
                        name="input1"
                        placeholder="Enter Number"
                        data-testid="input1"
                        value={input1}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="input2"
                        placeholder="Enter Number"
                        value={input2}
                        data-testid="input2"
                        onChange={handleChange}
                    />
                    <p>=</p>
                    <input
                        type="number"
                        name="total"
                        data-testid="total"
                        value={total}
                        disabled
                    />
                </div>
                <div className="button-area">
                    <button type="button" onClick={addition} disabled={isDisabled()}>+</button>
                    <button type="button" onClick={substruction} disabled={isDisabled()}>-</button>
                    <button type="button" onClick={multiplication} disabled={isDisabled()}>X</button>
                    <button type="button" onClick={division} disabled={isDisabled()}>/</button>
                    <button type="button" onClick={reset} disabled={isDisabledReset()}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Calculator;