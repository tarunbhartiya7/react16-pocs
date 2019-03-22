import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";

export default function Root() {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink exact className="navbar-brand" to="/">
              Logo
            </NavLink>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
