import React, { Component } from "react";

export default class Videocomp extends Component {
  render() {
    return (
      <div className="row video-comp mt-2 ">
        <div className="col-6 pe-3">
          <p className="vid-title">
            Check out my video about 30 min yoga for beginners.
          </p>
          <span>
              <a href="#" className="link-primary">Contact me <i className="fas fa-long-arrow-alt-right"></i></a>
          </span>
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="ratio ratio-16x9 ">
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
