import React, { useEffect, useState } from "react";
import './Counter.css';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const handleDecrease = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(0);
    };

    useEffect(() => {
        const messages = ['Yay', 'Wowzie', 'Bazinga'];
        const index = Math.floor(Math.random() * 3);

        setMessage(messages[index]);

        const timerId = setTimeout(() => {
            setMessage('');
          }, 3000);

        return clearTimeout(timerId);
    }, [counter]);

    return (
    <section className="counter">
        <div className="buttons">
            <button className="button" onClick={handleIncrease}>+</button>
            <button className="button" onClick={handleDecrease}>-</button>
            <button className="button" onClick={handleReset}>Reset</button>
        </div>
        <p>Counter: {counter}</p>
        <p>{message}</p>
    </section>
    )
};