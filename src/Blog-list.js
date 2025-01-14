//import { useState } from "react";

const Bloglist = ({handleDelete,blogs,title}) => {
  
    
    return ( 
       <div className='blog-list'>
        <h2>{title}</h2>
        {blogs.map((blogsm)=>(
            <div className="blog-preview" key={blogsm.id}>
                <h1>{blogsm.title}</h1>
                <p>{blogsm.body}</p>
                <p>{blogsm.Author}</p>
                <button onClick={()=>handleDelete(blogsm.id)}>Delete</button>
            </div>
        ))}
      
       </div>
     );
}
 
export default Bloglist; 