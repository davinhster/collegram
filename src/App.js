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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
