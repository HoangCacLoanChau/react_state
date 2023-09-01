import React, { Component } from "react";

export default class Model extends Component {
  renderActiveGlass = () => {
    return (
      <div className="chosen-glass position-absolute ">
        <img src={this.props.activeGlass} alt="" />
      </div>
    );
  };
  render() {
    let modelImage = "./glassesImage/model.jpg";
    return (
      <div
        className="d-flex justify-content-center 
       position-relative"
      >
        <img src={modelImage} alt="" style={{ height: "300px" }} />
        {this.renderActiveGlass()}
      </div>
    );
  }
}
