import { useEffect, useState } from "react";

const State = () =>{

    const [set,setCount] = useState(0);
    const [background,setBackground] = useState('white')

    useEffect(() => {
        console.log(`вы нажали ${set}`);
        const newBackground = set % 2 === 0 ? 'white' : 'CornflowerBlue';
        setBackground(newBackground);
    })

    return(
        <div>
            <h1 style={{background}}>вы нажали {set} раз</h1>
        <button onClick={() => setCount(set + 1)}>
            Нажми меня
        </button>c
        </div>
    )
}


export default State;