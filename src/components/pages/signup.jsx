import React, {Component, useState } from 'react'
import { Link } from "react-router-dom";

// import GLogin from '../GLogin';
import './signup.css'



export default class Signup extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: null,
            password: null
        }
    }
    handleSubmit = function(e){
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        console.log("Clicked");
    };

    handleChange = function(e){
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value });
    }


    render(){
    return(
        <section className="Signup">
            <div className="Signupcontainer">

                <div className="signupHalf leftHalf">
                    <h1 className="leftHeader"> Welcome Back! </h1>
                    <h2 className="leftDesc"> Already have an account? It's great to see you again </h2>
                    <div>
                        <Link to="/signin">
                        <button className="signinBtn"> Sign in </button>

                        </Link>
                    </div>
                </div>

                <div className="signupHalf">

                    <h1 className="rightHeader"> Create Account </h1>
                    <form onSubmit={this.handleSubmit}>


                        <h3 className="formInput"> Email </h3>
                        <input type="email" name="email" onChange={this.handleChange} />

                        <br />

                        <h3 className="formInput"> Password </h3>
                        <input type="password" name="password" onChange={this.handleChange}/>

                        <br />

                        <input className="registerBtn" type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </section>
               
    )}
}