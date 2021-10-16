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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className="bg-white rounded-md m-2 py-1 pl-2 pr-8 break-words border-2 border-gray-300"
        style={{ boxShadow: isDragging ? "0 0 0.5em" : "0px" }}
      >
        {props.text}
      </p>
      <button
        className="delete-card absolute right-6 top-1"
        style={{ visibility: hover ? "visible" : "hidden" }}
        onClick={() => props.handleRemovingCard(props.cardID, props.listID)}
      >
        x
      </button>
    </div>
  );
};

export default Card;
