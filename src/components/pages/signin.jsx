import React, {Component} from 'react'
import { Form, Button} from "react-bootstrap";


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

        return (
        
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        )
    };

}