import React from 'react';
import { Link } from "react-router-dom";

import './landing.css'

function Landing(){
    return(
        <section className="landing">
            <div className="landing1">
                <h1 className="landingHeader"> Collegram </h1>
                <h2 className="landingSubheader"> The best college social network! </h2>
                <div className="divider"/>
                <h3 className="landingDescription"> Collegram is a social network where you can connect with friends and classmates. Need to reach out to one of your classmates to finish their part of a project? Collegram offers a chat option so you can chat with them in real time! What are you waiting for? Register now! </h3>
                <Link to="/signin">
                    <button className="button"> Login </button>
                </Link>
                <div className="divider"/>
                <Link to="/signup">
                    <button className="button"> Register </button>
                </Link>
            </div>
        </section>
    )
}

export default Landing