import React from "react";
import Navbar from "./Navbar";
import UserRegister from "./UserRegister";
import Footer from "./Footer";
import User from "./UserSelection/User";

const handleButtons = (
  users,
  setChoosedUser,
  setUserSelection,
  handleRemovingUser
) => {
  const tableOfUsers = [];

  users.forEach((user) => {
    tableOfUsers.push(
      <User
        key={user.id}
        user={user}
        setChoosedUser={setChoosedUser}
        setUserSelection={setUserSelection}
        handleRemovingUser={handleRemovingUser}
      />
    );
  });
  return tableOfUsers;
};

const UserSelection = (props) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="bg-black w-1/6 bg-opacity-50 flex flex-col">
          <p className="flex justify-center text-white">Choose user:</p>
          <div className="flex flex-col rounded-md bg-white p-1">
            {handleButtons(
              props.users,
              props.setChoosedUser,
              props.setUserSelection,
              props.handleRemovingUser
            )}
          </div>
        </div>
        <div className=" w-full">
          <p className="text-white text-6xl  text-right my-16 mr-6">
            Make your life easier with planning
          </p>
          <div className="w-1/2 mx-auto">
            <UserRegister
              usersLength={props.users.length}
              updateUsers={props.updateUsers}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserSelection;
export { handleButtons };
