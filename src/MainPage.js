import { useState } from 'react';
import './index.css';
import SubMainPage from './SubMainPage';
const MainPages = ()=>{
    const [myName,setMyname]=useState('YourName');

    const [movie,setMovie]=useState([{title:'Starwars', director: "George lucas", id:1},
        {title:'Titanic', director: "James Cameron", id:2},
        {title:'Charles Angel', director: "McG", id:3}

    ])
    const delMe = (id)=>{
        const newMov = movie.filter((mov)=>mov.id !== id)
        setMovie(newMov);
    /*const handleSelect = ()=> {
        setMyname('Codix');
   
    } */

    }
    return(
    <div className='content'> 
        <h1>
           Main Page
        </h1>
         <p>'hello' {myName}</p>
         <p> {movie.map((movies)=>(
            <div className='styleNatin' >
            <p>Movie name: {movies.title};</p>
            <p>Movie Director: {movies.director}</p>

            <button onClick={()=>delMe(movies.id)}>Delete</button>
            </div>
            
         )

         )}</p>
        
         <div>
            <SubMainPage/>
         </div>
    </div> );
    // <button onClick={handleSelect}>press</button>
}

export default MainPages;