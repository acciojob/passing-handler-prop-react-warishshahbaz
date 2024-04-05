import React from "react";

function ColourSelector({ onSelectColor }) {
  const colors = ["red", "green", "blue"];

  return (
    <div className="colour-selector">
      {colors.map((color, index) => (
        <button key={index} onClick={() => onSelectColor(color)}>
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
