//import { useState } from "react";

const Bloglist = ({blogi,title,hey,handleDelete}) => {
   //const blog= props.blogi;
   // const titled = props.title;
  
    
    return ( 
        <div className='blog-list'>
            <h1> BlogList {title}</h1>
            <p>{hey}</p>
        {blogi.map((blogs)=>(
            <p>{blogs.title}
               {blogs.body}
               {blogs.author}
               <button onClick= {()=>handleDelete(blogs.id) }>Delete</button>
            </p>
           
        ))}
        </div>
     );
}
 
export default Bloglist; 