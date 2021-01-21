import React, { Component } from "react";

export default class BanChoi extends Component {
  xuLy = (flag) => {
    const { xuLyBanChonProps } = this.props;
    xuLyBanChonProps(flag);
  };
  renderKetQuaXucXac = () => {
    const { ketQuaXucXacProps } = this.props;
    return ketQuaXucXacProps.map((xucXac, index) => {
      return <img
        src={xucXac.hinhAnh}
        key={index}
        width={50}
        height={50}
        alt="hinh"
      />;
    });
  };
  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            onClick={() => this.xuLy(true)}
            className="bg-danger display-4 p-5 text-light"
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
          {this.renderKetQuaXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => this.xuLy(false)}
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}
