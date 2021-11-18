import React, { useState } from "react";
import UserBoard from "./components/UserBoard";
import UserSelection from "./components/UserSelection";

const App = () => {
  const [userSelection, setUserSelection] = useState(true);
  const [choosedUser, setChoosedUser] = useState();

  const [usersData, setUsersData] = useState([
    {
      userID: 0,
      name: "Henry",
      avatar: "https://www.svgrepo.com/show/125/car.svg",
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
      name: "Martin",
      avatar: "https://www.svgrepo.com/show/20920/man.svg",
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

  let busyID = 0;
  const handleID = (busyID) => {
    usersData.forEach((user) => {
      if (user.userID >= busyID) {
        busyID = user.userID;
      }
    });
    return busyID;
  };

  const handleRemovingUser = (userID) => {
    const usersDataCopy = [...usersData];
    const matchingUsersDataIndex = usersDataCopy.findIndex(
      (item) => item.userID === userID
    );
    usersDataCopy.splice(matchingUsersDataIndex, 1);
    setUsersData(usersDataCopy);
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
    const newID = handleID(busyID) + 1;
    console.log(newID);
    setUsersData((prevState) => [
      ...prevState,
      { userID: newID, name: newUser, avatar: avatar, lists: [] },
    ]);
  };

  const handleSelectedUser = () => {
    let userContent = {};
    usersData.forEach((user) => {
      if (user.userID === choosedUser.userID) {
        userContent = user;
      }
    });

    const selectedUser = [];
    usersData.forEach((user) => {
      if (user.userID === choosedUser.userID) {
        selectedUser.push(
          <UserBoard
            key={user.userID}
            users={usersData}
            setChoosedUser={setChoosedUser}
            setUserSelection={setUserSelection}
            userContent={userContent}
            handleDND={handleDND}
            userID={user.userID}
            handleListUpdate={handleListUpdate}
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
          users={usersData}
          handleRemovingUser={handleRemovingUser}
        />
      ) : (
        handleSelectedUser()
      )}
    </div>
  );
};

export default App;
