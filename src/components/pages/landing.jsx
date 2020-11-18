import React from 'react';
import { Link } from "react-router-dom";

import './landing.css'

function Landing(){
    return(
        <section className="landing">
            <div className="landing1">
                <h1 className="landingHeader"> Collegram </h1>
                <Link to="/signup">
                    <button className="registerBtn"> Register </button>
                </Link>
            </div>
        </section>
    )
}

export default Landing