import React, { useState } from "react";
import ListTitle from "./ListTitle";
import Card from "./Card";
import { useDrop } from "react-dnd";

const List = (props) => {
  console.log(props.test);
  const [value, setValue] = useState("");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => handleDND(item.id, item.text, item.listID),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  //  #2, here u should check why after droping card all list is removing

  const handleDND = (cardID, cardText, listID) => {
    // console.log(props.lists);
    // console.log("cardID: " + cardID);
    // console.log("cardText: " + cardText);
    // console.log("listID: " + listID);
    props.handleAddingCard(props.listID, cardText);
    // here must be smth wrong, cause when state is updating then while new list is rendering smths going wrong, and finally list is not adding
    props.handleRemovingCard(cardID, listID);
  };

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
      className="list-wrapper w-1/5 bg-gray-200 m-2 h-full border-2 border-gray-300 rounded-md"
      ref={drop}
    >
      <ListTitle title={props.title} />
      {handleCardsRendering(props.cards)}
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          className="mx-2 my-2"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add new card"
        />
        <input
          className="mb-2 mt-2 w-1/12 rounded-md shadow-md"
          type="submit"
          value="+"
        />
      </form>
    </div>
  );
};

export default List;
