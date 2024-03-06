import React from "react";

function Selection({ val, handleClicked, nextBackground, state }) {
  console.log(val, nextBackground, "applyColor");
  return (
    <div
      style={{
        backgroundColor: `${
          state.includes(val) ? nextBackground.background : ""
        }`,
      }}
      onClick={() => handleClicked(val)}
      className="selection"
    >
      {val}
    </div>
  );
}

export default Selection;
