import { useState } from "react";
import Bloglist from "./Blog-list";


const PageTen = () =>{
  
    const [blog,setBlog]=useState([
        {title:'Title1',body:' it is body1', author:'author1',id:1},
        {title:'Title2',body:' it is body2', author:'author2',id:2},
        {title:'dixon1',body:' it is body3', author:'dixon',id:3},
        {title:'Title3',body:' it is body3', author:'author3',id:4},
        {title:'dixon2',body:' it is body3', author:'dixon',id:5},
        {title:'dixon3',body:' it is body3', author:'dixon',id:6}
    ])

    const handleDelete=(id)=>{
       const newBlog = blog.filter(blogo=>blogo.id !== id);
       setBlog(newBlog);
    }
  
    
    return (
    <>
    <Bloglist blogi={blog} title="Page Ten here first!" handleDelete={handleDelete}/>
    <Bloglist blogi={blog.filter((blogo)=>blogo.author==='dixon')} title="Page Ten here filter!" handleDelete={handleDelete} />
    <br/>
    <Bloglist blogi={blog.filter((blogi)=>(blogi.title==='Title1'))} title="Page Ten here!" handleDelete={handleDelete}/>

    
    </>
   
    )

    }
   



export default PageTen;