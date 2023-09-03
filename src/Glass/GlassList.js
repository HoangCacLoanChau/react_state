import React, { Component } from "react";

export default class GlassList extends Component {
  renderGlassList = () => {
    return this.props.glassList.map((glass, index) => {
      let { name, url } = glass;

      return (
        <div className="col-2 py-3" key={index}>
          <button>
            <img
              src={url}
              className="p-1"
              alt=""
              style={{
                width: "80%",
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
    return <div className="bg-light row mx-5">{this.renderGlassList()}</div>;
  }
}
