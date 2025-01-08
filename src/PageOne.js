import { useState } from "react";

const PageOne = () => {
    const[nem,setNem]= useState('mac');
    const[age,setAge]=useState(33);
    const[weigth,setWeight]=useState(64)

    const handleClicks =() =>{
        setNem('pavs');  
        setAge('44');
        setWeight(75);
    }
    const [nem1,setNem1]=useState('name1')
    const handleClicks2 = ()=>{
        setNem1('accomplished setted');
    }

 
    return ( 
        <>
        <h1>Page1</h1>
        <header>
            This is header for Page One
        </header>
        <section>
            <p>here is the Section</p>
            <p >your name is || {nem} and you are {age}, your weigth is {weigth}|| {nem1}</p>
            <h1>Input page </h1>
        <label for="input1">typeHere</label>
        <input type="text" className="input1"/>
        
          
            <button onClick={handleClicks}>ClickMe</button>
            <button onClick={handleClicks2}>clickmeRin</button>
        </section>
        </>
        
     );
}
 
export default PageOne;