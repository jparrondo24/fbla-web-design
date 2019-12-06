import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './stylesheets/app.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Navbar fixed="top">
            <Navbar.Brand href="#home">Sky High Airlines</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Flight Schedules</Nav.Link>
              <Nav.Link href="#features">High Flyers</Nav.Link>
              <Nav.Link href="#pricing">Careers</Nav.Link>
            </Nav>
          </Navbar>
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
