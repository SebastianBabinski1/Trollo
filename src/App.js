import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import userDataContext from "./context/userDataContext";
import UserBoard from "./components/UserBoard";
import UserSelection from "./components/UserSelection/UserSelection";

const App = () => {
  const [choosedUser, setChoosedUser] = useState();
  // user: props.user,
  // table: item,
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
    <>
      <userDataContext.Provider
        value={{
          usersData,
          setUsersData,
          choosedUser,
          setChoosedUser,
        }}
      >
        <div className="App h-screen bg-mountains bg-center bg-cover flex flex-col">
          <Routes>
            <Route path="/" element={<UserSelection />} />
            {choosedUser ? (
              <Route
                path={choosedUser.user.name}
                element={<UserBoard key={choosedUser.user.userID} />}
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
