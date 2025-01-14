import { useEffect, useState } from "react";
import Bloglist from "./Blog-list";

const Home = () => {
  

    const [blogs,setBlogs] = useState(null);

    const[pending,setPending]=useState(true);  
     
    const handleDelete = (id)=>{
        const newBlog = blogs.filter((blogsf)=>blogsf.id !==id)
        setBlogs(newBlog);

    } 
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res=>{
               return res.json();
            })
            .then (data=>{  
               setBlogs(data);
               setPending(false);
              
            })
        },1000);
       
    },[]);
    
    return ( 
        <div className="Home">
        {pending && <div> Loading....</div>}
       {blogs && <Bloglist handleDelete={handleDelete} blogs={blogs} title="All blogs!"/> }
          
        </div>
        
     );}
 
export default Home;