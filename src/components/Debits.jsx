import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DebitDisplay, AccountBalance } from "./Index";

export default class Debits extends Component {
  state = {
    accountBalance: this.props.accountBalance,
    debitInfo: [],
    debitAmount: 0,
    debitDisplay: false,
  };

  async componentDidMount() {
    console.log("inside the componentDidMount");
    //more on fetch =>  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    try {
      //Url will grab the information from the debit and credit api and assign it to a varible.
      //at this point it is not readable.
      let debitUrl = await fetch("https://moj-api.herokuapp.com/debits");
      console.log("debitUrl\n");
      console.log(debitUrl);
      this.setState({
        //once recieved, .json allow you to make the data in the url readable.
        debitInfo: await debitUrl.json(),
      });
      console.log("debitInfo\n");
      console.log(this.state.debitInfo);
      console.log("0's debit amount");
      console.log(this.state.debitInfo[0].amount);
    } catch (error) {
      console.log(error);
    }
  }

  displayDebit = (e) => {
    e.preventDefault();
    console.log("inside the debit component. below me is the debit info");
    this.setState({ debitInfo: this.state.debitInfo });
    console.log(this.state.debitInfo);

    if (this.state.debitDisplay) {
      this.setState({
        debitDisplay: false,
      });
    } else {
      this.setState({
        debitDisplay: true,
      });
      /*
      this.state.debitInfo.map((item) => {
        console.log("below me is debit mapping");
      })
     */
      return <DebitDisplay debitInfo={this.state.debitInfo}></DebitDisplay>;
      /**         
       *  <DebitDisplay
            description={item.description}
            amount={item.amount}
            date={item.date}
          /> */
      //return <DebitDisplay debitInfo={this.state.debitInfo} />;
    }
  };

  accountBalance = () => {
    <AccountBalance
      accountBalance={this.props.accountBalance}
    ></AccountBalance>;
  };

  render() {
    return (
      <div class="debit">
        <Link to="/">Home</Link>
        <h1>Debits</h1>
        <button class="accountBalanceClassDebit" onClick={this.accountBalance}>Account Balance</button>
        <button class="displayDebitClass"onClick={this.displayDebit}>Display Debit</button>
        <button class="addDebitClass">Add Debit</button>
      </div>
    );
  }
}
