import { useState, useContext } from "react";
import userDataContext from "../../context/userDataContext";

const TrashRemoveUser = (props) => {
  const [hover, setHover] = useState(false);
  const { choosedUser, usersData, setUsersData } = useContext(userDataContext);

  const handleRemovingTable = (tableID) => {
    const updatedUsers = [...usersData];
    const matchingUserIndex = usersData.findIndex(
      (user) => user.userID === choosedUser.user.userID
    );
    const matchingTableIndex = usersData[matchingUserIndex].tables.findIndex(
      (table) => table.tableID === tableID
    );
    updatedUsers[matchingUserIndex].tables.splice(matchingTableIndex, 1);
    setUsersData(updatedUsers);
  };

  return (
    <button
      onClick={() => handleRemovingTable(props.table.tableID)}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="absolute right-8 top-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 "
        fill="none"
        viewBox="0 0 24 24"
        stroke={hover ? "red" : "black"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};

export default TrashRemoveUser;
