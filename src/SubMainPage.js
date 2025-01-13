import { useState } from "react";

const SubMainPage = () => {
    
    const [movie,setMovie]=useState([{title:'Starwars', director: "George lucas", id:1},
        {title:'Titanic', director: "James Cameron", id:2},
        {title:'Charles Angel', director: "McG", id:3}

    ])
    const delMe = (id)=>{
        const newMov = movie.filter((mov)=>mov.id !== id)
        setMovie(newMov);
    
    } 
    const [myName,setMyname]=useState('YourName');
    const handleSelect = ()=> {
        setMyname('Codix');

    }
    
    return (  
        <div className='content'> 
            <h2>SubMainPage</h2>
           

         <p>{myName}</p>
         <button onClick={handleSelect}>pressMe</button>
         
         <p> {movie.map((movies)=>(
            <div className='styleNatin' >
            <p>Movie name: {movies.title};</p>
            <p>Movie Director: {movies.director}</p>

            <button onClick={()=>delMe(movies.id)}>Delete</button>
            </div>   
         )

         )}</p>
            
        </div>
    );
}
 
export default SubMainPage ;