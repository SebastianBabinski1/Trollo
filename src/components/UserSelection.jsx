import React from "react";
import UserRegister from "./UserRegister";

const UserSelection = (props) => {
  const handleButtons = (users) => {
    const tableOfUsers = [];
    users.forEach((user) => {
      tableOfUsers.push(
        <div>
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
              className="w-20 rounded-full ring-gray-500 ring-1"
            />
          </button>
        </div>
      );
    });
    return tableOfUsers;
  };

  return (
    <div className="h-screen bg-red-100 justify-center">
      <p className="flex justify-center">Choose user:</p>
      <div className="flex justify-center">{handleButtons(props.users)}</div>
      <UserRegister updateUsers={props.updateUsers} />
    </div>
  );
};

export default UserSelection;
