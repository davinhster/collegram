import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Landing from './components/pages/landing'
import Signin from './components/pages/signin'
import Signup from './components/pages/signup'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signin">
            <Signin /> 
          </Route>
          <Route path="signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
