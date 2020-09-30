import React from 'react'

function Signup(){


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    handleSubmit = (evt) =>{
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
    }

    handleChange = (evt) => {
        event.preventDefault();
        const {name, value} = event.target;
    }

    return(
        <section>
            <div className="Signup">
                <form>
                    <label> Email </label>
                    <input type="email" name="email" onChange={this.handleChange} />

                    <label> Password </label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                </form>
            </div>
        </section>
    )
}

export default Signup