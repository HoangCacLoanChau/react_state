import React, { Component } from "react";

export default class Model extends Component {
  renderActiveGlass = () => {
    let { name, url, price, dsc } = this.props.activeGlass;

    return (
      <div className="chosen-glass position-absolute ">
        <img src={url} alt="" />
      </div>
    );
  };
  renderGlassInfo = () => {};
  render() {
    let modelImage = "./glassesImage/model.jpg";
    return (
      <div
        className="d-flex justify-content-center 
       position-relative"
      >
        <img src={modelImage} alt="" style={{ height: "350px" }} />
        {this.renderActiveGlass()}
      </div>
    );
  }
}
