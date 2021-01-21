import React, { Component } from 'react'

export default class Model extends Component {
    render() {
      const {glassesSelected} = this.props;
        return (
            <section className="model d-flex justify-content-center col-5">
              <div
                className="card text-left"
                style={{ width: 300, position: "relative" }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt="hinh model"
                />
                <img
                  src={glassesSelected.url}
                  alt="kinh"
                  style={{
                    width: 170,
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "16%",
                  }}
                />
                <div className="card-body">
                  <span className="card-title badge-danger h3 px-2 rounded">
                    $30
                  </span>
                  <p className="card-text mt-2">{glassesSelected.desc}</p>
                </div>
              </div>
            </section>
        )
    }
}
