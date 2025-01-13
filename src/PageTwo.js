import { useState } from "react";
import './index.css';

const PageTwo = () => {
    const[blogs,setBlog]= useState([
        {title: 'title1', body:'body1', author:'author1' ,id:1},
        {title: 'title2', body:'body2', author:'author2' ,id:2},
        {title: 'title3', body:'body3', author:'author3' ,id:3}
    ])
    const deltMe = (id)=>{
      const newBlogs= blogs.filter((bloge)=>bloge.id !== id)
      setBlog(newBlogs);
    }
    
    return ( 
        <div className="content">
        <div className="home">
            <h1>PAGETWO</h1>
            {blogs.map((blogi)=>(
                <div className="blog-preview" key={blogi.id}>
                    <h2>{blogi.title}</h2>
                    <p>Written by {blogi.author}</p>
                    <p>{blogi.body}</p>
                    <button onClick={()=>deltMe(blogi.id)}>delTwo</button>

                </div>
            )
            
        )

            }
        
        </div>
        </div>
     );
}
 
export default PageTwo;