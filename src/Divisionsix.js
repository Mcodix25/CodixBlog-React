import { useState } from "react"
const Divisionsix = ()=>{

    const [item,setItem]= useState([{pants:'adult',size:'large',id:1},
        {pants:'teens',size:'medium',id:2},
        {pants:'kids',size:'small',id:3}])
    
    const handleDelete = (id)=>{
        const newItems = item.filter((itemf)=>itemf.id !==id)
        setItem(newItems);
    }
    return(
        <div className="divOne">
        <h2> Division Six </h2>
        <p>
        {item.map((itemm)=>
            <p className="styleNatin">
                <p>{itemm.pants} </p>
                <p>{itemm.size} </p>
                <button onClick={()=>handleDelete(itemm.id)}>Delete</button>
            </p>)}
        </p>
        </div>
    )
}

export default Divisionsix;