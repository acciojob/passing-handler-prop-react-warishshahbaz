import React from "react";

function Selection({ selectedColor }) {
  return (
    <div className="selection">
      <div className="fix-box" style={{ backgroundColor: selectedColor }}></div>
      <div className="fix-box" style={{ backgroundColor: selectedColor }}></div>
      <div className="fix-box" style={{ backgroundColor: selectedColor }}></div>
    </div>
  );
}

export default Selection;
