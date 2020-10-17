import React, { Component } from 'react';
import Main from "./Main/Main"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Switch } from "react-router-dom"
import Checkout from "./CheckOut/CheckOut"
import fire from "../src/Firebase/firebase"
import Login from "../src/Login/Login"
import SignUp from "../src/Login/SignUp"

class App extends Component {
  state = {
    user:{}
  }

  componentDidMount(){
    this.authlisten()
  }

  authlisten = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user)
      {
        this.setState({user:user})
      }
      else
      {
        this.setState({user:null})
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/check" exact component={Checkout} /> 
        <Route path="/" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />     
        <Route path="/main" exact component={Main} />             
        {this.state.user? <Main />: <Login />}                  
        </Switch>       
      </div>
    );
  }
}

export default App;
