import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";
import Navbar from "../navbar";
import ValidatedLoginForm from "./validatesignin";
import { Formik } from "formik";
import * as Yup from "yup";
import "./signin.css";


import axios from "axios";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 

    this.state = {
      // dataEmail: "",
      // dataPassword: "",
      formError: false,
      data: {},
      redirectToReferrer: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handled submission");
  }


  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  Signin() {
    return (
      <section>
        <div className="Sign in">
          <h1> Signin Page </h1>
          <button onClick={this.handleEvent}> Click here</button>
        </div>
      </section>
    );
  }


  render() {
    var redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        
        <Navbar />
        <h1 className="signInHeader"> Login </h1>
        <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {

          var data = {};
     

          setTimeout(() => {
            console.log("Attempting Login", values);
            setSubmitting(false);
          }, 500)

          axios.get("http://localhost:5000/users/email/" + values.email)
          .then (response => { 
            //this.setState({dataEmail:response.data.email, dataPassword:response.data.hashedPassword});
            this.setState({data:response.data}, () => {console.log(this.state.data, " Raw data")});
            console.log("testing print start");
            if(this.state.data == null )
            {
              this.setState({formError:true});
              console.log(this.state.formError);
              console.log("Invalid Email/Passowrd");
            }
            else
            {
              console.log("Email is correct :)");
  
            }
            if(this.state.data.hashedPassword == values.password)
            {
              console.log("Passwords are correct :)");
              this.setState({redirectToReferrer:true});
            }
            else
            {
              console.log("Incorrect password: Passwords not matching :(");
              console.log("Password input: " + values.password);
            }
            console.log("print after test");
          })
          .catch (e => {
              console.log(e);
          });        
        }}

        validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
        >

          {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (

            
            <form onSubmit={handleSubmit}>
                {this.state.formError? <div className = "form-error">Incorrect Email/Password</div> : null}
              <label htmlFor="email">Email</label>
              
                <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
                />

                {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
                )}

              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
                />
                
                {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
                )}
            
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              
              
            </form>

            
          );
        }}
        </Formik>

      </div>
    );
   
  }
}
