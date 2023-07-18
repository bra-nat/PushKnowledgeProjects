import "./LockSlider.scss";

import React from "react";

const LockSlider = ({ handleInput, sliderValue, width }) => {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    background: "rgba(188, 190, 188, 0.5)",
    outline: "none",
    borderRadius: "25px",
  };

  return (
    <div>
      <input
        type="range"
        className="slider mb-2 border-4"
        style={sliderStyle}
        value={sliderValue}
        onInput={handleInput}
      />
    </div>
  );
};

export default LockSlider;
