import { useState } from "react";
import './index.css';

const PageTwo = () => {
    const[blogs,setBlog]= useState([
        {title: 'title1', body:'body1', author:'author1' ,id:1},
        {title: 'title2', body:'body2', author:'author2' ,id:2},
        {title: 'title3', body:'body3', author:'author3' ,id:3}
    ])
    
    return ( 
        <div className="content">
        <div className="home">
            <h1>PAGETWO</h1>
            {blogs.map((blogi)=>(
                <div className="blog-preview" key={blogi.id}>
                    <h2>{blogi.title}</h2>
                    <p>Written by {blogi.author}</p>
                    <p>{blogi.body}</p>

                </div>
            )
            
        )

            }
        
        </div>
        </div>
     );
}
 
export default PageTwo;