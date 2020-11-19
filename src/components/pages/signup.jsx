import React, {Component, useState } from 'react'
import { Link } from "react-router-dom";

// import GLogin from '../GLogin';
import './signup.css'



class Signup extends Component{
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
    };

    handleChange = function(e){
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value });
    }


    render(){
    return(
<<<<<<< HEAD
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
               
=======
        <div>
                <h3> Register </h3>



                <form onSubmit = {this.onSubmit}>
                    <div className =  "form-group">
                        <label>Username </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}
                        />
                    </div>
                    <div className =  "form-group">
                        <label>Email </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Password</label>
                        <input type = "password"
                            required
                            className = "form-control"
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                        />
                    </div>
                    <div className = "form-group">
                        <button className="button"> Register </button>
                    </div>
                </form>
                <h3> Register Using a Google Account </h3>
                <GLogin/>
>>>>>>> 23808447cea017f76a80a56ee7077414a0aea8a0
            </div>
            )
            }   
}

export default Signup