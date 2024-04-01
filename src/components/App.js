import React, { useState } from "react";
import "../styles/App.css";
import Selection from "./Selection";
import ColourSelector from "./ColourSelector";

const colourConfig = [
  {
    key: "blue",
    label: "Blue",
    classname: "btn-blue",
    background: "rgb(34, 193, 195)",
  },
  {
    key: "orange",
    label: "Orange",
    classname: "btn-orange",
    background: "rgb(221, 112, 18)",
  },
  {
    key: "green",
    label: "Green",
    classname: "btn-green",
    background: "rgb(44, 209, 88)",
  },
];

const title = "Select the gradient and then the Box to change the color";

const App = () => {
  let [nextBackground, selectNextBackground] = useState({ background: "" });
  const [state, setState] = useState(Data);

  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(nextBackground);
  };
  const handleClicked = (key) => {
    let res = state.map((val) => {
      if (val.title === key.title) {
        return {
          ...val,
          bg: nextBackground.background ?? "",
        };
      }
      return val;
    });
    setState(res);
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config, index) => {
          return (
            <ColourSelector
              key={config.key}
              config={config}
              selectNextBackground={selectNextBackground}
              setState={setState}
            />
          );
        })}
      </div>

      <div className="row" id="children-wrapper">
        {state.map((val) => {
          console.log(val);
          return (
            <Selection
              val={val}
              applyColor={applyColor}
              handleClicked={handleClicked}
              state={state}
            />
          );
        })}
      </div>
    </div>
  );
};

let Data = [
  { title: "selection 1", bg: "" },
  { title: "selection 2", bg: "" },
  { title: "selection 3", bg: "" },
];
export default App;
