import React, {Component} from 'react'


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
      }

    handleEvent() {
        console.log(this.props);
    }

    Signin(){
        return(
            <section>
                <div className="Sign in">
                    <h1> Signin Page </h1>
                    <button onClick = {this.handleEvent}> Click here</button>
                </div>
            </section>
        )
    }

    render() {
        return this.Signin();
    };

}
//export default Signin