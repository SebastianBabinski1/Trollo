import React, { useState, useContext } from "react";
import userDataContext from "../../context/userDataContext";

const TrashButton = (props) => {
  const [hover, setHover] = useState(false);
  const { usersData, setUsersData } = useContext(userDataContext);

  const handleRemovingUser = (userID) => {
    const usersDataCopy = [...usersData];
    const matchingUsersDataIndex = usersDataCopy.findIndex(
      (item) => item.userID === userID
    );
    usersDataCopy.splice(matchingUsersDataIndex, 1);
    setUsersData(usersDataCopy);
  };

  return (
    <button
      className={` absolute right-0 top-8 mr-2`}
      onClick={() => handleRemovingUser(props.userID)}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke={hover ? "red" : "currentColor"}
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

export default TrashButton;
