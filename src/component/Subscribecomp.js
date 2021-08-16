import React, { Component } from "react";

export default class Subscribecomp extends Component {
  render() {
    return (
      <form className="row mt-5 mb-3 mx-2">
        <label htlmfor="useremail" className="form-label">
          Subscribe to my profile and never miss another update from me.
        </label>
        <div className="col-sm-9 col-8">
          <input
            type="email"
            className="form-control"
            id="useremail"
            placeholder="Enter your email"
          />
        </div>
        <div className="col-sm-3 col-4 d-grid">
          <button type="button" className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </form>
    );
  }
}
