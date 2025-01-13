import { useState } from "react";

const DivisionFour = ()=>{

    const [item,setItem]=useState([{pants:'adult',size:'large',id:1},
        {pants:'teens',size:'medium',id:2},
        {pants:'kids',size:'small',id:3}
])
    const handleDelete =(id)=>{
       const newItemi = item.filter((items)=>items.id !==id)
       setItem(newItemi);

    }

    return(
        <div className="divTwo">
            <h2> Div 4</h2>
            {item.map((itemr)=><p className='styleNatin'><p>{itemr.pants}</p> <p>{itemr.size}</p>
            <button onClick={()=>handleDelete(itemr.id)}>Deleto</button>
            </p>)}
        </div>
    )
}

export default DivisionFour;