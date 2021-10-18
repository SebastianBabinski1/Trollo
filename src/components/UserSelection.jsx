import React from "react";
import Navbar from "./Navbar";
import UserRegister from "./UserRegister";

const UserSelection = (props) => {
  const handleButtons = (users) => {
    const tableOfUsers = [];
    users.forEach((user) => {
      tableOfUsers.push(
        <div key={user.id} className="mx-auto">
          <button
            onClick={() => {
              props.setChoosedUser({
                name: user.name,
                id: user.id,
                avatar: user.avatar,
              });
              props.setUserSelection(false);
            }}
            className="m-2"
          >
            {user.name}
            <img
              alt="Farmer"
              src={user.avatar}
              className="w-20 rounded-full ring-white ring-1"
            />
          </button>
        </div>
      );
    });
    return tableOfUsers;
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-grow">
        <div className="bg-black w-1/6 bg-opacity-50">
          <p className="flex justify-center text-white">Choose user:</p>
          <div className="flex flex-col text-white">
            {handleButtons(props.users)}
          </div>
        </div>
        <div className=" w-full">
          <p className="text-white text-6xl  text-right my-16 mr-6">
            Make your life easier with planning
          </p>
          <div className="w-1/2 mx-auto">
            <UserRegister updateUsers={props.updateUsers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSelection;
