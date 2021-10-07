import React from "react";
import { useDrag } from "react-dnd";
import { useState } from "react/cjs/react.development";

const Card = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: props.cardID, text: props.text, listID: props.listID },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative"
      ref={drag}
      hover={() => setHover(!hover)}
      // Here u must change smth, cause its not working good
      onMouseOver={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <p
        className="bg-white rounded-md m-2 p-1"
        style={{ boxShadow: isDragging ? "0 0 0.5em" : "0px" }}
      >
        {props.text}
      </p>
      <button
        className="delete-card absolute right-6 top-0"
        // style={{ visibility: hover ? "visible" : "hidden" }}
        onClick={() => props.handleRemovingCard(props.cardID, props.listID)}
      >
        x
      </button>
    </div>
  );
};

export default Card;
