import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground, setState } = props;
  const { background } = config;

  return (
    <button
      className={`${config?.classname}`}
      onClick={() => {
        // setState([]);
        selectNextBackground({ background: background });
      }}
    >
      {config?.label ?? ""}
    </button>
  );
};
export default ColourSelector;
