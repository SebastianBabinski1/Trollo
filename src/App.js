import React, { useState } from "react";
import Footer from "./components/Footer";
import UserBoard from "./components/UserBoard";
import UserSelection from "./components/UserSelection";

const App = () => {
  const [userSelection, setUserSelection] = useState(true);
  const [choosedUser, setChoosedUser] = useState();
  const [users, setUsers] = useState([
    {
      name: "Henry",
      id: 0,
      avatar:
        "https://cdn-icons.flaticon.com/png/512/3445/premium/3445119.png?token=exp=1634287113~hmac=8cd92ba22feac2a46dee51bd4a1bbe6e",
    },
    {
      name: "Kitty",
      id: 1,
      avatar:
        "https://cdn-icons.flaticon.com/png/512/2138/premium/2138230.png?token=exp=1634398172~hmac=444077912c2ac95d50c5e929947686fa",
    },
  ]);

  const [usersData, setUsersData] = useState([
    {
      userID: 0,
      lists: [
        {
          title: "First User",
          id: 0,
          cards: [],
        },
        {
          title: "Something",
          id: 1,
          cards: [],
        },
      ],
    },
    {
      userID: 1,
      lists: [
        {
          title: "Second User",
          id: 0,
          cards: [],
        },
        {
          title: "Something",
          id: 1,
          cards: [],
        },
      ],
    },
  ]);

  const handleListUpdate = (userID, newLists) => {
    const stateCopy = [...usersData];
    const matchingIndex = stateCopy.findIndex((item) => item.userID === userID);

    stateCopy[matchingIndex].lists = newLists;

    setUsersData(stateCopy);
  };

  const updateUsers = (newUser, avatar) => {
    const handleID = () => {
      let newID = 0;
      users.forEach((user) => {
        if (user.id >= newID) {
          newID = newID + 1;
        }
      });
      return newID;
    };
    const newID = handleID();
    setUsers((prevState) => [
      ...prevState,
      { name: newUser, id: newID, avatar: avatar },
    ]);
    setUsersData((prevState) => [...prevState, { userID: newID, lists: [] }]);
  };

  const handleSelectedUser = () => {
    const selectedUser = [];
    usersData.forEach((user) => {
      if (user.userID === choosedUser.id) {
        selectedUser.push(
          <UserBoard
            userID={user.userID}
            handleListUpdate={handleListUpdate}
            key={0}
            lists={user.lists}
          />
        );
      }
    });
    return selectedUser;
  };

  return (
    <div className="h-screen bg-mountains bg-center bg-cover flex flex-col">
      {userSelection ? (
        <UserSelection
          setChoosedUser={setChoosedUser}
          setUserSelection={setUserSelection}
          updateUsers={updateUsers}
          users={users}
        />
      ) : null}
      {choosedUser ? handleSelectedUser() : null}
      <Footer />
    </div>
  );
};

export default App;
