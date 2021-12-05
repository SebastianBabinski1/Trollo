import React, { useState, useContext } from "react";
import userDataContext from "../../context/userDataContext";
import TrashRemoveUser from "./TrashRemoveUser";

const TableSelection = () => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(true);
  const [addingTable, setAddingTable] = useState(false);
  const { choosedUser, setChoosedUser, usersData, setUsersData } =
    useContext(userDataContext);

  const Table = (props) => {
    const [hover, setHover] = useState(false);
    return (
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`flex relative justify-center w-full transition duration-300 ease-in-out transform ${
          choosedUser.table === props.table
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        } `}
      >
        <button
          onClick={() => {
            setChoosedUser({
              user: props.user,
              table: props.table,
            });
          }}
        >
          {props.table.tableName}
        </button>
        {hover && choosedUser.table !== props.table ? (
          <TrashRemoveUser table={props.table} />
        ) : null}
      </div>
    );
  };

  const TablesRendering = () => {
    const tables = [];
    const matchingUserIndex = usersData.findIndex(
      (user) => user.userID === choosedUser.user.userID
    );
    usersData[matchingUserIndex].tables.forEach((table) => {
      tables.push(
        <Table
          key={table.tableID}
          user={usersData[matchingUserIndex]}
          table={table}
        />
      );
    });
    return tables;
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value === "") {
      alert("Please type name of new table");
    } else {
      const handleAddingTable = () => {
        const newTables = usersData;

        const matchingUserIndex = usersData.findIndex(
          (user) => user.userID === choosedUser.user.userID
        );

        if (newTables[matchingUserIndex].tables.length > 9) {
          alert("You have too many tables. Please remove the unused table");
        } else {
          newTables[matchingUserIndex].tables.push({
            // This ID should be assigned in other way
            tableID: usersData[matchingUserIndex].tables.length,
            tableName: value,
            lists: [],
          });
          setUsersData(newTables);
        }
      };
      handleAddingTable();
      setValue("");
      setAddingTable(!addingTable);
    }
    event.preventDefault();
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setValue("");
      setAddingTable(!addingTable);
    } else {
      return null;
    }
  };

  const AddingTableForm = () => {
    return (
      <form onSubmit={handleSubmit} onBlur={(event) => handleBlur(event)}>
        <div className="flex bg-black bg-opacity-30 rounded-md my-2 p-2 text-black">
          <input
            type="text"
            placeholder="Name of new table"
            onChange={handleChange}
            className="border-2 px-2 rounded-md shadow-md w-full h-8 bg-white mr-2"
            autoFocus
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

  return (
    <div
      className={`absolute z-10 flex flex-col bg-black bg-opacity-50 h-full w-60 text-white transition duration-500 ease-in-out transform
    ${active ? ` -translate-x-full` : `translate-x-0`}`}
    >
      {TablesRendering()}
      {addingTable ? (
        AddingTableForm()
      ) : (
        <button
          onClick={() => setAddingTable(!addingTable)}
          className="hover:bg-blue-600 bg-blue-500 text-white w-1/2 mx-auto rounded-md px-1 border-2 border-gray-300 cursor-pointer"
        >
          New table
        </button>
      )}
      <button
        onClick={() => {
          setActive(!active);
        }}
        className="absolute -right-6"
      >
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bg-black bg-opacity-50 rounded-br-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TableSelection;
