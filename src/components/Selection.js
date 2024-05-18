import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const [selectionStyle, updateSelectionStyle] = useState({});
  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => {
        props.applyColor(updateSelectionStyle);
      }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
