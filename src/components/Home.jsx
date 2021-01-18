import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bank of React</h1>
        Balance: <div className="balance">${this.props.accountBalance} </div> <br/>
        <Link to="/UserProfile">User Profile</Link>
        <br></br>
        <Link to="/Login">Login</Link>
        <br></br>
        <Link to="/Debits">Debits</Link>
        <br></br>
        <Link to="/Credits">Credits</Link>

        
      </div>
    );
  }
}

export default Home;
