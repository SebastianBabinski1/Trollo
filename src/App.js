import React, { useState } from "react";
import userDataContext from "./context/userDataContext";
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
      tables: [
        {
          tableID: 0,
          tableName: "Table 1",
          lists: [
            {
              title: "First list in first table",
              id: 0,
              cards: [],
            },
            {
              title: "blabla",
              id: 1,
              cards: [],
            },
          ],
        },
        {
          tableID: 1,
          tableName: "Table 2",
          lists: [
            {
              title: "First list in second table",
              id: 0,
              cards: [],
            },
            {
              title: "ho",
              id: 1,
              cards: [],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <userDataContext.Provider
      value={{
        usersData,
        setUsersData,
        choosedUser,
        setChoosedUser,
        userSelection,
        setUserSelection,
      }}
    >
      <div className="h-screen bg-mountains bg-center bg-cover flex flex-col">
        {userSelection ? (
          <UserSelection />
        ) : (
          <UserBoard key={choosedUser.user.userID} />
        )}
      </div>
    </userDataContext.Provider>
  );
};

export default App;
