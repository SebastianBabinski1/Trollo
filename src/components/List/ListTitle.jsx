import React, { useContext } from "react";
import userDataContext from "../../context/userDataContext";
import handleListUpdateContext from "../../context/handleListUpdateContext";

const ListTitle = (props) => {
  const { choosedUser } = useContext(userDataContext);
  const { handleListUpdate } = useContext(handleListUpdateContext);

  const handleRemovingList = (listID) => {
    const updatedLists = [...choosedUser.table.lists];
    const indexOfList = updatedLists.findIndex((list) => list.id === listID);
    updatedLists.splice(indexOfList, 1);
    handleListUpdate(
      choosedUser.user.userID,
      updatedLists,
      choosedUser.table.tableID
    );
  };

  return (
    <div className="flex">
      <h1 className="font-medium text-sm pt-1 pl-4">{props.title}</h1>
      <button
        className="ml-auto mr-4"
        onClick={() => handleRemovingList(props.listID)}
      >
        x
      </button>
    </div>
  );
};

export default ListTitle;
