import React from "react";

function FunctionProps(props) {
  console.log("props : ", props);
  return (
    <div>
      <h3>FunctionProps</h3>
      <p>Ca sĩ : {props.tenCaSi}</p>
      <p>Bài Hát : {props.tenBaiHat}</p>
    </div>
  );
}

export default FunctionProps;
