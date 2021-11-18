import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import { Menu, Grid } from "semantic-ui-react";
import "./App.css";
function App() {
 
  return (
    <Router>
   
      <div>
        <nav className='Nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            
          </ul>
        </nav>

        <Switch>
          <Route path="/analytics">
            <Analytics />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
