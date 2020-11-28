import React, { Component } from "react";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (    
      <BrowserRouter>
           <Switch>
              <Route path="/" exact>
                  This is the home page
              </Route>
              <Route path="/join" component={JoinRoom} />
              <Route path="/create" component={CreateRoom} />
           </Switch>
      </BrowserRouter>
    );
  }
}