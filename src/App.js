import React, { useState } from "react";
import "./App.css";
import About from "./component/About.jsx";
import Contact from "./component/Contact";
import User from "./component/User.jsx";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CreateUser from "./component/CreateUser.jsx";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./component/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link href="#features">
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/User">User</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/Contact">Contact us</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/CreateUser">Create User User List</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
        </Switch>

        {/* <h1>Home page </h1> */}
        {/* <User /> */}
        {/* <About name={name} /> */}
        {/* <Contact /> */}
        {/* <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
