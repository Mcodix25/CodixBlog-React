import { useState } from "react";


const PageFour = ()=>{
 
const [sports,setSports]= useState('bowling');

const handleClikx = ()=>{
    setSports('swimming');
}

return(
    <>
    <button onClick={handleClikx}>press</button>
    <h2>{sports}</h2></>
)
}

export default PageFour;