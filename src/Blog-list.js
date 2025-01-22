//import { useState } from "react";
import './index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import useFetch from './useFetch';


const Bloglist = ({handleDelete,blogs,title}) => {
    
    return ( 
       <div className='blog-list'>
        <h1 >{title}</h1>
        {blogs.map((blogsm)=>(
            <div className="blog-preview" key={blogsm.id}>
                <Link to={`/blogs/${blogsm.id}`}>
                <h2 className='h2tag'>{blogsm.titled}</h2>
                <p> written by: {blogsm.Author}</p>
               
                </Link>
              
                
            </div>
            /*<button onClick={()=>handleDelete(blogsm.id)}>Delete</button>*/
        ))}
      
       </div>
     );
}
 
export default Bloglist; 