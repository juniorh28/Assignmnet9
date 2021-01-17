import React, { Component } from "react";

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <div class="balance">Balance: {this.props.accountBalance}</div>
      </div>
    );
  }
}

export default AccountBalance;
