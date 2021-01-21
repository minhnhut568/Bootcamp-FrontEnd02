import React, { Component } from "react";
import GlassesPic from "./glassesPic/glassesPic";
import Model from "./model";

export default class Glasses extends Component {
  state = {
    glassesSelected : {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    }
  }
  glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  handleGlassesSelected = (glassesSelected) => {
    this.setState({
      // glassesSelected: glassesSelected,
      glassesSelected,
    });
  };
  renderGlassesList = () => {
    return this.glassesList.map((glasses, index) => {
      return (
        <div className="col-3" key={index}>
          <GlassesPic handleGlassesSelected = {this.handleGlassesSelected} glassesPicProps = {glasses}></GlassesPic>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <Model glassesSelected = {this.state.glassesSelected}></Model>
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              {this.renderGlassesList()}
            </section>
          </div>
        </div>
      </section>
    );
  }
}
