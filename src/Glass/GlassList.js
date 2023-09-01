import React, { Component } from "react";

export default class GlassList extends Component {
  renderGlassList = () => {
    return this.props.glassList.map((glass, index) => {
      let { name } = glass;
      return (
        <div className="col-3" key={index}>
          {name}
        </div>
      );
    });
  };
  render() {
    return <div className="bg-secondary row mx-5">{this.renderGlassList()}</div>;
  }
}
