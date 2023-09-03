import React, { Component } from "react";

export default class GlassList extends Component {
  renderGlassList = () => {
    return this.props.glassList.map((glass, index) => {
      let { name, url, id } = glass;
      let isActive = id == this.props.activeGlass.id;

      return (
        <div className="col-2 py-4" key={index}>
          <button style={{ transform: `scale(${isActive ? 1.3 : 1})`, transtition: "0.7s" }}>
            <img
              src={url}
              className="p-1"
              alt=""
              style={{
                width: " 150px",
              }}
              onClick={() => {
                this.props.handleChangeGlass(glass);
              }}
            />
          </button>
        </div>
      );
    });
  };
  render() {
    return <div className="bg-light row mx-5 my-3">{this.renderGlassList()}</div>;
  }
}
