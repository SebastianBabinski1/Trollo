import { useContext } from "react";
import { Link } from "react-router-dom";
import userDataContext from "../context/userDataContext";
import { TableSVG } from "../svg/TableSVG";

const Navbar = () => {
  const { choosedUser, setChoosedUser } = useContext(userDataContext);

  const userContent = () => {
    return (
      <>
        <div className="mr-auto ml-4 my-auto opacity 70">
          <p>Table: {choosedUser.table.tableName}</p>
        </div>
        <div className="flex pr-2">
          <img alt="avatar" src={choosedUser.user.avatar} className="w-10" />
          <p className="my-auto">{choosedUser.user.name}</p>
        </div>
      </>
    );
  };

  return (
    <div className="flex bg-black bg-opacity-50 text-white">
      <Link
        to="/"
        onClick={() => {
          setChoosedUser();
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
