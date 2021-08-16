import React, { Component } from "react";

export default class Moredetail extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="lineone d-flex align-items-baseline">
          <i className="fas fa-map-marker-alt text-primary me-3 "></i>
          <p>
            <b>Lives in </b>
            <span className="badge rounded-pill bg-secondary ms-2">New Delhi</span>
          </p>
        </div>
        <div className="linetwo d-flex align-items-baseline">
          <i className="fas fa-language text-primary me-2"></i>
          <p>
            <b>Speeks</b>
            <span className="badge rounded-pill bg-secondary ms-3">English</span>
            <span className="badge rounded-pill bg-secondary ms-3">Hindi</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
