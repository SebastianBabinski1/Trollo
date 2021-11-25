import React, { useContext } from "react";
import userDataContext from "../../context/userDataContext";
import { handleButtons } from "../UserSelection";

const SidebarNav = (props) => {
  const { usersData, setChoosedUser, setUserSelection } =
    useContext(userDataContext);

  return (
    <div
      className={`absolute right-0 bg-black bg-opacity-50 z-10 transition duration-500 ease-in-out transform ${
        props.sidebarActive ? `translate-x-full` : `translate-x-0`
      }
        }`}
    >
      <p className="text-center p-1 text-white">Change user</p>
      <div className="rounded-md bg-white p-1 ">
        {handleButtons(usersData, setChoosedUser, setUserSelection)}
      </div>
    </div>
  );
};

export default SidebarNav;
