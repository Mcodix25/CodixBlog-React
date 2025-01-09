import { useState } from "react"
import MainPage from "./MainPage";

const PageNine=()=>{

    const [item,setItem]= useState(["Aida","Lorna","Fe"])
    //const [blog,setBlog]= useState('')

    const handleSelector =()=>{
        setItem('Final Item');

    }
    return(
        <div>
            <p>Hello!, this is Page 9 {item}</p>
            <button onClick={handleSelector}>press 9 </button>
            <p> {item.map((girl)=>(
                <div>
                <p>
                  hello {girl} ; 
            </p>
            
            <br/>
            
             
            
                
                
                </div>
            ))}</p>
        </div>
    )

}
export default PageNine;