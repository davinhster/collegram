import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar";

import "./landing.css";

function Landing() {
  return (
    <section className="landing">
      <Navbar />
      <div className="landing1">
        <h1 className="landingHeader"> Collegram </h1>
        <h2 className="landingSubheader"> The best college social network! </h2>
        <div className="divider" />
        <Link to="/signin">
          <button className="button" id="login_button">
            {" "}
            Login{" "}
          </button>
        </Link>
        <div className="divider" />
        <Link to="/signup">
          <button className="button" id="register_button">
            {" "}
            Register{" "}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
