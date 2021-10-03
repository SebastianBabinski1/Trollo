import React from "react";
import { useDrag } from "react-dnd";

const Card = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: props.cardID },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="relative"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
      ref={drag}
    >
      <p className="bg-white rounded-md m-2 p-1">{props.text}</p>
      <button
        className="absolute right-6 top-0"
        onClick={() => props.handleRemovingCard(props.cardID, props.listID)}
      >
        x
      </button>
    </div>
  );
};

export default Card;
