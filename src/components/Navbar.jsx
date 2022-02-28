import { useContext } from "react";
import { Link } from "react-router-dom";
import userDataContext from "../context/userDataContext";
import { TableSVG } from "../svg/TableSVG";

const Navbar = () => {
  const {
    usersData,
    setUsersData,
    activeUserIndex,
    activeTableIndex,
    choosedUser,
    setChoosedUser,
  } = useContext(userDataContext);

  const userContent = () => {
    return (
      <>
        <div className="mr-auto ml-4 my-auto opacity 70">
          <p>
            Table:{" "}
            {usersData[activeUserIndex].tables[activeTableIndex].tableName}
          </p>
        </div>
        <div className="flex pr-2">
          <img
            alt="avatar"
            src={usersData[activeUserIndex].avatar}
            className="w-10"
          />
          <p className="my-auto">{usersData[activeUserIndex].name}</p>
        </div>
      </>
    );
  };

  const handleUnactiveUser = () => {
    const dataCopy = [...usersData];
    dataCopy[activeUserIndex].active = false;
    dataCopy[activeUserIndex].tables[activeTableIndex].active = false;
    setUsersData(dataCopy);
  };

  return (
    <div className="flex bg-black bg-opacity-50 text-white">
      <Link
        to="/"
        onClick={() => {
          setChoosedUser(false);
          handleUnactiveUser();
        }}
        className="flex my-auto mx-2 opacity-50 hover:opacity-100 text-lg items-center"
      >
        {TableSVG}
        Trollo
      </Link>
      {choosedUser ? userContent() : null}
    </div>
  );
};

export default Navbar;
