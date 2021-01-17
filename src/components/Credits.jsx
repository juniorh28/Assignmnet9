import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CreditDisplay } from "./CreditDisplay";

class Credits extends Component {
  state = {
    creditInfo: [],
    creditAmount: 0,
    CreditDisplay: false,
  };


  displayCredit = () => {

    this.setState({ debitInfo: this.state.debitInfo });


    if (this.state.creditInfo) {
      this.setState({
        CreditDisplay: false,
      });
    } else {
      this.setState({
        CreditDisplay: true,
      });

      this.state.creditInfo.map((item) => {
    
        return (
          <CreditDisplay
            description={item.description}
            amount={item.amount}
            date={item.date}
          />
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Credits</h1>
        <button>Account Balance</button>
        <button>Display Credit</button>
        <button>Add Credit</button>
      </div>
    );
  }
}

export default Credits;
