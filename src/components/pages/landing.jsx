import React from 'react';
import { Link } from "react-router-dom";

import './landing.css'

function Landing(){
    return(
        <section className="landing">
            <div className="landing1">
                <h1 className="landingHeader"> Collegram </h1>
                <h2 className="landingSubheader"> The best college social network! </h2>
                <Link to="/signin">
                    <button className="loginBtn"> Login </button>
                </Link>
                <div className="divider"/>
                <Link to="/signup">
                    <button className="registerBtn"> Register </button>
                </Link>
            </div>
        </section>
    )
}

export default Landing