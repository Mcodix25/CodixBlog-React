import { useState } from 'react';
import './index.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Creates = () => {

    const [titled,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [Author,setAuthor] =useState('Aron')
    const [isPending,setIspending]=useState(false)
    const history = useHistory();

    const handleSubmit = ((e)=>{
        e.preventDefault();

        const blog = { titled, body, Author}
        console.log(blog);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-type':"application/json"},
            body: JSON.stringify(blog) }).then(()=>{
                console.log('new blog added');
                setIspending(false);
                history.push('/');
            })

    })

    
    return ( 
        <div>
        <h2> Create a new Blogs here</h2>
      
        <form className='create' onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input 
            type="text"
            required
            value={titled}
            onChange={(e)=>(setTitle(e.target.value))}
            />
            <label >Blog body</label>
          <textarea required
          value={body}
          onChange={((e)=>setBody(e.target.value))}> 
        
          </textarea>
          <label>Blog Author:</label>
          <select value={Author}
          onChange={((e)=>setAuthor(e.target.value))}>
            <option value="Aron"> Aron</option>
            <option value="Bernard"> Bernard</option>
            <option value="Cardo"> Cardo</option>
          </select>
          {!isPending && <button>Add blog</button>}
          {isPending && <button disabled>Adding... blog</button>}
          
         

        </form>
        </div>
     );
}
 
export default Creates;