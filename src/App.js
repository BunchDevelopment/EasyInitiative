import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import BattleScreen from "./BattleScreen/BattleScreen";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from "aws-amplify";

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then((user) => console.log({ user }))
    .catch((err) => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function App() {
  return (
    <div className="App">
      <Header />
      <div id="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/CreateBattle" component={BattleScreen} />
        </Switch>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
