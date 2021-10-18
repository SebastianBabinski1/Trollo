import React from "react";
import { useState } from "react/cjs/react.development";

const Button = (props) => {
  const [visible, setVisible] = useState(false);

  const togglePop = () => {
    setVisible(!visible);
    console.log(visible);
  };
  return (
    <>
      <button className={props.buttonClass} onClick={() => togglePop()}>
        {props.svg}
        <span className={props.spanClass}>{props.text}</span>
        {visible ? props.children : null}
      </button>
    </>
  );
};

export default Button;
