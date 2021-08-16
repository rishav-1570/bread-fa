import React, { Component } from "react";
import picture from "../picture.jpg";

export default class Cardheaderone extends Component {


  render() {
    return (
      <div className="card-header" id="header-1">
        <div className="left-section d-flex">
          <div className="rounded p-1 border border-primary border-2">
            <img
              src={picture}
              className="rounded"
              alt="Jane Doe"
              height="150px"
              width="100px"
            />
          </div>
          <div className="pillss">
            <span className="badge m-1 rounded-pill text-dark border border-primary">
              Yoga
            </span>
            <span className="badge m-1 rounded-pill text-dark border border-primary">
              Wellness
            </span>
            <span className="badge m-1 rounded-pill text-dark border border-primary">
              Fitness
            </span>
          </div>
        </div>
        <div className="right-section">
          <button type="button" className="btn btn-primary my-1">
            Book Trial
          </button>
          <br />
          <button type="button" className="btn btn-outline-primary my-1">
            Contact me
          </button>
        </div>
      </div>
    );
  }
}
