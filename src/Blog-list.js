//import { useState } from "react";

const Bloglist = ({handleDelete,blogs,title}) => {
  
    
    return ( 
       <div className='blog-list'>
        <h2>{title}</h2>
        {blogs.map((blogsm)=>(
            <div className="blog-preview" key={blogsm.id}>
                <h1>{blogsm.titled}</h1>
                <p>{blogsm.body}</p>
                <p>{blogsm.Author}</p>
                
            </div>
            /* <button onClick={()=>handleDelete(blogsm.id)}>Delete</button>*/
        ))}
      
       </div>
     );
}
 
export default Bloglist; 