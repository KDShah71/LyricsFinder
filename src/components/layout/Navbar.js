import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Materialize
import M from "materialize-css";

export default class Navbar extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <nav className="deep-orange darken-4">
          <div className="nav-wrapper container ">
            <Link to="/" className="brand-logo  center">
              LyricsFinder
            </Link>
            {/* <a
              href="http://"
              data-target="mobile-demo"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <a href="mobile.html">Mobile</a>
              </li>
            </ul> */}
          </div>
        </nav>

        <ul className="sidenav " id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}
