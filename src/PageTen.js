import { useState } from "react";
import Bloglist from "./Blog-list";

const PageTen = () =>{
  
    const [blog,setBlog]=useState([
        {title:'Title1',body:'Body1, it is body1', author:'author1',id:1},
        {title:'Title2',body:'Body2, it is body2', author:'author2',id:2},
        {title:'Title3',body:'Body3, it is body3', author:'author3',id:3}
    ])
    return (
     <div>
      <Bloglist blogi={blog}/>
     </div>
    )

    }
   



export default PageTen;