import React from "react";
import btnstyle from "./Button.module.css";

function Button({ btnText, btnIcon, isOutLinebtn }) {
  return (
    <button className={isOutLinebtn ? btnstyle.outlinebtn : btnstyle.primarybtn}
    >
      {btnIcon}
      {btnText}
    </button>
  );
}

export default Button;
