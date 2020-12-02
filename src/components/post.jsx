import React from 'react'
import './postList'

function post(props){
    return(
        <section>
            <div className="post">
                <h4> {props.status} </h4> 
                <h5 className="post-author"> </h5>
            </div>
       
        </section>
    )
};


export default post