import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Component } from "react";
import { UserProfile, Login, Credits, Debits } from "./components/Index";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "Billy Bob",
        memberSince: "01/01/2021",
      },
    };
  }

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

    const CreditsComponent = () => <Credits></Credits>;

    const DebitsComponent = () => <Debits></Debits>;

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}></Route>
          <Route exact path="/UserProfile" render={UserProfileComponent} />
          <Route exact path="/Login" render={LogInComponent} />
          <Route exact path="/Credits" render={CreditsComponent} />
          <Route exact path="/Debits" render={DebitsComponent} />
        </Switch>
        <div className="App">
          {/* <header className="App-header"></header>*/}
        </div>
      </Router>
    );
  }
}

export default App;
