import { Component } from "react";

console.log("inside displaydebit component\n");

export default class DebitDisplay extends Component {
  constructor() {
    super();
  }
  render() {
    console.log("i54  displaydebit component\n");
    console.log(this.props.debitInfo);
    return (
      <div>
        <h1>Hello</h1>
        <h1>Description: {this.props.debitInfo.description}</h1>
        <h1>Amount: {this.props.debitInfo.amount}</h1>
        <h1>Date: {this.props.debitInfo.date}</h1>
      </div>
    );
  }
}
