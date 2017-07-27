import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Locations from "./Locations";
import Forecast from "./Forecast";
import AddLocation from "../components/AddLocation";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddLocation />
        <Switch>
          <Route exact path="/" component={Locations} />
          <Route path="/forecast" component={Forecast} />
        </Switch>
      </div>
    );
  }
}

export default App;
