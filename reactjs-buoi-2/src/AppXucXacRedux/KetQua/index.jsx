import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    const {banChonProp,tongSoBanChoiProps, soBanThangProps} = this.props;
    return (
      <React.Fragment>
        <div>
          bạn chọn : <span className="text-danger">{banChonProp ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThangProps}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">{tongSoBanChoiProps}</span>
        </div>
      </React.Fragment>
    );
  }
}
//lay state tu store ve component
const mapStateToProps = (state) => {
  return {
    // ket , value
    banChonProp: state.xucXacReducers.banChon,
    tongSoBanChoiProps: state.xucXacReducers.tongSoBanChoi,
    soBanThangProps: state.xucXacReducers.soBanThang
  };
};
export default connect(mapStateToProps,null)(KetQua);
