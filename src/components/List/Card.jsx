import React, { useState, useContext } from "react";
import userDataContext from "../../context/userDataContext";
import handleListUpdateContext from "../../context/handleListUpdateContext";
import { useDrag } from "react-dnd";

const Card = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: {
      id: props.cardID,
      text: props.text,
      listID: props.listID,
      tableID: props.tableID,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [hover, setHover] = useState(false);
  const { activeUserIndex, activeTableIndex, usersData, setUsersData } =
    useContext(userDataContext);
  const { handleListUpdate } = useContext(handleListUpdateContext);

  const handleRemovingCard = (cardID, listID) => {
    usersData[activeUserIndex].tables[activeTableIndex].lists.forEach(
      (item, indexofArray) => {
        if (item.id === listID) {
          item.cards.forEach((card, indexofCard) => {
            if (card.id === cardID) {
              let newArray = [
                ...usersData[activeUserIndex].tables[activeTableIndex].lists,
              ];

              let cardsAfterRemoving = item.cards;
              cardsAfterRemoving.splice(indexofCard, 1);
              newArray[indexofArray].cards = cardsAfterRemoving;

              handleListUpdate(
                usersData[activeUserIndex].userID,
                newArray,
                usersData[activeUserIndex].tables[activeTableIndex].tableID
              );
            }
          });
        }
      }
    );
  };

  const handleCompleteTask = () => {
    let updatedTask = [...usersData];

    const matchingListIndex = updatedTask[activeUserIndex].tables[
      activeTableIndex
    ].lists.findIndex((list) => list.id === props.listID);

    const matchingCardIndex = updatedTask[activeUserIndex].tables[
      activeTableIndex
    ].lists[matchingListIndex].cards.findIndex(
      (card) => card.id === props.cardID
    );

    updatedTask[activeUserIndex].tables[activeTableIndex].lists[
      matchingListIndex
    ].cards[matchingCardIndex].complete = !props.complete;

    setUsersData(updatedTask);
  };

  return (
    <div
      className="relative"
      ref={drag}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className={`bg-white rounded-md m-2 py-1 pl-2 pr-8 break-words border-2 border-gray-300 ${
          props.complete ? `line-through text-gray-400 bg-opacity-50` : null
        } `}
        style={{ boxShadow: isDragging ? "0 0 0.5em" : "0px" }}
      >
        {props.text}
      </p>
      <button
        className={`absolute right-12 top-2 ${hover ? "visible" : "hidden"}`}
        onClick={() => handleCompleteTask()}
      >
        {props.complete ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
      <button
        className={`delete-card absolute right-6 top-2 ${
          hover ? "visible" : "hidden"
        }`}
        onClick={() => handleRemovingCard(props.cardID, props.listID)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;
