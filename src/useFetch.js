import { useEffect,useState } from "react";

const useFetch=((url)=>{

    const [data,setData] = useState(null);

    const[pending,setPending]=useState(true);  

    const[error,setError]=useState(null);

    useEffect(()=>{
      //  const abortCont= new AbortController();
        setTimeout(()=>{
            fetch(url/*,{signal:abortCont.signal} */)
            .then(res=>{
                if(!res.ok){
                    throw new Error("Cant find ur request, error");   
                }
            
               return res.json();
            })
            .then (data=>{  
               setData(data);
               setPending(false);  
               setError(null);
            })
            .catch(err=>{
                setPending(false)
                setError(err.message)
            })
        },1000);

       // return ()=>console.log (" clean up")
       
    },[url]);

    return{data,pending,error};

})
export default useFetch;