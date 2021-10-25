import React, { useState } from "react";
import ListTitle from "./ListTitle";
import Card from "./Card";
import { useDrop } from "react-dnd";

const List = (props) => {
  const [value, setValue] = useState("");

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

  return (
    <div
      className="list-wrapper flex-shrink-0 w-1/5 bg-gray-200 m-2 border-2 border-gray-300 rounded-md"
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
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          className="mx-2 my-2 rounded-md border-2 border-gray-300"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add new card"
        />
        <input
          className="mb-2 mt-2 w-1/12 rounded-md border-2 border-gray-300 cursor-pointer"
          type="submit"
          value="+"
        />
      </form>
    </div>
  );
};

export default List;
