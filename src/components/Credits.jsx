import React, { Component } from "react";
import { Link } from "react-router-dom";
class Credits extends Component {
  state = {
    user: [],
  };

  render() {
    return (
      <div>
        <h1>Credits</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Credits;
