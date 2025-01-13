import { useState } from "react"

const DivisionThree = ()=>{

    const[item,newItem]=useState([{pants:'adult',size:'large',id:1},
                                  {pants:'teens',size:'medium',id:2},
                                  {pants:'kids',size:'small',id:3}

    ])
    const handleDelete = (id)=>{
        const newItems = item.filter((itemt)=>itemt.id !==id)
        newItem(newItems);
    }

    return(
        <>
        {item.map((items)=><div className='styleNatin'> 
        <p>{items.pants}</p> <p>{items.size}</p>
        <button onClick={()=>handleDelete(items.id)}>Delete</button>
        </div>)}
        
        </>
    )
}

export default DivisionThree