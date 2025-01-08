//import { useState } from "react";

const Bloglist = (props) => {
    const blog= props.blogi;
    
    return ( 
        <div className='blog-list'>
            <h1> BlogList</h1>
        {blog.map((blogs)=>(
            <p>{blogs.title}
               {blogs.author}
               {blogs.author}
            </p>
        ))}
        </div>
     );
}
 
export default Bloglist;