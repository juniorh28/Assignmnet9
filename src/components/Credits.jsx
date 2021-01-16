import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Credits extends Component {
  handleChange(e) {
    let cityname = e.target.value;
    let cityInput = cityname.toUpperCase();

    const url = `http://ctp-zip-api.herokuapp.com/city/${cityInput}`;
    axios
      .get(url)
      .then((res) => {
        const response = res.data;
        let zipArr = [];
        for (const i in response) {
          zipArr.push(response[i]);
        }

        this.setState({
          zipcode: zipArr,
        });
      })
      .catch(console.error());
  }

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
