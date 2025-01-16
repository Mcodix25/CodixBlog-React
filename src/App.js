

import Navbar from './Navbar';
import Home from './home';
import './index.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Creates from './Creates';

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
         
        </Switch>
    
      </div>
     
     
    </div>
    </Router>
  )
}



export default App;
