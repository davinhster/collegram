import React, { Component } from "react";
import "./about.css";
import Navbar from "../navbar";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="About">
        <div>
          <Navbar />
        </div>
        <div className="About1">
          <h1 className="aboutHeader"> About page </h1>
        </div>
        <h3 className="landingDescription">
          {" "}
          Collegram is a social network where you can connect with friends and
          classmates. Need to reach out to one of your classmates to finish
          their part of a project? Collegram offers a chat option so you can
          chat with them in real time! What are you waiting for? Register now!{" "}
        </h3>
        <div className="Home2"></div>
      </section>
    );
  }
}

export default About;
