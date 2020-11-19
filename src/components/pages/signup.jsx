import React, {Component, useState } from 'react'
import GLogin from '../GLogin';


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
            </div>
            )
            }   
}

export default Signup