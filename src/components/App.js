import React, { useState } from "react";
// import "./App.css";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <ColourSelector onSelectColor={handleColorSelect} />
      <Selection selectedColor={selectedColor} />
    </div>
  );
}

export default App;
