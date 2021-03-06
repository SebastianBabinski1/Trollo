import React, { useState, useContext } from "react";
import userDataContext from "../../context/userDataContext";
import ListTitle from "./ListTitle";
import Card from "./Card";
import { useDrop } from "react-dnd";
import handleListUpdateContext from "../../context/handleListUpdateContext";

const List = (props) => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  const { activeUserIndex, activeTableIndex, usersData, setUsersData } =
    useContext(userDataContext);
  const { handleListUpdate } = useContext(handleListUpdateContext);

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
      usersData[activeUserIndex].tables[activeTableIndex].lists.forEach(
        (item, index) => {
          if (item.id === listID) {
            let newArray = [
              ...usersData[activeUserIndex].tables[activeTableIndex].lists,
            ];
            let newCards = usersData[activeUserIndex].tables[
              activeTableIndex
            ].lists[index].cards.concat([
              {
                id: handleCardCounter(item),
                text: cardText,
                complete: false,
              },
            ]);
            newArray[index].cards = newCards;

            handleListUpdate(
              usersData[activeUserIndex].userID,
              newArray,
              usersData[activeUserIndex].tables[activeTableIndex].tableID
            );
          }
        }
      );
    }
  };

  const handleDND = (removingListID, addingListID, cardText, cardID) => {
    const handleCardCounter = (list) => {
      let calculatedID = 0;

      list.cards.forEach((card) => {
        if (card.id >= calculatedID) {
          calculatedID = card.id + 1;
        }
      });

      return calculatedID;
    };
    const updatedUsersData = [...usersData];

    const matchingActiveTableIndex = updatedUsersData[
      activeUserIndex
    ].tables.findIndex((table) => table.active === true);

    updatedUsersData[activeUserIndex].tables[
      matchingActiveTableIndex
    ].lists.forEach((list, listIndex) => {
      if (list.id === removingListID) {
        const removingCardIndex = list.cards.findIndex(
          (card) => card.id === cardID
        );
        updatedUsersData[activeUserIndex].tables[
          matchingActiveTableIndex
        ].lists[listIndex].cards.splice(removingCardIndex, 1);
      } else if (list.id === addingListID) {
        updatedUsersData[activeUserIndex].tables[
          matchingActiveTableIndex
        ].lists[listIndex].cards.push({
          id: handleCardCounter(list),
          text: cardText,
        });
      }
    });

    setUsersData(updatedUsersData);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => handleDND(item.listID, props.list.id, item.text, item.id),
    collect: (monitor) => ({
      isOver: !!!monitor.isOver(),
    }),
  }));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    handleAddingCard(props.list.id, value);
    setValue("");
    event.preventDefault();
  };

  const handleCardsRendering = (cards) => {
    const tableOfCards = [];
    cards.forEach((card) => {
      if (card.complete === false) {
        tableOfCards.unshift(
          <Card
            key={card.id}
            listID={props.list.id}
            cardID={card.id}
            text={card.text}
            tableID={
              usersData[activeUserIndex].tables[activeTableIndex].tableID
            }
            complete={card.complete}
          />
        );
      } else {
        tableOfCards.push(
          <Card
            key={card.id}
            listID={props.list.id}
            cardID={card.id}
            text={card.text}
            tableID={
              usersData[activeUserIndex].tables[activeTableIndex].tableID
            }
            complete={card.complete}
          />
        );
      }
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
      <ListTitle title={props.list.title} listID={props.list.id} />
      <div className="overflow-y-scroll max-h-96">
        {handleCardsRendering(props.list.cards)}
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
