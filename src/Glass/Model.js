import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let modelImage = "./glassesImage/model.jpg";
    return (
      <div className="d-flex justify-content-center h-50 py-4">
        <img src={modelImage} alt="" />
      </div>
    );
  }
}
