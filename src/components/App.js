import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import { Component } from "react";
import { UserProfile, Login, Credits, Debits } from "./Index";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 10000,
      debits: [],
      credits: [],
      currentUser: {
        userName: "Billy Bob",
        memberSince: "01/01/2021",
      },
    };
  }

  async componentDidMount() {
    try {
      let response = await axios.get("https://moj-api.herokuapp.com/debits");
      let debits = response.data;
      response = await axios.get("https://moj-api.herokuapp.com/credits");
      let credits = response.data;
      let totalDebit = 0;
      let totalCredit = 0;
      for (let debit of debits) {
        totalDebit += debit.amount;
      }
      for (let credit of credits) {
        totalCredit += credit.amount;
      }
      this.setState({
        debits: debits,
        credits: credits,
        accountBalance: this.state.accountBalance + totalDebit - totalCredit,
      });
    } catch (error) {
      console.error(error);
    }
  }

  addToDebits = (debit) => {
    let joined = this.state.debits.concat(debit);
    this.setState({
      debits: joined,
    });
  };

  addToCredits = (credit) => {
    let joined = this.state.credits.concat(credit);
    this.setState({
      credits: joined,
    });
  };
  addToBalance = (amount) => {
    this.setState({
      accountBalance: this.state.accountBalance + parseInt(amount),
    });
  };
  subFromBalance = (amount) => {
    this.setState({
      accountBalance: this.state.accountBalance - parseInt(amount),
    });
  };

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <Login
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props}
      />
    );
    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
        subFromBalance={this.subFromBalance}
        addToCredits={this.addToCredits}
      ></Credits>
    );

    const DebitsComponent = () => (
      <Debits
        accountBalance={this.state.accountBalance}
        debits={this.state.debits}
        addToBalance={this.addToBalance}
        addToDebits={this.addToDebits}
      ></Debits>
    );

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/Assignmnet9"
              render={() => <Redirect to="/" />}
            />
            <Route exact path="/" render={HomeComponent}></Route>
            <Route exact path="/UserProfile" render={UserProfileComponent} />
            <Route exact path="/Login" render={LogInComponent} />
            <Route exact path="/Credits" render={CreditsComponent} />
            <Route exact path="/Debits" render={DebitsComponent} />
          </Switch>
          <div className="App"></div>
        </Router>
      </div>
    );
  }
}

export default App;
