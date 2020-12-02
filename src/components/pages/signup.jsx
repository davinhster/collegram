import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Navbar from "../navbar";

// import GLogin from '../GLogin';
import "./signup.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: null,
      password: null,
      firstName: null,
      lastName: null
    };
  }

  handleSubmit = function (e) {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      hashedPassword: this.state.password,
      email: this.state.email
    };


    // Axios.post('http://collegramserver.herokuapp.com/users/register', user)
    Axios.post('http://localhost:5000/users/register', user)
      .then(res => {console.log(res.data);
       this.props.history.push('/home');
      })
      .catch((err) =>{
        console.log(err);
      })

    console.log("Clicked");
    console.log(user);
  };

  handleChange = function (e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="Signup">
        <div className="navbar_signup">
          <Navbar />
        </div>
        <div className="Signupcontainer">
          <div className="signupHalf leftHalf">
            <h1 className="leftHeader"> Welcome Back! </h1>
            <h2 className="leftDesc">
              {" "}
              Already have an account? It's great to see you again{" "}
            </h2>
            <div>
              <Link to="/signin">
                <button className="signinBtn"> Sign in </button>
              </Link>
            </div>
          </div>

          <div className="signupHalf">
            <h1 className="rightHeader"> Create Account </h1>
            <form onSubmit={this.handleSubmit}>

              <h3 className="formInput"> First Name  </h3>
              <input type="text" name="firstName" onChange={this.handleChange} />

              <h3 className="formInput"> Last Name </h3>
              <input type="text" name="lastName" onChange={this.handleChange} />


              <h3 className="formInput"> Email </h3>
              <input type="email" name="email" onChange={this.handleChange} />

              <h3 className="formInput"> Password </h3>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />

              <input className="registerBtn" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
