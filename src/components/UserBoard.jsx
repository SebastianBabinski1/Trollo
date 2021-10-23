import Navbar from "./Navbar";
import { TableSVG } from "../svg/TableSVG";
import BoardHeader from "./BoardHeader";
import List from "./List/List.jsx";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListTitleForm from "./List/ListTitleForm.jsx";
import Footer from "./Footer";

const UserBoard = (props) => {
  const [showComponent, setShowComponent] = useState(false);

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
      props.lists.forEach((item, index) => {
        if (item.id === listID) {
          let newArray = [...props.lists];
          let newCards = props.lists[index].cards.concat([
            {
              id: handleCardCounter(item),
              text: cardText,
            },
          ]);

          newArray[index].cards = newCards;

          props.handleListUpdate(props.userID, newArray);
        }
      });
    }
  };

  //  #1, here u should check why after droping card from last list to another last list is removing

  const handleRemovingCard = (cardID, listID) => {
    props.lists.forEach((item, indexofArray) => {
      if (item.id === listID) {
        item.cards.forEach((card, indexofCard) => {
          if (card.id === cardID) {
            let newArray = [...props.lists];

            let cardsAfterRemoving = item.cards;
            cardsAfterRemoving.splice(indexofCard, 1);
            newArray[indexofArray].cards = cardsAfterRemoving;

            props.handleListUpdate(props.userID, newArray);
          }
        });
      }
    });
  };

  const handleAddingList = (title) => {
    const handleListCounter = () => {
      let calculatedID = 0;
      props.lists.forEach((list) => {
        if (list.id >= calculatedID) {
          calculatedID = list.id + 1;
        }
      });
      return calculatedID;
    };

    if (title !== "") {
      const newList = [
        ...props.lists,
        { title: title, id: handleListCounter(), cards: [] },
      ];
      props.handleListUpdate(props.userID, newList);
    }
  };

  const handleRemovingList = (listID) => {
    const updatedLists = [...props.lists];
    const indexOfList = updatedLists.findIndex((list) => list.id === listID);
    updatedLists.splice(indexOfList, 1);
    props.handleListUpdate(props.userID, updatedLists);
  };

  const handleShowingTitleForm = () => {
    setShowComponent(!showComponent);
  };

  const handleLists = () => {
    const tableOfLists = [];
    props.lists.forEach((item) => {
      tableOfLists.push(
        <List
          userID={props.userID}
          handleDND={props.handleDND}
          lists={item}
          key={item.id}
          listID={item.id}
          cards={item.cards}
          title={item.title}
          handleAddingCard={handleAddingCard}
          handleRemovingCard={handleRemovingCard}
          handleRemovingList={handleRemovingList}
        />
      );
    });
    return tableOfLists;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col max-w-full">
        <div>
          {/* Here u must do smth with svg files, cause there are errors */}
          <Navbar
            userContent={props.userContent}
            setUserSelection={props.setUserSelection}
          />
        </div>
        <div className="flex flex-grow items-start overflow-x-scroll">
          {handleLists()}
          <div className="w-1/5 flex-shrink-0">
            <button
              className="border-2 px-2 rounded-md shadow-md w-full h-8 mt-2 bg-white opacity-70"
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
        <Footer />
      </div>
    </DndProvider>
  );
};

export default UserBoard;
