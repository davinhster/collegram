import React, {Component} from 'react'
import './about.css'

class About extends Component {

        constructor(props){
            super(props);
        }

        render(){

            return(
            <section className="About">
                
                <div className="About1">
                    <h1 className="aboutHeader"> About page </h1>
                </div>
                <p>Collegram is a social network where you can connect with 
                    friends and classmates. Need to reach out to one of 
                    your classmates to finish their part of a project? 
                    Collegram offers a chat option so you can chat with 
                    them in real time! What are you waiting for?
                     Register now!</p>
                <div className="Home2">
    
                </div>
            </section>
        )
        }
    }


export default About