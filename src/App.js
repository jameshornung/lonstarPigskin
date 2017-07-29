import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home.js';
import ManagerProfiles from './components/ManagerProfiles.js';
import Records from './components/Records.js';

const Add = () => (
  <div>
    <h2>Second Page</h2>
  </div>
)

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/records">Records</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/profiles" component={ManagerProfiles}/>
      <Route path="/records" component={Records}/>
    </div>
  </Router>
)
export default Routes;
