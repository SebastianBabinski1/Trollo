import React, { useState } from "react";
import Card from "./components/List/Card";
import UserBoard from "./components/UserBoard";
import UserSelection from "./components/UserSelection";

const App = () => {
  const [userSelection, setUserSelection] = useState(true);
  const [choosedUser, setChoosedUser] = useState();
  const [users, setUsers] = useState([
    {
      name: "Henry",
      id: 0,
      avatar: "https://www.svgrepo.com/show/125/car.svg",
    },
    {
      name: "Martin",
      id: 1,
      avatar: "https://www.svgrepo.com/show/20920/man.svg",
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

  const handleRemovingUser = (userID) => {
    const usersCopy = [...users];
    const matchingUserIndex = usersCopy.findIndex((item) => item.id === userID);
    const updatedUsers = usersCopy.slice(matchingUserIndex, 1);

    const usersDataCopy = [...usersData];
    const matchingUsersDataIndex = usersDataCopy.findIndex(
      (item) => item.userID === userID
    );
    const updatedUsersData = usersDataCopy.slice(matchingUsersDataIndex, 1);

    // setUsers(updatedUsers);
    // setUsersData(updatedUsersData);
    // Somethings here not
  };

  const handleListUpdate = (userID, newLists) => {
    const stateCopy = [...usersData];
    const matchingIndex = stateCopy.findIndex((item) => item.userID === userID);

    stateCopy[matchingIndex].lists = newLists;

    setUsersData(stateCopy);
  };

  const handleDND = (
    userID,
    removingListID,
    addingListID,
    cardText,
    cardID
  ) => {
    const handleCardCounter = (list) => {
      let calculatedID = 0;

      list.cards.forEach((card) => {
        if (card.id >= calculatedID) {
          calculatedID = card.id + 1;
        }
      });

      return calculatedID;
    };
    const updatedUsersData = [...usersData];
    usersData.forEach((user, userIndex) => {
      if (user.userID === userID) {
        user.lists.forEach((list, listIndex) => {
          if (list.id === removingListID) {
            const removingCardIndex = list.cards.findIndex(
              (card) => card.id === cardID
            );
            updatedUsersData[userIndex].lists[listIndex].cards.splice(
              removingCardIndex,
              1
            );
          } else if (list.id === addingListID) {
            updatedUsersData[userIndex].lists[listIndex].cards.push({
              id: handleCardCounter(list),
              text: cardText,
            });
          }
        });
      }
    });
    setUsersData(updatedUsersData);
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
    let userContent = {};
    users.forEach((user) => {
      if (user.id === choosedUser.id) {
        userContent = user;
      }
    });

    const selectedUser = [];
    usersData.forEach((user) => {
      if (user.userID === choosedUser.id) {
        selectedUser.push(
          <UserBoard
            users={users}
            setChoosedUser={setChoosedUser}
            setUserSelection={setUserSelection}
            userContent={userContent}
            handleDND={handleDND}
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
          handleRemovingUser={handleRemovingUser}
        />
      ) : (
        handleSelectedUser()
      )}
    </div>
  );
};

export default App;
