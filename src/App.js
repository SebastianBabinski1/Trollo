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
      avatar:
        "https://cdn-icons.flaticon.com/png/512/3445/premium/3445119.png?token=exp=1634890004~hmac=9cba3c3d469dd9c5d4d21c0ab5f3f96b",
    },
    {
      name: "Kitty",
      id: 1,
      avatar:
        "https://cdn-icons.flaticon.com/png/512/4442/premium/4442266.png?token=exp=1634890072~hmac=16211a77a22354e3fdae270ab0c8b361",
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
        />
      ) : (
        handleSelectedUser()
      )}
    </div>
  );
};

export default App;
