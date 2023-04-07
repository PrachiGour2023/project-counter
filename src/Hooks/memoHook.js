import React, { useMemo, useState } from 'react';

const MemoHook = () => {

    const [countOne, setCountOne] = useState(0);
    const [todo, setTodo] = useState([]);

    const increment = () => {
        setCountOne(countOne => countOne + 1);
    }

    const addTodo = () => {
        setTodo((todo) => [...todo, "New Todo"]);
    }

    const calculation = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
    }, [countOne]);

    return (
        <div>
            {
                todo.map((item, i) => {
                    return (
                        <p key={i}>{item}</p>
                    )
                })
            }
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={increment}>count : {countOne}</button>
            <span>{calculation}</span>
        </div>
    )
}

export default MemoHook;
