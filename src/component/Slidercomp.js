import React, { Component } from "react";
import escalator from "./carouselimages/escalator.jpg";
import cosmos from "./carouselimages/cosmos.jpg";
import music from "./carouselimages/music.jpg";
export default class Slidercomp extends Component {
  render() {

   const handleClick = (dirn)=>{
        console.log("clicked",dirn);
    }


    return (
      <React.Fragment>
        <div id="sliderhead" className="display-6 text-center text-white">
          <span>Browse all my offerings</span>
        </div>

        <div id="carouselcontent" className="row mt-3">
          <div className="col-4 d-none p-2 pe-3 d-sm-flex align-items-center">
            <img
              src={escalator}
              alt=""
              className=" w-100 p-1 border border-radius-5 border-light rounded"
              height="170px"
            />
          </div>
          <div className="col-sm-4 offset-sm-0 col-10 offset-1 p-2 px-0 d-flex align-items-center">
            <img
              src={cosmos}
              alt=""
              className=" w-100 p-1 border border-radius-5 border-light rounded"
              height="200px"
            />
          </div>
          <div className="col-4 d-none p-2 ps-3 d-sm-flex align-items-center">
            <img
              src={music}
              alt=""
              className=" w-100 p-1 border border-radius-5 border-light rounded"
              height="170px"
            />
          </div>
        </div>
        <div id="carouselbtn" className="d-flex justify-content-center my-3 text-white fs-2">
          <i onClick={()=>{handleClick("left")}} className="fas fa-arrow-circle-left text-muted me-3"></i>
          <i onClick={()=>{handleClick("right")}} className="fas fa-arrow-circle-right text-muted ms-3"></i>
        </div>
      </React.Fragment>
    );
  }
}
