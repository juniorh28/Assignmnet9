import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Component } from "react";
import { UserProfile, Login, Credits, Debits } from "./components/Index";
console.log("inside app component");

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "Billy Bob",
        memberSince: "01/01/2021",
      },
      debitInfo: [], //will hold an array of objects that holds user's id, amount, description, and date
      debitAmount: 0, //the debitAmount is the
      creditInfo: [], //will hold an array of objects that holds user's id, amount, description, and date
      creditAmount: 0,
    };
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };
  /*
  async componentDidMount() {
    //more on fetch =>  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    try {
      //Url will grab the information from the debit and credit api and assign it to a varible.
      //at this point it is not readable.
      //if I dont await, the url will be a promise object
      let debitUrl = await fetch("https://moj-api.herokuapp.com/debits");
      let creditUrl = await fetch("https://moj-api.herokuapp.com/credits");
      console.log("debitUrl\n");
      console.log(debitUrl);
      console.log("creditUrl\n");
      console.log(creditUrl);
      this.setState({
        //once recieved, .json allow you to make the data in the url readable.
        debitInfo: await debitUrl.json(),
        creditInfo: await creditUrl.json(),
      });
      console.log("debitInfo\n");
      console.log(this.state.debitInfo);
      console.log("creditInfo\n");
      console.log(this.state.creditInfo);
      console.log("0's debit amount");
      console.log(this.state.debitInfo[0].amount);
    } catch (error) {
      console.log(error);
    }
  }
*/
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
        creditInfo={this.state.creditInfo}
        creditAmount={this.state.creditAmount}
      ></Credits>
    );

    const DebitsComponent = () => <Debits></Debits>;

    return (
      <div class="App">
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
      </div>
    );
  }
}

export default App;
