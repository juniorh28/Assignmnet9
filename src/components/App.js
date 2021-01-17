import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import { Component } from "react";
import { UserProfile, Login, Credits, Debits } from "./Index";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 100,
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
      let response = await axios.get('https://moj-api.herokuapp.com/debits');
      let debits = response.data;
      let totalDebit = 0;
      for (let debit of debits){
        totalDebit += debit.amount
      }
      this.setState({
        debits: debits,
        accountBalance: this.state.accountBalance + totalDebit
      })
    } catch (error) {
      console.error(error);
      }
  }

  addToDebits = debit => {
    console.log(debit)
    let joined = this.state.debits.concat(debit)
    this.setState({
      debits: joined
    })
    console.log(this.state.debits)
  }
  addToBalance = amount => {
    this.setState({
      accountBalance: this.state.accountBalance + parseInt(amount)
    })
  }

  // subFromBalance = (amount) => {
  //   this.setState({
  //     accountBalance: this.state.accountBalance - amount
  //   })
  // }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };
 
  render() {
    const HomeComponent = () => ( <Home accountBalance={this.state.accountBalance} /> );
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
        accountBalance= {this.state.accountBalance}
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
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}></Route>
          <Route exact path="/UserProfile" render={UserProfileComponent}/>
          <Route exact path="/Login" render={LogInComponent} />
          <Route exact path="/Credits" render={CreditsComponent} />
          <Route exact path="/Debits" render={DebitsComponent} />
        </Switch>
        <div className="App">
        </div>
      </Router>
    );
  }
}

export default App;
