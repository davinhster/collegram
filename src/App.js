import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/pages/Landing/landing'
import Login from './components/pages/signin'
import Signup from './components/pages/signup'
import Home from './components/pages/Home/home'
import Navbar from './components/navbar'
import About from './components/pages/about'


function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
<<<<<<< HEAD
=======
      <Route path ="/about" component= {About} />

      </div>
>>>>>>> 23808447cea017f76a80a56ee7077414a0aea8a0
      </Router>
    </div>
  );
}

export default App;
