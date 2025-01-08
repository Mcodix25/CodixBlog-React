import { useState } from "react";

const PageThree = () => {
    const[people,setPeople]=useState('mark');
    const[people2,setPeople2]=useState('mark2')

    const handclicking = ()=>{
        setPeople ('john');
        setPeople2 ('john2');
    }

    return (  
        <div >
        <h1> Page3</h1>
        <h2> {people}'+'{people2}</h2>
        <button onClick={handclicking} >changeName</button>
        </div>
    );
}
 
export default PageThree;