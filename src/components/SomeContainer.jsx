import { useState } from "react";
import { useDrop } from "react-dnd";

const SomeContainer = (props) => {
  const [board, setBoard] = useState(["Adam", "Michal", "Michalina"]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => addCardToContainer(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToContainer = (id) => {
    let newBoard = [...board];
    newBoard.push(id);
    setBoard(newBoard);
    console.log(id);
    console.log(newBoard);
  };

  const handleBoard = () => {
    let tableOfHello = [];
    board.forEach((item) => {
      tableOfHello.push(<h1>Hello {item}</h1>);
    });
    return tableOfHello;
  };

  return (
    <div className="bg-purple-600 h-28 w-28" ref={drop}>
      <h1>Im SomeContainer</h1>
      {handleBoard()}
    </div>
  );
};

export default SomeContainer;
