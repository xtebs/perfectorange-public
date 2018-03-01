import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import "../css/agency.css";
import "../css/services.css";
//import "../css/agency.min.css";

const image1 = require(`../img/bg-showcase-1.jpg`);
const image2 = require(`../img/bg-showcase-2.jpg`);
const image3 = require(`../img/analytics.jpeg`);

class Services extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: `url(${image1})` }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Dream it. We make it.</h2>
              <p className="lead mb-0">
                Since the very first idea, we help our clients turn concepts into reliable and robust app solutions.
                We will ask you the right questions to find the best solutions for you.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{ backgroundImage: `url(${image2})` }}
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Full Stack development</h2>
              <p className="lead mb-0">
                From one page websites to big full stack projects, we are ready and commited to any requirement.
                React, WordPress, NodeJS backend, Amazon Services & Devops, Heroku, Android and IOS mobile apps through React Native development.
                Just name it.
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: `url(${image3})` }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Marketing & Branding</h2>
              <p className="lead mb-0">
                Our main objective is  to lead you business to one thing only: results.
                We have digital marketing and technology enthusiasts to drive you producto to the right customers.
                We are partners in your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
