import React, { useContext } from "react";
import userDataContext from "../../context/userDataContext";
import Navbar from "../Navbar";
import UserRegister from "../UserRegister";
import Footer from "../Footer";
import User from "./User";
import Steps from "../Steps/Steps";

const UserSelection = () => {
  const { usersData } = useContext(userDataContext);

  const handleUserSelection = () => {
    const tableOfUsers = [];
    usersData.forEach((user) => {
      tableOfUsers.push(<User key={user.userID} user={user} />);
    });

    return tableOfUsers;
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="bg-black w-1/6 bg-opacity-50 flex flex-col">
          {usersData.length > 0 ? (
            <>
              <p className="flex justify-center text-white">Choose user:</p>
              <div className="flex flex-col rounded-md bg-white p-1">
                {handleUserSelection()}
              </div>
            </>
          ) : (
            <Steps />
          )}
        </div>
        <div className=" w-full">
          <p className="text-white text-6xl  text-right my-16 mr-6">
            Make your life easier with planning
          </p>
          <div className="w-1/2 mx-auto">
            <UserRegister />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserSelection;
