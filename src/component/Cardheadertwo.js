import React, { Component } from "react";

const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet eaque sequi quibusdam dolore! Obcaecati ipsam fuga ab incidunt animi atque sint ducimus laboriosam totam. Vel et velit illo quia illum iste quasi? Nisi placeat unde, nobis voluptate ratione incidunt.";

export default class Cardheadertwo extends Component {
  render() {
    return (
      <div className="card-header" id="header-2">
        <div className="card-title">Jane Doe</div>
        <p className="card-text text-muted">
          {desc}
          <br />
          <i className="fab fa-instagram me-4"></i>
          <i className="fab fa-facebook-f me-4"></i>
          <i className="fab fa-youtube me-4"></i>
          <i className="fab fa-twitter me-4"></i>
          <i className="fab fa-linkedin-in me-4"></i>
          <i className="fab fa-spotify"></i>
        </p>
      </div>
    );
  }
}
