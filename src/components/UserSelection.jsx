import React from "react";
import Navbar from "./Navbar";
import UserRegister from "./UserRegister";
import Footer from "../components/Footer";

const UserSelection = (props) => {
  const handleButtons = (users) => {
    const tableOfUsers = [];
    users.forEach((user) => {
      tableOfUsers.push(
        <div key={user.id} className="rounded-md hover:bg-gray-200">
          <button
            onClick={() => {
              props.setChoosedUser({
                name: user.name,
                id: user.id,
                avatar: user.avatar,
              });
              props.setUserSelection(false);
            }}
            className="p-4 mx-auto flex"
          >
            <img alt="user" src={user.avatar} className="w-16 rounded-full" />
            <p className="my-auto mx-4 text-xl">{user.name}</p>
          </button>
        </div>
      );
    });
    return tableOfUsers;
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="bg-black w-1/6 bg-opacity-50 flex flex-col">
          <p className="flex justify-center text-white">Choose user:</p>
          <div className="flex flex-col rounded-md bg-white p-1">
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
      <Footer />
    </div>
  );
};

export default UserSelection;
