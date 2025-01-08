import {useState} from 'react';
const Pagefive = ()=>{
    const [guess,setGuess]=useState('initialguess');

    const handleClickM = ()=>{
       setGuess('newGuess!')
    }

    return(
        <div>
       <p>{guess}</p>
       <button onClick={handleClickM}>click5</button>
        </div>
    )

}

export default Pagefive;