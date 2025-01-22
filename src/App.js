

import Navbar from './Navbar';
import Home from './home';
import './index.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Creates from './Creates';
import BlogDetails from './BlogDetails';
import NewPage from './NewPage';
import Notfound from './Notfound';

//'react-router-dom/cjs/react-router-dom.min';



function App(){
  return (
    <Router>
    <div className ="App">
      <Navbar   />
      
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Creates />
          </Route>
          <Route path = "/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path = "/newpage">
            <NewPage />
          </Route>
          <Route path = "*">
            <Notfound />
          </Route>
         
        </Switch>
    
      </div>
     
     
    </div>
    </Router>
  )
}



export default App;
