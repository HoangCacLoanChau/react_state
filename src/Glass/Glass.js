import React, { Component } from "react";
import { data } from "./data";
import Background from "./Background";
import Model from "./Model";
import GlassList from "./GlassList";

export default class Glass extends Component {
  state = {
    glassArr: data,
    activeGlass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  handleChangeGlass = (glass) => {
    this.setState({
      activeGlass: glass,
    });
    console.log(this.state.activeGlass);
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
        <Model activeGlass={this.state.activeGlass} />
        <GlassList
          activeGlass={this.state.activeGlass}
          glassList={this.state.glassArr}
          handleChangeGlass={this.handleChangeGlass}
        />
      </div>
    );
  }
}
