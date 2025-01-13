import { useState } from "react";
import PropsData from "./PropsData";

const DivisionNine = () => {

    const [item,setItem]= useState([
        {pants:'adult',size:'large',id:1},
        {pants:'teens',size:'medium',id:2},
        {pants:'kids',size:'small',id:3}
        
    ])

    const handleDelete = (id)=>{
    const newItem=item.filter((itemf)=>itemf.id!==id)
    setItem(newItem);
}
    return ( 
      <div>
      <PropsData propsItem={item} propsHandleDelete={handleDelete}/>
      </div>
     );
}
 
export default DivisionNine;