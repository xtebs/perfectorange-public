import React from "react";
import heroBg from "../img/header-bg.jpg";
import Particles from 'reactparticles.js';
import "./hero.css";

class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.style = {
      backgroundImage: "url(" + heroBg + ")"
    };
    //merge computed values and custom styles passed in:
    Object.assign(this.style, props.style);
  }

  componentDidMount() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    window.particlesJS.load("particles-js", "particles.json", function() {
      console.log("callback - particles.js config loaded");
    });
  }

  render() {
    return (
      <div id="hero" className="container-fluid" style={this.style}>
        <div className="container-fluid inner">{this.props.children}</div>
        <Particles id="particles" config="particles.json"/>
      </div>
    );
  }
}

export default Hero;
