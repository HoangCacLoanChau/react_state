import React, { Component } from "react";
import { data } from "../data";
import Background from "./Background";
import Model from "./Model";

export default class Glass extends Component {
  state = {
    glassArr: data,
  };
  render() {
    let backgroundURL = "./glassesImage/background.jpg";

    return (
      <div
        style={{
          backgroundImage: `url(${backgroundURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Background />
        <Model />
      </div>
    );
  }
}
