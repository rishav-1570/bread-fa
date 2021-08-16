import React, { Component } from "react";
import Cardheaderone from "./Cardheaderone";
import Cardheadertwo from "./Cardheadertwo";
import Moredetail from "./Moredetail";
import Subscribecomp from "./Subscribecomp";
import Videocomp from "./Videocomp";


let cardsel;
export default class Profile extends Component {

state={
  mdmd : false,
  med : "card py-2 mx-0 rounded",
  large : "card py-2 mx-0 border border-5 border-primary rounded"
}

componentDidMount() {
  window.addEventListener("resize", this.resize.bind(this));
  this.resize();
}

resize() {
  if(window.innerWidth<=768)
    {
        this.setState({mdmd:true});
    }
    else
    {
      this.setState({mdmd:false});
    }
}

componentWillUnmount() {
  window.removeEventListener("resize", this.resize.bind(this));
}

  render() {
    

    return (

        <div className={this.state.mdmd?this.state.med:this.state.large}>
          <div className="card-header px-0 mx-2">
            <Cardheaderone />
            <Cardheadertwo />
          </div>
          <div className="card-body">
            <Moredetail />
            <Videocomp />
            <Subscribecomp />
          </div>
        </div>
      
    );
  }
}
