import React, { Component } from "react";

export default class Bottomcomp extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="bottomleft" className="me-auto p-2 text-white">
          <span className="fs-3"><b>Powered by Bread</b></span><br/>
          <p className="fs-4 mt-1">
            <b><i className="fab fa-instagram me-4"></i></b>
            <i className="fab fa-facebook-f me-4"></i>
            <i className="fab fa-twitter me-4"></i>
            <i className="fab fa-linkedin-in me-4"></i>
          </p>
        </div>

        <div id="bottomright" className="p-2 fs-6 text-white">
        <i className="far fa-copyright"></i>
        <span> Bread 2021 All rights reserved</span><br/>
        <div className="d-flex mt-2 justify-content-between">
        <span className="ms-2">Terms</span>
        <span className="">Privacy</span>
        <span className="me-1">About</span>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
