import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
       
        <h1>Bank of Reacts</h1>

        <Link to="/UserProfile">User Profile</Link>
        <br></br>
        <Link to="/Login">Login</Link>
        <br></br>
        <Link to="/Debits">Debits</Link>
        <br></br>
        <Link to="/Credits">Credits</Link>

        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;
