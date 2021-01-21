import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnChoi from "./BtnChoi";
import KetQua from "./KetQua";
import "./style.scss";

//Tao So ngau nhien
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class AppXucXac extends Component {
  //luu 6 mat xuc xac
  xucXac = [
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 2,
      hinhAnh: "./img/gameXucXac/2.png",
      soDiem: 2,
    },
    {
      ma: 3,
      hinhAnh: "./img/gameXucXac/3.png",
      soDiem: 3,
    },
    {
      ma: 4,
      hinhAnh: "./img/gameXucXac/4.png",
      soDiem: 4,
    },
    {
      ma: 5,
      hinhAnh: "./img/gameXucXac/5.png",
      soDiem: 5,
    },
    {
      ma: 6,
      hinhAnh: "./img/gameXucXac/6.png",
      soDiem: 6,
    },
  ];
  state = {
    banChon: true, // true = da, false = xiao
    tongSoBanChoi: 0,
    soBanThang: 0,
    ketQuaXucXac: [
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
    ],
  };
  xulyKetQua = () => {
    const newKetQuaXucXac = [
      this.xucXac[getRandomInt(6)],
      this.xucXac[getRandomInt(6)],
      this.xucXac[getRandomInt(6)],
    ];
    const tongDiem = newKetQuaXucXac.reduce((tong, xucXac) => {
      return (tong += xucXac.soDiem);
    }, 0);
    //xet kq
    let taiOrXiu;
    if (tongDiem >= 3 && tongDiem <= 10) {
      taiOrXiu = false;
    } else {
      taiOrXiu = true;
    }
    //xet co dung
    let { tongSoBanChoi, soBanThang} = this.state;
    if (taiOrXiu == this.state.banChon){
      ++soBanThang;
    }
    ++tongSoBanChoi;
    this.setState({
      ketQuaXucXac: newKetQuaXucXac,
      soBanThang,
      tongSoBanChoi,
    });
  };
  xuLy = (banChon) => {
    this.setState({
      banChon: banChon,
      //banChon,
    });
  };
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <BanChoi
            ketQuaXucXacProps={this.state.ketQuaXucXac}
            xuLyBanChonProps={this.xuLy}
          ></BanChoi>
        </div>
        <div className="container text-center display-4">
          <KetQua
            tongSoBanChoiProps={this.state.tongSoBanChoi}
            soBanThangProps={this.state.soBanThang}
            banChonProp={this.state.banChon}
          ></KetQua>
          <BtnChoi xulyKetQuaProps={this.xulyKetQua}></BtnChoi>
        </div>
      </div>
    );
  }
}
