import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userDataContext from "../../context/userDataContext";
import TrashButton from "./TrashButton";

const User = (props) => {
  const [hover, setHover] = useState(false);
  const [chooseTable, setChooseTable] = useState(false);

  const { usersData, setUsersData, setChoosedUser } =
    useContext(userDataContext);

  const navigate = useNavigate();

  const handleActiveChanging = (userID, tableID) => {
    const dataCopy = [...usersData];
    const matchingUserIndex = dataCopy.findIndex(
      (user) => user.userID === userID
    );
    dataCopy[matchingUserIndex].active = true;
    const matchingTableIndex = dataCopy[matchingUserIndex].tables.findIndex(
      (table) => table.tableID === tableID
    );
    dataCopy[matchingUserIndex].tables[matchingTableIndex].active = true;
    setUsersData(dataCopy);
  };

  const handleTableSelection = () => {
    const tables = [];
    props.user.tables.forEach((item) => {
      tables.push(
        <Link
          to={props.user.name}
          key={item.tableID}
          onClick={() => {
            setChoosedUser(true);
            handleActiveChanging(props.user.userID, item.tableID);
          }}
          className="hover:bg-gray-200 text-center"
        >
          {item.tableName}
        </Link>
      );
    });
    return tables;
  };

  return (
    <>
      <div
        className="relative flex rounded-md hover:bg-gray-200"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <button
          onClick={() => {
            if (props.user.tables.length > 1) {
              setChooseTable(!chooseTable);
            } else {
              setChoosedUser(true);
              handleActiveChanging(
                props.user.userID,
                props.user.tables[0].tableID
              );
              navigate(props.user.name);
            }
          }}
          className="p-4 mx-auto flex"
        >
          <img
            alt="user"
            src={props.user.avatar}
            className="w-16 rounded-full"
          />
          <p className="my-auto mx-4 text-xl">{props.user.name}</p>
        </button>
        {hover ? <TrashButton userID={props.user.userID} /> : null}
      </div>
      {chooseTable ? handleTableSelection() : null}
    </>
  );
};

export default User;
