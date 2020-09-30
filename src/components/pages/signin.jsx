import React, {Component} from 'react';


export default class Login extends Component {



    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            username : '',
            password : '',
        }
      }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
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

    onSubmit() {

        var passwordHash = require('password-hash');
        var hashedPassword = passwordHash.generate(this.state.password);

        const user = {
            username : this.state.username,
            password : hashedPassword,
        }

        console.log(user);
        console.log(this.state.password);
        //replace hashedPassword with GET PASSWORD from database to see if the input matches password
        if (passwordHash.verify(this.state.password,hashedPassword))
        {
            console.log("YESSS VALIDATION WORKS");
        }
        else
        {
            console.log("password and hash does not match");
        }
    }

    render() {

        return (

            <div>
                <h3> Login </h3>



                <form onSubmit = {this.onSubmit}>
                    <div className =  "form-group">
                        <label>Username: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Password</label>
                        <input type = "password"
                            required
                            className = "form-control"
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                        />
                    </div>
                    <div className = "form-group">
                        <input type = "submit" value = "Login" className = "btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    };

}