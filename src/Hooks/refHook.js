import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {

    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);
    const inputElement = useRef('');
    const getPrevValue = useRef('');
    // console.log(getPrevValue);

    useEffect(() => {
        count.current = count.current + 1;
        getPrevValue.current = inputValue;
    }, [inputValue]);

    const inputFocus = () => {
        inputElement.current.focus();
    }

    return (
        <div>
            <input
                type='text'
                name='name'
                ref={inputElement}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <p>{count.current}</p>
            <button onClick={inputFocus}>Get Focus</button>
            <p>{inputValue}</p>
            <h5>{getPrevValue.current}</h5>
        </div>
    )
}

export default RefHook