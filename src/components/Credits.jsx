import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CreditDisplay } from "./CreditDisplay";

class Credits extends Component {
  state = {
    creditInfo: [],
    creditAmount: 0,
    CreditDisplay: false,
  };

  async componentDidMount() {
    console.log("inside the componentDidMount");
    //more on fetch =>  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    try {
      //Url will grab the information from the debit and credit api and assign it to a varible.
      //at this point it is not readable.
      let creditUrl = await fetch("https://moj-api.herokuapp.com/credits");
      console.log("creditUrl\n");
      console.log(creditUrl);
      this.setState({
        //once recieved, .json allow you to make the data in the url readable.
        creditInfo: await creditUrl.json(),
      });
      console.log("creditInfo\n");
      console.log(this.state.creditInfo);
      console.log("0's creditAmount");
      console.log(this.state.creditInfo[0].amount);
    } catch (error) {
      console.log(error);
    }
  }

  displayCredit = () => {
    console.log("inside the credit component. below me is the credit info");
    this.setState({ debitInfo: this.state.debitInfo });
    console.log(this.state.creditInfo);

    if (this.state.creditInfo) {
      this.setState({
        CreditDisplay: false,
      });
    } else {
      this.setState({
        CreditDisplay: true,
      });

      this.state.creditInfo.map((item) => {
        console.log("below me is credit mapping");
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
