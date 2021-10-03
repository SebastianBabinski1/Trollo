// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import { TableSVG } from './svg/TableSVG';
// import BoardHeader from './components/BoardHeader';
import List from "./components/List/List.jsx";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Here u must make it function component and make dnd drop logic
const App = () => {
  const [lists, setLists] = useState([
    {
      title: "First Episode",
      id: 0,
      cards: [
        {
          id: 0,
          text: "Im a first card of first list",
        },
        {
          id: 1,
          text: "Im a second card of first list",
        },
      ],
    },
    {
      title: "Second Episode",
      id: 1,
      cards: [
        {
          id: 0,
          text: "Im a first card of second list",
        },
        {
          id: 1,
          text: "Im a second card of second list",
        },
      ],
    },
  ]);

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
  };

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

  const handleAddingList = () => {
    const handleListCounter = () => {
      let calculatedID = 0;
      lists.forEach((list) => {
        if (list.id >= calculatedID) {
          calculatedID = list.id + 1;
        }
      });
      return calculatedID;
    };

    setLists([
      ...lists,
      {
        title: "",
        id: handleListCounter(),
        cards: [],
      },
    ]);
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
          {/* <Navbar/> */}
          {/* <Button spanClass="pl-2" buttonClass="flex p-1 m-2 bg-black bg-opacity-10 rounded-md hover:bg-opacity-20" svg={TableSVG} text="Sample button"/> */}
          {/* <BoardHeader tableName="Name of table"/> */}
        </div>
        <div className="App-content flex">
          {handleLists()}
          <button
            className="border-2 px-2 rounded-r-md shadow-md w-1/4 h-8 mt-2 bg-white opacity-70"
            onClick={handleAddingList}
          >
            Add new list
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
