import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  constructor() {
    // để kế thừa lại các property và method
    super();
    // nó nói this trong hàm hienThiCauNoi là class DemoDataBinding
    this.hienThiCauNoi = this.hienThiCauNoi.bind(this);
  }
  // phương thức
  // cách 1
  hienThiCauNoi = function () {
    console.log("hasaghi");
    console.log(this.image);
  };
  // cách 2
  hienThiCauNoi = () => {
    console.log("hasaghi");
    console.log(this.image);
  };
  // thuộc tính
  image =
    "https://image.thanhnien.vn/660/uploaded/phunggiao/2019_11_21/image001_ijjk.jpg";
  render() {
    //   biến
    const name = "Yasuo";
    return (
      <div>
        <h2>Data Binding</h2>
        <p>name : {name}</p>
        <img src={this.image} alt="hinh-dep" />
        <br />
        <button className="btn btn-success" onClick={this.hienThiCauNoi}>
          hiển thị câu nói
        </button>
      </div>
    );
  }
}
