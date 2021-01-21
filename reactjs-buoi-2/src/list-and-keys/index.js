import React, { Component } from "react";

export default class ListAndKeys extends Component {
  courseList = ["Reactjs", "Angular", "NodeJs"];

  renderCourseList = () => {
    return this.courseList.map((course) => {
      return <li>{course}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>Danh Sách Khóa Học</h2>
        <ul>{this.renderCourseList()}</ul>
      </div>
    );
  }
}
