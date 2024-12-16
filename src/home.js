import { useState } from "react";
const Home = () => {
    const [click1,setClick1] = useState('click1');
    const [click2,setClick2] = useState ('click2');
    const[click3,setClick3] = useState ('click3');

    const handleClicky = () =>{
        setClick1 ('Click1 was done');}
     
    
    const handleClick2 = () =>{
        setClick2 ('click2 was done');
    }

    const handleClick3 = ()=>{
        setClick3("reset 3");
    }
    
   
    return ( 
        <div className="Home">
          <h2>Home page</h2>
          <p>{click1}</p>
          <button onClick={handleClicky}>B1</button>

          <p>{click2}</p>
          <button onClick={handleClick2}>B2</button>
          
          <p>{click3}</p>
          <button onClick={handleClick3}>B3</button>
        </div>
        
     );}
 
export default Home;