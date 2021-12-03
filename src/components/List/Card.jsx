import React, { useState, useContext } from "react";
import userDataContext from "../../context/userDataContext";
import handleListUpdateContext from "../../context/handleListUpdateContext";
import { useDrag } from "react-dnd";

const Card = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: props.cardID, text: props.text, listID: props.listID },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Somethings wrong here
  const [hover, setHover] = useState(false);
  const [complete, setComplete] = useState(false);
  const { choosedUser, usersData, setUsersData } = useContext(userDataContext);
  const { handleListUpdate } = useContext(handleListUpdateContext);

  const handleRemovingCard = (cardID, listID) => {
    choosedUser.table.lists.forEach((item, indexofArray) => {
      if (item.id === listID) {
        item.cards.forEach((card, indexofCard) => {
          if (card.id === cardID) {
            let newArray = [...choosedUser.table.lists];

            let cardsAfterRemoving = item.cards;
            cardsAfterRemoving.splice(indexofCard, 1);
            newArray[indexofArray].cards = cardsAfterRemoving;

            handleListUpdate(
              choosedUser.user.userID,
              newArray,
              choosedUser.table.tableID
            );
          }
        });
      }
    });
  };

  const handleCompleteTask = () => {
    let updatedTask = [...usersData];
    const matchingUserIndex = updatedTask.findIndex(
      (user) => user.userID === choosedUser.user.userID
    );
    const matchingTableIndex = updatedTask[matchingUserIndex].tables.findIndex(
      (table) => table.tableID === choosedUser.table.tableID
    );
    const matchingListIndex = updatedTask[matchingUserIndex].tables[
      matchingTableIndex
    ].lists.findIndex((list) => list.id === props.listID);

    const matchingCardIndex = updatedTask[matchingUserIndex].tables[
      matchingTableIndex
    ].lists[matchingListIndex].cards.findIndex(
      (card) => card.id === props.cardID
    );

    updatedTask[matchingUserIndex].tables[matchingTableIndex].lists[
      matchingListIndex
    ].cards[matchingCardIndex].complete = complete;

    console.log(
      updatedTask[matchingUserIndex].tables[matchingTableIndex].lists[
        matchingListIndex
      ]
    );
    setUsersData(updatedTask);
    setComplete(!complete);
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
          complete ? `line-through` : null
        } `}
        style={{ boxShadow: isDragging ? "0 0 0.5em" : "0px" }}
      >
        {props.text}
      </p>
      <button
        className={`absolute right-12 top-2 ${hover ? "visible" : "hidden"}`}
        onClick={() => handleCompleteTask()}
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
            d="M5 13l4 4L19 7"
          />
        </svg>
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
