import React from "react";
import "./CustomToggle.css";
const CustomToggle = ({isChecked, onClickToggle, variant}) => {
  return (
    <div className={`${variant === "big"?"outer__circle_1":"outer__circle"}`} onClick={onClickToggle}>
      {isChecked && <div className={`${variant === "big"? "inner__circle_1":"inner__circle"}`}></div>}
    </div>
  );
};

export default CustomToggle;
