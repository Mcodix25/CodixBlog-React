import { useState } from "react";

const DivisionTwo =()=>{
    const [book,setBook]= useState([{libro:'Corinto',body:"CorintoBody",id:"a"},{libro:'Roma',body:"RomaBody",id:"2"},{libro:'Efeso', body:"EfesoBody",id:"c"},{libro:'Filipos',body:"FiliposBody",id:"d"}])
    
    const handleClicks =(id)=>{
        const newBook = book.filter((filtbook)=> filtbook.id !== id)
        setBook(newBook);
    }

    return(
        <div> 
        <h2>Division two </h2>
        <p>{book.map((booki)=>
            <p className='styleNatin'>
            {booki.libro}<br/>{booki.body} <br/>
            <button onClick={()=>handleClicks(booki.id)}>del</button>
        </p>
    
    )}</p>
      
       
      
        </div>
    )
}

export default DivisionTwo;
