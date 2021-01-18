import React, { Component } from "react";

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <div>Balance: {this.props.accountBalance}</div>
      </div>
    );
  }
}
export default AccountBalance;
