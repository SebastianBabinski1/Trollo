import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import userDataContext from "./context/userDataContext";
import UserBoard from "./components/UserBoard";
import UserSelection from "./components/UserSelection/UserSelection";

const App = () => {
  const [choosedUser, setChoosedUser] = useState(false);

  const [usersData, setUsersData] = useState([
    {
      userID: 0,
      name: "Henry",
      avatar: "https://www.svgrepo.com/show/125/car.svg",
      active: false,
      tables: [
        {
          tableID: 0,
          tableName: "Table 1",
          active: false,
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
          active: false,
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

  let activeUserIndex = undefined;
  let activeTableIndex = undefined;
  if (choosedUser === true) {
    activeUserIndex = usersData.findIndex((user) => user.active === true);
    activeTableIndex = usersData[activeUserIndex].tables.findIndex(
      (table) => table.active === true
    );
  }

  return (
    <>
      <userDataContext.Provider
        value={{
          usersData,
          setUsersData,
          choosedUser,
          setChoosedUser,
          activeUserIndex,
          activeTableIndex,
        }}
      >
        <div className="App h-screen bg-mountains bg-center bg-cover flex flex-col">
          <Routes>
            <Route path="/" element={<UserSelection />} />
            {choosedUser ? (
              <Route
                path={usersData[activeUserIndex].name}
                element={<UserBoard key={usersData[activeUserIndex].userID} />}
              />
            ) : null}
            <Route
              path="*"
              element={
                <Link className="text-white" to="/">
                  404! Click here and back to home
                </Link>
              }
            />
          </Routes>
        </div>
      </userDataContext.Provider>
    </>
  );
};

export default App;
