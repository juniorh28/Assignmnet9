import { Component } from "react";

export default function DebitDisplay (props) {
  return (
    <div>
      Description: {props.debitInfo.description} <br />
      Amount: {props.debitInfo.amount} <br />
      Date: {props.debitInfo.date} <br />
      <br />
    </div>
  );
}

