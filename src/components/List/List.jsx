import React, { useState } from "react";
import ListTitle from "./ListTitle";
import Card from "./Card";
import SomeContainer from "../SomeContainer";

const List = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    props.handleAddingCard(props.listID, value);
    setValue("");
    event.preventDefault();
  };

  const handleCards = (cards) => {
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
    <div className="list-wrapper w-1/4 bg-gray-200 m-2 h-full">
      <ListTitle />
      {handleCards(props.cards)}
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="m-2"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add new card"
        />
        <input className="p-1 rounded-md shadow-md" type="submit" value="+" />
      </form>
      <SomeContainer />
    </div>
  );
};

export default List;
