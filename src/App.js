import React, { Component } from "react";
import orangeSvg from "./img/orange_shazam.svg";
//import { Button } from "react-bootstrap";

import "./App.css";
import Hero from "./components/Hero";

class App extends Component {
  render() {
    return (
      <Hero>
          <div className="col">
            <h1>The perfect <strong><span className="cap">O</span>range</strong></h1>
            <p className="small">...Is currently rebuilding its website. Say hello at <a href="mailto:hello@perfectorange.pt">hello@perfectorange.pt</a></p>
            <p>We believe our digital presence should fully reflect the quality of our work, our organizational culture, and ourselves as people.</p>
            <img alt="logo" src= {orangeSvg}/>
            <p>As such, we are carefully planning details, obsessing over fonts, drawing grids, and making orange sketches.</p>
            <p className="emphasize">Check back on our website soon for a more Perfect Orange</p>
          </div>
      </Hero>
    );
  }
}

export default App;
