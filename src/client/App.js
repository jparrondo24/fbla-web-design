import React from 'react';
import Home from './components/Home';
import HighFlyers from './components/HighFlyers';
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
        <Router>
          <header>
            <Navbar collapseOnSelect expand="md" fixed="top">
              <Link to="/">
                <Navbar.Brand>
                  <Image 
                    alt="Sky High Airlines Logo"
                    src={PlaneLogo} 
                    className="d-inline-block"
                  /> &nbsp;
                  Sky High Airlines
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-link" to="/schedules">Flight Schedules</Link>
                  <Link className="nav-link" to="/high-flyers">High Flyers</Link>
                  <Link className="nav-link" to="/careers">Careers</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/flight-schedules">
            </Route>
            <Route exact path="/high-flyers">
              <HighFlyers />
            </Route>
            <Route exact path="/careers">
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
            </a> &nbsp;
            <a target="_blank" href="https://www.linkedin.com/company/american-airlines/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </footer>
      </div>
    );
  }
}
