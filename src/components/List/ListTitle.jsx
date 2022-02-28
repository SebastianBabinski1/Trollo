import React, { useContext } from "react";
import userDataContext from "../../context/userDataContext";
import handleListUpdateContext from "../../context/handleListUpdateContext";

const ListTitle = (props) => {
  const { activeUserIndex, activeTableIndex, usersData } =
    useContext(userDataContext);
  const { handleListUpdate } = useContext(handleListUpdateContext);

  const handleRemovingList = (listID) => {
    const updatedLists = [
      ...usersData[activeUserIndex].tables[activeTableIndex].lists,
    ];
    const indexOfList = updatedLists.findIndex((list) => list.id === listID);
    updatedLists.splice(indexOfList, 1);
    handleListUpdate(
      usersData[activeUserIndex].userID,
      updatedLists,
      usersData[activeUserIndex].tables[activeTableIndex].tableID
    );
  };

  return (
    <div className="flex">
      <h1 className="font-medium text-sm pt-1 pl-4">{props.title}</h1>
      <button
        className="ml-auto mr-4"
        onClick={() => handleRemovingList(props.listID)}
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

export default ListTitle;
