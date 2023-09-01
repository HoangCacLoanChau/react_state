import React, { Component } from "react";

export default class Background extends Component {
  render() {
    return (
      <div>
        <div
          className="n py-3 text-center "
          style={{
            color: "white",
            background: "rgba(61,61,61,0.6)",
            width: "100vw",
            fontSize: "30px",
          }}
        >
          TRY GLASSES APP ONLINE
        </div>
      </div>
    );
  }
}
