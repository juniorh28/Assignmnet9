import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { DebitDisplay, AccountBalance } from "./Index";

export default class Debits extends Component {
  constructor (props) {
    super(props)
    this.state = {
      debitInfo: [],
      debitAmount: "",
      toggle: false
    }
  }

  async componentDidMount() {
    try {
      let response = await axios.get(
        'https://moj-api.herokuapp.com/debits'
      );
      let debits = response.data;
      let totalDebit = 0;
      for (let debit of debits){
          this.state.debitInfo.push({
            description: debit.description,
            amount: debit.amount,
            date: debit.date
          })
        totalDebit += debit.amount
      }
      this.props.addToBalance(totalDebit)
      this.setState({
        debitInfo: debits,
        debitAmount: totalDebit
      })
    } catch (error) {
      console.error(error);
      }
  }


  displayDebit = (event) => {
    let debits = this.state.debitInfo.map((debit) =>
      <DebitDisplay debitInfo={debit}/>
    )
    return debits
  }

  toggleDisplayEdit = () => {
    if (this.state.toggle === false) { 
      this.setState({ toggle: true }) 
    } else {
      this.setState({ toggle: false})
    }
  } 
    
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Debits</h1>
        <button>Account Balance</button>
        <button onClick={this.toggleDisplayEdit}>Display Debit</button>
        <button>Add Debit</button>
        {this.state.toggle && (
          <div>
            <br /> {this.displayDebit()}
          </div>
        )}
      </div>
    );
  }
}
