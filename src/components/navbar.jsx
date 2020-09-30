import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Collegram</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signin" className="nav-link">Sign In</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign up</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}