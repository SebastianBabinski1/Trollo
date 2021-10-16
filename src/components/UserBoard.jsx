import Navbar from "./Navbar";
import { TableSVG } from "../svg/TableSVG";
import BoardHeader from "./BoardHeader";
import List from "./List/List.jsx";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListTitleForm from "./List/ListTitleForm.jsx";

const UserBoard = (props) => {
  const [showComponent, setShowComponent] = useState(false);
  const [lists, setLists] = useState(props.lists);

  const handleAddingCard = (listID, cardText) => {
    const handleCardCounter = (list) => {
      let calculatedID = 0;
      list.cards.forEach((card) => {
        if (card.id >= calculatedID) {
          calculatedID = card.id + 1;
        }
      });
      return calculatedID;
    };

    if (cardText !== "") {
      lists.forEach((item, index) => {
        if (item.id === listID) {
          let newArray = [...lists];
          let newCards = lists[index].cards.concat({
            id: handleCardCounter(item),
            text: cardText,
          });
          newArray[index].cards = newCards;
          setLists(newArray);
        }
      });
    }
  };

  //  #1, here u should check why after droping card from last list to another last list is removing

  const handleRemovingCard = (cardID, listID) => {
    lists.forEach((item, indexofArray) => {
      if (item.id === listID) {
        item.cards.forEach((card, indexofCard) => {
          if (card.id === cardID) {
            let newArray = [...lists];
            let cardsAfterRemoving = item.cards;
            cardsAfterRemoving.splice(indexofCard, 1);
            newArray[indexofArray].cards = cardsAfterRemoving;
            setLists(newArray);
          }
        });
      }
    });
  };

  const handleAddingList = (title) => {
    const handleListCounter = () => {
      let calculatedID = 0;
      lists.forEach((list) => {
        if (list.id >= calculatedID) {
          calculatedID = list.id + 1;
        }
      });
      return calculatedID;
    };

    if (title !== "") {
      setLists([
        ...lists,
        {
          title: title,
          id: handleListCounter(),
          cards: [],
        },
      ]);
    }
  };

  const handleShowingTitleForm = () => {
    setShowComponent(!showComponent);
  };

  const handleLists = () => {
    const tableOfLists = [];
    Array.from(lists).forEach((item) => {
      tableOfLists.push(
        <List
          key={item.id}
          listID={item.id}
          cards={item.cards}
          title={item.title}
          handleAddingCard={handleAddingCard}
          handleRemovingCard={handleRemovingCard}
        />
      );
    });
    return tableOfLists;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App h-screen bg-red-100">
        <div className="App-header">
          {/* Here u must do smth with svg files, cause there are errors */}
          <Navbar />
          <BoardHeader tableName="Name of table" />
        </div>
        <div className="App-content flex">
          {handleLists()}
          <div className="w-1/4">
            <button
              className="border-2 px-2 rounded-r-md shadow-md w-full h-8 mt-2 bg-white opacity-70"
              onClick={handleShowingTitleForm}
            >
              Add new list
            </button>
            {showComponent ? (
              <ListTitleForm
                handleAddingList={handleAddingList}
                handleShowingTitleForm={handleShowingTitleForm}
              />
            ) : null}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default UserBoard;