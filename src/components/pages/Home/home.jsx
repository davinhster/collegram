import React, { Component } from "react";
import "./home.css";
import Navbar from "../../navbar";
import Feed from "../../feed";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
  </tr>
);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://collegramserver2.herokuapp.com/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  usersList() {
    return this.state.users.map((currentUser) => {
      return <User user={currentUser} />;
    });
  }

  render() {
    return (
      <section className="Home">
        <Navbar />



        <div className="Home2">
          <h1 className="homeHeader"> Welcome Home </h1>
        </div>
        <Feed />





        <h3>My friends</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </section>
    );
  }
}
