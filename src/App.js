import React, { Component } from "react";
//import { Button } from "react-bootstrap";

import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Services from "./components/Services";


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Services />
      </div>
    );
  }
}

export default App;
