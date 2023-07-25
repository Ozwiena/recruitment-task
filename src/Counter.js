import React, { useState } from "react";
import './Counter.css';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
    <section className="counter">
        <div className="buttons">
            <button className="button" onClick={handleIncrease}>+</button>
            <button className="button" onClick={handleDecrease}>-</button>
            <button className="button" onClick={handleReset}>Reset</button>
        </div>
        <p>Counter: {count}</p>
    </section>
    )
};