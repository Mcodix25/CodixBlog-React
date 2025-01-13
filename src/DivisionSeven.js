import { useState } from "react";
const DivisionSeven = () => {

   const [item,setItem]=useState([{pants:'adult',size:'large',id:1},
    {pants:'teens',size:'medium',id:2},
    {pants:'kids',size:'small',id:3}
   ])
   const handleDelete = (id)=>{
    const newItem = item.filter((itemm)=>itemm.id!==id)
    setItem(newItem);
   }

    return ( 
        <div className="divTwo">
            <h2>divSeven</h2>
            <p>
                {item.map((itemm)=>
                    <p>
                         {itemm.pants}  
                         {itemm.size}
                         <button onClick={()=>handleDelete (itemm.id)}>delete</button>
                    </p>
                    
                   
                )}
            </p>
        
        </div>
     );
}
 
export default DivisionSeven;