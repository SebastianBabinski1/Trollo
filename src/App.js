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
      name: "Kukasz",
      id: 1,
      avatar:
        "https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/14925305_1132094750203954_6291766469642043944_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=bvQJrIup1C8AX9iD5v3&_nc_ht=scontent-waw1-1.xx&oh=19d54978ab7afb1b87c9571bed717c65&oe=618D8EF4",
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
    console.log(users);
  };

  const handleSelectedUser = () => {
    const selectedUser = [];
    usersData.forEach((user) => {
      if (user.userID === choosedUser.id) {
        selectedUser.push(<UserBoard lists={user.lists} />);
      }
    });
    return selectedUser;
  };

  return (
    <div className="h-screen relative">
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
