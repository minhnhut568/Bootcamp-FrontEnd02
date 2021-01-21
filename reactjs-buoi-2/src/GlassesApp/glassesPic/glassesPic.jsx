import React, { Component } from "react";

export default class GlassesPic extends Component {
  handleClick = () => {
    const {glassesPicProps, handleGlassesSelected} = this.props;
    handleGlassesSelected(glassesPicProps);
  };
  render() {
    const {glassesPicProps} = this.props;
    return (
      <button onClick={this.handleClick} className="btn btn-outline-secondary">
        <img
          src={glassesPicProps.url}
          alt="hinh"
          style={{ width: 100, borderRadius: 20 }}
        />
      </button>
    );
  }
}
