import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, classname, background, key } = config;
  return (
    <button
      className={classname}
      data-testid={`${key}`}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
