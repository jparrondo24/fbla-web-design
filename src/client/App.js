import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './stylesheets/app.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import PlaneLogo from './plane-logo.png';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Navbar collapseOnSelect expand="md" fixed="top">
            <Navbar.Brand href="#home">
              <Image 
                alt="Sky High Airlines Logo"
                src={PlaneLogo} 
                className="d-inline-block"
              /> &nbsp;
              Sky High Airlines
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Flight Schedules</Nav.Link>
                <Nav.Link href="#features">High Flyers</Nav.Link>
                <Nav.Link href="#pricing">Careers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <footer>
          <Image 
            alt="Sky High Airlines Logo"
            src={PlaneLogo} 
            className="mx-auto d-block"
          />
          <hr />
          <h3>Sky High Airlines</h3>
          <span>
            <a target="_blank" href="https://www.facebook.com/AmericanAirlines/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a> &nbsp;
            <a target="_blank" href="https://twitter.com/AmericanAir">
              <FontAwesomeIcon icon={faTwitter} />
            </a> &nbsp;
            <a target="_blank" href="https://www.instagram.com/americanair/">
              <FontAwesomeIcon icon={faInstagram} />
            </a> &nbsp;&nbsp;
            <a target="_blank" href="https://www.linkedin.com/company/american-airlines/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </footer>
      </div>
    );
  }
}
