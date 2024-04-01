import React from "react";

function Selection({ val, handleClicked }) {
  return (
    <div
      data-testid={`${val.bg}`}
      style={{
        backgroundColor: `${val.bg}`,
      }}
      onClick={() => handleClicked(val)}
      className="fix-box"
    >
      {val.title}
    </div>
  );
}

export default Selection;
