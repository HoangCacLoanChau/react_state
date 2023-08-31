import React, { Component } from "react";

export default class Background extends Component {
  render() {
    return (
      <div>
        <div
          className="nav"
          style={{
            color: "white",
            background: "rgba(61,61,61,0.6)",
            width: "100vw",
            textAlign: "center",
            padding: "20px 0",
            fontSize: "30px",
          }}
        >
          TRY GLASSES APP ONLINE
        </div>
      </div>
    );
  }
}
