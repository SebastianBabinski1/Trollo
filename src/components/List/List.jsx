import React, { useState } from "react";
import ListTitle from "./ListTitle";
import Card from "./Card";
import { useDrop } from "react-dnd";

const List = (props) => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) =>
      props.handleDND(
        props.userID,
        item.listID,
        props.listID,
        item.text,
        item.id
      ),
    collect: (monitor) => ({
      isOver: !!!monitor.isOver(),
    }),
  }));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    props.handleAddingCard(props.listID, value);
    setValue("");
    event.preventDefault();
  };

  const handleCardsRendering = (cards) => {
    const tableOfCards = [];
    cards.forEach((item) => {
      tableOfCards.push(
        <Card
          key={item.id}
          handleRemovingCard={props.handleRemovingCard}
          listID={props.listID}
          cardID={item.id}
          text={item.text}
        />
      );
    });
    return tableOfCards;
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActive(!active);
    } else {
      return null;
    }
  };

  return (
    <div
      className="flex flex-col list-wrapper flex-shrink-0 w-1/5 bg-gray-200 m-2 border-2 border-gray-300 rounded-md p-1"
      ref={drop}
    >
      <ListTitle
        title={props.title}
        handleRemovingList={props.handleRemovingList}
        listID={props.listID}
      />
      <div className="overflow-y-scroll max-h-96">
        {handleCardsRendering(props.cards)}
      </div>
      {active ? (
        <form
          onSubmit={handleSubmit}
          className="flex justify-center"
          onBlur={(event) => handleBlur(event)}
        >
          <input
            className="mx-2 my-2 pl-1 rounded-md border-2 border-gray-300"
            type="text"
            value={value}
            onChange={handleChange}
            autoFocus
            placeholder="Your note..."
          />
          <input
            className="hover:bg-blue-600  mb-2 mt-2 p-1 bg-blue-500 text-white rounded-md border-2 border-gray-300 cursor-pointer"
            type="submit"
            value="Add card"
          />
        </form>
      ) : (
        <button
          className="hover:bg-gray-300 flex w-10/12 mx-auto rounded-md text-left text-gray-500 justify-items-center pl-1"
          onClick={() => setActive(!active)}
        >
          <span className="text-2xl my-auto">+</span>
          <span className="my-auto pl-1">Add</span>
        </button>
      )}
    </div>
  );
};

export default List;
