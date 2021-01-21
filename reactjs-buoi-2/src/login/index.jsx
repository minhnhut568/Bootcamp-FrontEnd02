import React, { Component } from "react";

export default class Login extends Component {
  // state - đồng bộ ui và data
  state = {
    isLogin: false,
  };
  /**
   * @isLogin :
   *      - true : đã login
   *      - false : chưa login
   */
  isLogin = false;

  handleLogin = () => {
    // this.state.isLogin = true; sai
    // vì vừa set isLogin lên true và chạy lại method render
    this.setState(
      {
        isLogin: true,
      },
      // call back function
      () => {
        console.log(this.state.isLogin);
      }
    );
  };

  renderLogin = () => {
    console.log("run renderLogin");
    //   c1
    if (this.state.isLogin) {
      return <p>Nguyễn Phong Hào</p>;
    } else {
      return (
        <button className="btn btn-info" onClick={this.handleLogin}>
          login
        </button>
      );
    }
    // c2    dk ? đúng : sai
    // return this.isLogin ? (
    //   <p>Nguyễn Phong Hào</p>
    // ) : (
    //   <button className="btn btn-info">login</button>
    // );
  };
  render() {
    console.log("run render");
    return (
      <div>
        <h2>If-Else trong jsx</h2>
        {this.renderLogin()}
      </div>
    );
  }
}
