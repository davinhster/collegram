import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Home from './components/pages/home'
import Navbar from './components/navbar'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar / >
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signin">
            <Signin /> 
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
