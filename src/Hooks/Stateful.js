import React, { useContext, useState } from 'react';
import { userContext } from './context';

const Stateful = () => {
    
    const {user, setUser} = useContext(userContext);
    const [car, setCar] = useState({
        brand: "ford",
        model: "mustang",
        year: 1998,
        color: "red"
    })

    const randColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    }
    const ChangeColor = () => {
        setCar({ ...car, color: randColor() })
    }

    const handleClick = () => {
        setUser("Nikhil Gour");
    }
    return (
        <div>
            <p style={{ color: car.color }}>{car.color}</p>
            <button onClick={() => ChangeColor()}>Change Color</button>
            <p>{user}</p>
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}

export default Stateful