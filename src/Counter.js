import React, { useEffect, useState, useRef } from "react";
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

    const timerRef = useRef(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const messages = ['Yay', 'Wowzie', 'Bazinga'];
        const index = Math.floor(Math.random() * 3);

        if (!isFirstRender.current) {
            setMessage(messages[index]);
        }

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setMessage('');
        }, 3000);

        isFirstRender.current = false;
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