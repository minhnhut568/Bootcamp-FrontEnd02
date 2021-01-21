import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>ClassProps</h3>
        <p>Ca sĩ : {this.props.tenCaSi} </p>
        <p>Bài Hát : {this.props.tenBaiHat} </p>
      </div>
    );
  }
}
