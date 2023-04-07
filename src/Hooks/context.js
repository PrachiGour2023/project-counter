import React, { useState } from 'react';
import { createContext } from 'react';
import Stateful from './Stateful';

export const userContext = createContext();

const Context = () => {
    const [user, setUser] = useState("Prachi");
    //   console.log(userContext);

    return (
        <div>
            <userContext.Provider value={{user, setUser}}>
                <Stateful />
            </userContext.Provider>
        </div>
    )
}

export default Context;