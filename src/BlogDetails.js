import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}=useParams();
    const history = useHistory()

    const handleDeletes = (()=>{
      fetch('http://localhost:8000/blogs/' + blogs.id,{
        method: 'DELETE'

      }).then(()=>{
        history.push('/')
      })

    })
    
      const {data:blogs,pending,error}=useFetch('http://localhost:8000/blogs/'+id);
    return ( 
        <div className="blog.details">
           
            {pending && <div>maghintay... loading..</div>}
            {error && <div>{error + ' new error'}</div>}
           
           {blogs && (
                <article>
                   <h2> {blogs.titled} </h2>
                   <div> {blogs.body} </div>
                   <p> wrote by: {blogs.Author}</p>
                   <button onClick={handleDeletes}>delete</button>
                </article>
            )}   
            
              </div>

              /*
       <h2>blog details - {id} </h2>
            */  

  
     );
}
 
export default BlogDetails;