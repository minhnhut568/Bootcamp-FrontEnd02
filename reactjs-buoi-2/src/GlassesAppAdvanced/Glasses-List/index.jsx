import React, { Component } from "react";
import GlassesPic from "../glassesPic/glassesPic";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    const { glassesList } = this.props;
    return glassesList.map((glasses, index) => {
      return (
        <div className="col-3" key={index}>
          <GlassesPic handleGlassesSelected={this.handleGlassesSelected}
            glassesPicProps={glasses}></GlassesPic>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
        {this.renderGlassesList()}
      </section>
    );
  }
}
