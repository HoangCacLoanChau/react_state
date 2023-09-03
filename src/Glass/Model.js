import React, { Component } from "react";

export default class Model extends Component {
  renderActiveGlass = () => {
    let { url } = this.props.activeGlass;
    return (
      <div className="chosen-glass position-absolute ">
        <img src={url} alt="" />
      </div>
    );
  };
  renderGlassInfo = () => {
    let { name, desc, price } = this.props.activeGlass;
    return (
      <div className="chosen-info position-absolute px-2 py-1">
        <span className="text-primary pl-2">{name} </span>
        <span className="text-white">- {price} $</span>
        <p className="text-white ">{desc}</p>
      </div>
    );
  };
  render() {
    let modelImage = "./glassesImage/model.jpg";
    return (
      <div
        className="d-flex justify-content-center position-relative
       "
      >
        <img src={modelImage} alt="" style={{ height: "350px" }} />
        {this.renderActiveGlass()}
        {this.renderGlassInfo()}
      </div>
    );
  }
}
