import { useContext } from "react";
import userDataContext from "../context/userDataContext";
import { TableSVG } from "../svg/TableSVG";

const Navbar = (props) => {
  const { choosedUser, setUserSelection, userSelection } =
    useContext(userDataContext);
  const userContent = () => {
    return (
      <button
        className="flex pr-2"
        onClick={() => {
          props.setSidebarActive(!props.sidebarActive);
        }}
      >
        <img alt="avatar" src={choosedUser.user.avatar} className="w-10" />
        <p className="my-auto">{choosedUser.user.name}</p>
      </button>
    );
  };

  return (
    <div className="flex bg-black bg-opacity-50 text-white">
      {userSelection ? null : (
        <button
          onClick={() => {
            setUserSelection(true);
          }}
          className="ml-2"
        >
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
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      <div className="flex m-auto opacity-50">
        {TableSVG}
        Trollo
      </div>
      {choosedUser ? userContent() : null}
    </div>
  );
};

export default Navbar;
