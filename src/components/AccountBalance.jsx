import React, { Component } from "react";

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <div></div>Balance: {this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;
