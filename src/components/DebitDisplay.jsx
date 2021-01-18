import { Component } from "react";
import '../App.css'
export default function DebitDisplay (props) {
  return (
    <div className="debit-display-card">
      Description: {props.debitInfo.description} <br />
      Amount: {props.debitInfo.amount} <br />
      Date: {props.debitInfo.date} <br />
    </div>
  );
}

