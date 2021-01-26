import React, { Component } from "react";
import { connect } from "react-redux";

class BanChoi extends Component {
  xuLy = (flag) => {
    const { xuLyBanChonProps } = this.props;
    xuLyBanChonProps(flag);
  };
  renderKetQuaXucXac = () => {
    const { ketQuaXucXacProps } = this.props;
    return ketQuaXucXacProps.map((xucXac, index) => {
      return (
        <img
          src={xucXac.hinhAnh}
          key={index}
          width={50}
          height={50}
          alt="hinh"
        />
      );
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

const mapDispatchToProps = (dispatch) => {
  return {
    //key value
    // value la phuong thuc gui data len store
    xuLyBanChonProps: (taiOrXiu) => {
      const action = {
        type: "XU_LY_BAN_CHON",
        payload: taiOrXiu,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(BanChoi);
