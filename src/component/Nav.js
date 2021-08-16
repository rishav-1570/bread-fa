import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <span className="text-white ms-3"><u>bre.ad/Jane</u></span>
          <div className="container-fluid d-flex flex-row-reverse">
            <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-2">
              <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Offerings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Other links
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
