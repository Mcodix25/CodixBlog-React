//import {useEffect} from 'react'
import { useState,} from "react"
import PropsData from "./PropsData"

const DivisionEigth =()=>{

    
    const [item,SetItems]=useState([
        {pants:'adult',size:'large',id:1},
        {pants:'teens',size:'medium',id:2},
        {pants:'kids',size:'small',id:3}   ]
    )

        const handleDelete = (id)=>{
         const newItems=item.filter((itemf)=>itemf.id!==id)
         SetItems(newItems);
        }

        const [name,setName]= useState('codix');

       /* const changeNameClick = ()=>{
            setName('pavia');
        } */
/*
    useEffect(()=>{

       fetch('http://localhost:8000/blog')
       .then(res=> {
        return res.json();
       })
       .then(data=>{
        console.log(data)
       })
    },[name]); */


    return(
        
        <div className="divTwo">
            <p> {name}</p>
           <PropsData propsItem={item} propsHandleDelete={handleDelete} title='title1'/>
           <PropsData propsItem={item.filter((itemf)=>itemf.id===3)} propsHandleDelete={handleDelete} title='title2'/>
            <button onClick={()=>setName('piolo')}>clickchange</button>
        </div>
        
    )
}

export default DivisionEigth;