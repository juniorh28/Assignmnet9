import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { DebitDisplay, AccountBalance } from "./Index";

export default class Debits extends Component {
  constructor (props) {
    super(props)
    this.state = {
      debitDescription: "",
      debitAmount: "",
    }
  }
  displayDebits = () => {
    
    return (this.props.debits.map((debit) =>
      <DebitDisplay debitInfo={debit}/>
    ))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if ((this.state.debitDescription != "") && this.state.debitDescription != "") {
      this.props.addToBalance(this.state.debitAmount)
      this.props.addToDebits({
        description: this.state.debitDescription,
        amount: this.state.debitAmount,
        date: new Date().toString()
      })
      this.setState({
        debitDescription: "",
        debitAmount: "",
      })
    } else {
      window.alert("Please enter a discription and an amount (in numbers)")
    }
  }
    
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Debits</h1> <br />
        Account Balance: {this.props.accountBalance}
        <form onSubmit={this.handleSubmit} className="add-depit">
          <label> <br />
            Description: <input type="text" name="debitDescription" value={this.state.debitDescription} onChange={this.handleChange} />
          </label>  <br />
          <label> <br />
            Amount: <input type="number" name="debitAmount" value={this.state.debitAmount} onChange={this.handleChange} />
          </label>  <br />
          
          <input class="button" type="submit" value="Submit" />
      </form>
        {this.displayDebits()}
      </div>
    );
  }
}
