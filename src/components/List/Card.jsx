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

  const [hover, setHover] = useState(false);
  const { choosedUser } = useContext(userDataContext);
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

  return (
    <div
      className="relative"
      ref={drag}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        className={`bg-white rounded-md m-2 py-1 pl-2 pr-8 break-words border-2 border-gray-300`}
        style={{ boxShadow: isDragging ? "0 0 0.5em" : "0px" }}
      >
        {props.text}
      </p>
      <button
        className={`delete-card absolute right-6 top-1 ${
          hover ? "visible" : "hidden"
        }`}
        onClick={() => handleRemovingCard(props.cardID, props.listID)}
      >
        x
      </button>
    </div>
  );
};

export default Card;
