import React, { useState, useContext } from "react";
import handleListUpdateContext from "../../context/handleListUpdateContext";
import userDataContext from "../../context/userDataContext";

const ListTitleForm = (props) => {
  const [title, setTitle] = useState("");

  const { activeUserIndex, activeTableIndex, usersData } =
    useContext(userDataContext);
  const { handleListUpdate } = useContext(handleListUpdateContext);

  const handleAddingList = (title) => {
    const handleListCounter = () => {
      let calculatedID = 0;
      usersData[activeUserIndex].tables[activeTableIndex].lists.forEach(
        (list) => {
          if (list.id >= calculatedID) {
            calculatedID = list.id + 1;
          }
        }
      );
      return calculatedID;
    };

    if (title !== "") {
      const newList = [
        ...usersData[activeUserIndex].tables[activeTableIndex].lists,
        { title: title, id: handleListCounter(), cards: [] },
      ];
      handleListUpdate(
        usersData[activeUserIndex].userID,
        newList,
        usersData[activeUserIndex].tables[activeTableIndex].tableID
      );
    }
  };

  const handleSubmit = (event) => {
    handleAddingList(title);
    event.preventDefault();
    props.setShowComponent();
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-black bg-opacity-30 rounded-md my-2 p-2">
        <input
          type="text"
          placeholder="Title of new list"
          onChange={handleChange}
          className="border-2 px-2 rounded-md shadow-md w-full h-8 bg-white mr-2"
        />
        <input
          className="hover:bg-blue-600 bg-blue-500 text-white rounded-md px-1 border-2 border-gray-300 cursor-pointer"
          type="submit"
          value="Add"
        />
      </div>
    </form>
  );
};

export default ListTitleForm;
