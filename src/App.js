import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Home = () => (
  <div>
    <h2>First Page</h2>
    
  </div>
)

const Add = () => (
  <div>
    <h2>Second Page</h2>
    
  </div>
)



const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">First Page</Link></li>
        <li><Link to="/second">Second Page</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/second" component={Add}/>
    </div>
  </Router>
)
export default BasicExample
