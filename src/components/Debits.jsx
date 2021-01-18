import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { DebitDisplay, } from "./Index";

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
      <div>
        <DebitDisplay debitInfo={debit}/>
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
    console.log("here", this.state.debitAmount)
    if ((this.state.debitDescription != "") && (this.state.debitAmount != "")) {
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
        <h1>Bank of React</h1>
        <h2>Debits</h2>
        Balance: <div className="balance">{this.props.accountBalance} </div>
        <Link to="/">Home</Link>
         <br />
        <div id="form">
            <form onSubmit={this.handleSubmit} className="add-depit">
            <label> <br />
              Description: <input type="text" name="debitDescription" value={this.state.debitDescription} onChange={this.handleChange} />
            </label>  
            <label> 
              Amount: <input min="0" type="number" name="debitAmount" value={this.state.debitAmount} onChange={this.handleChange} />
            </label>  
            <input class="button" type="submit" value="Submit" /> 
          </form>
        </div>
        {this.displayDebits()}
      </div>
    );
  }
}
