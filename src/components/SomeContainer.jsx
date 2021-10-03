import { useState } from "react";
import { useDrop } from "react-dnd";

const SomeContainer = (props) => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => addCardToContainer(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToContainer = (id) => {
    console.log(id);
  };

  return (
    <div className="bg-purple-600 h-28 w-28" ref={drop}>
      <h1>Im SomeContainer</h1>
    </div>
  );
};

export default SomeContainer;
