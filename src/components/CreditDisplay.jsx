
import { Component } from "react";
import '../App.css'

export default function creditDisplay (props) {
  return (
    <div className="debit-display-card">
      Description: {props.creditInfo.description} <br />
      Amount: {props.creditInfo.amount} <br />
      Date: {props.creditInfo.date} <br />
    </div>
  );
}