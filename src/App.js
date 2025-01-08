
import PageTwo from './PageTwo';
import PageOne from './PageOne';
import Headline from './Headline';
import Navbar from './Navbar';
import Home from './home';
import PageThree from './PageThree';
import PageFour from './PageFour';
import Pagefive from './PageFive';
import PageNine from './PageNine';
import PageTen from './PageTen';
import Bloglist from './Blog-list';
//import './index.css';

function App(){
  const title= "welcome to the new blog testing to"
  
  return (
    <div className ="App">
      <Navbar   />
      <Headline/>
      
      <div className="content">
      <Home />
      <p>{title}</p>
      </div>
      <div>
      <PageOne/>
      <PageTwo/>
       <div className="content">
        <PageThree/>
        <br />
        <PageFour/>
        <br/>
        <Pagefive/>
        <br/>
        <PageNine/>
        <br/>
        <PageTen/>
        <br/>
        <Bloglist/>

       </div>

      </div>
     
     
    </div>

  )
}



export default App;
