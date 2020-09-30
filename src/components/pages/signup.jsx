import React, {Component, useState } from 'react'
import GLogin from '../GLogin';


class Signup extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        <section>
            <div className="Signup">
                <form onSubmit={this.handleSubmit}>
                    <label> Email </label>
                    <input type="email" name="email" onChange={this.handleChange} />

                    <label> Password </label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <input type="submit" value="Register" />
                </form>
                <h1> Google Signup </h1>
                <GLogin/>
            </div>
        </section>
            )
            }   
}

export default Signup