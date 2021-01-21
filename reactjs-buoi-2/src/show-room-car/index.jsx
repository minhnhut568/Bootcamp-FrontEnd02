import React, { Component } from "react";

export default class ShowRoomCar extends Component {
  state = {
    carImg: "./img/car/products/silver-car.jpg",
  };
  handleChangeColor = (color) => {
    let carImg = "";
    switch (color) {
      case "đen":
        carImg = "./img/car/products/black-car.jpg";
        break;
      case "đỏ":
        carImg = "./img/car/products/red-car.jpg";
        break;
      case "bạc":
        carImg = "./img/car/products/silver-car.jpg";
        break;
      default:
        carImg = "./img/car/products/steel-car.jpg";
        break;
    }
    this.setState({
      // carImg : carImg,
      carImg, // es6 object literal
    });
  };
  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              onClick={() => this.handleChangeColor("đen")}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              onClick={() => this.handleChangeColor("đỏ")}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              onClick={() => this.handleChangeColor("bạc")}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              onClick={() => this.handleChangeColor("màu còn lại")}
              className="btn"
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.carImg} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
