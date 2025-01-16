//import { useEffect, useState } from "react";
import Bloglist from "./Blog-list";
import useFetch from "./useFetch";

const Home = () => {
  
      const{data:blogs,pending,error}=useFetch('http://localhost:8000/blogs');
   
     
    /*const handleDelete = (id)=>{
        const newBlog = blogs.filter((blogsf)=>blogsf.id !==id)
        setData(newBlog); } */

    
  
    
    return ( 
        <div className="Home">
        {error && <div> {error}</div>}
        {pending && <div> Loading....</div>}
       {blogs && <Bloglist /* handleDelete={handleDelete} */blogs={blogs} title="All blogs!"/> }
          
        </div>
        
     );}
 
export default Home;