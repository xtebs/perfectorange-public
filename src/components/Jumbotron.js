import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import "../css/agency.css";

class Jumbotron extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">
              Perfect Orange
            </div>
            <div className="intro-lead-in">We're different.</div>

          </div>
        </div>
      </header>
    );
  }
}

export default Jumbotron;
