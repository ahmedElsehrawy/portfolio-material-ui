import { Button } from "@material-ui/core";
import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <div className="picture"></div>
        <div className="text">
          <h2>Ahmed Elsehrawy</h2>
          <p>
            Hi my name is "Ahmed Elsehrawy" i'm a frontend developer i build
            websites, web applications i've bulut many projects with react js
            here is some of them you can check it out
          </p>
          <div className="btn-container">
            <Link to="/">
              <Button
                className="btn1"
                variant="outlined"
                color="primary"
                size="meduim"
              >
                Go to Projects
              </Button>
            </Link>
          </div>
          <div className="btn-container">
            <Link to="/contact">
              <Button variant="outlined" color="secondary" size="meduim">
                Contact Me Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
