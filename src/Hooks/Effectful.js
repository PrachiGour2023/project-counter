import React, { useEffect, useState } from 'react'

const Effectful = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return window.removeEventListener("click", handleClick);
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleCounterUpdate = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleCounterUpdate}>Click Me</button>
        </div>
    )
}

export default Effectful