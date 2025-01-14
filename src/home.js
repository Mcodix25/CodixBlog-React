import { useEffect, useState } from "react";
import Bloglist from "./Blog-list";

const Home = () => {
  

    const [blogs,setBlogs] = useState([
        {
            title: "My first Blog",
            body: " first body that caan be use as sample",
            Author: "Aron",
            id: 1
        },
        {
            title: "My second Blog",
            body: " second body that caan be use as sample",
            Author: "Bernard",
            id: 2},
        {
    
            title: "My 3rd Blog",
            body: " 3rd body that caan be use as sample",
            Author: "Cardo",
            id: 3
        }  
    ])
    
     
    const handleDelete = (id)=>{
        const newBlog = blogs.filter((blogsf)=>blogsf.id !==id)
        setBlogs(newBlog);

    } 
    useEffect(()=>{
        console.log('use effect running');
       
    },[]);
    
    return ( 
        <div className="Home">
            
       <Bloglist handleDelete={handleDelete} blogs={blogs} title="All blogs!"/>
       
       <p>{name}</p>
       
       
          
        </div>
        
     );}
 
export default Home;