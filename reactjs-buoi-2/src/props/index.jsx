// props dùng để truyền data giửa các component
import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class Props extends Component {
  state = {
    tenCaSi: "BinZ",
    tenBaiHat: "small city girl",
  };
  render() {
    return (
      <div>
        <h2>Demo Props</h2>
        {/* truyền props từ component Props sang cho FunctionProps */}
        <FunctionProps
          tenCaSi={this.state.tenCaSi}
          tenBaiHat={this.state.tenBaiHat}
        />
        <ClassProps
          tenCaSi={this.state.tenCaSi}
          tenBaiHat={this.state.tenBaiHat}
        />
      </div>
    );
  }
}
