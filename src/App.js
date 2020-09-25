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
import Login from './components/pages/signin'
import Signup from './components/pages/signup'
import Home from './components/pages/home'
import Navbar from './components/navbar'


function App() {
  return (
    <div className="App">
      {/* <Router>
      <Navbar / >
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signin">
            <Login /> 
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router> */}

      <Router>
      <div className = "container">

      <Navbar />
      <br/>
      <Route path="/" exact component={Landing} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />

      </div>
      </Router>
    </div>
  );
}

export default App;
