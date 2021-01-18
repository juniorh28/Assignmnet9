import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { CreditDisplay } from "./Index";

export default class Debits extends Component {
  constructor (props) {
    super(props)
    this.state = {
      creditDescription: "",
      creditAmount: "",
    }
  }
  
  displayCredits = () => {
    return (this.props.credits.map((credit) =>
      <div>
        <CreditDisplay creditInfo={credit}/>
        <br />
      </div>
    ))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if ((this.state.creditDescription != "") && (this.state.creditAmount != "")) {
      this.props.subFromBalance(this.state.creditAmount)
      this.props.addToCredits({
        description: this.state.creditDescription,
        amount: this.state.creditAmount,
        date: new Date().toString()
      })
      this.setState({
        creditDescription: "",
        creditAmount: "",
      })
    } else {
      window.alert("Please enter a discription and an amount (in numbers)")
    }
  }
    
  render() {
    return (
      <div>
        <h1>Bank of React</h1>
        <h2>Credits</h2>
        Balance: <div className="balance">{this.props.accountBalance} </div>
        <Link to="/">Home</Link>
         <br />
        <div id="form">
            <form onSubmit={this.handleSubmit} className="add-depit">
            <label> <br />
              Description: <input type="text" name="creditDescription" value={this.state.creditDescription} onChange={this.handleChange} />
            </label>  
            <label> 
              Amount: <input min="0" type="number" name="creditAmount" value={this.state.creditAmount} onChange={this.handleChange} />
            </label>  
            <input class="button" type="submit" value="Submit" /> 
          </form>
        </div>
        {this.displayCredits()}
      </div>
    );
  }
}

