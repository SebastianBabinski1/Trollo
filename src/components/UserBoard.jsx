import React, { useState, useContext } from "react";
import userDataContext from "../context/userDataContext";
import handleListUpdateContext from "../context/handleListUpdateContext";
import Navbar from "./Navbar";
import List from "./List/List.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListTitleForm from "./List/ListTitleForm.jsx";
import Footer from "./Footer";
import TableSelection from "./TableSelection/TableSelection";

const UserBoard = () => {
  const [showComponent, setShowComponent] = useState(false);

  const { usersData, setUsersData, choosedUser } = useContext(userDataContext);

  const handleListUpdate = (userID, newLists, tableID) => {
    const stateCopy = [...usersData];
    const matchingUserIndex = stateCopy.findIndex(
      (item) => item.userID === userID
    );

    const matchingTableIndex = stateCopy[matchingUserIndex].tables.findIndex(
      (table) => table.tableID === tableID
    );
    stateCopy[matchingUserIndex].tables[matchingTableIndex].lists = newLists;

    setUsersData(stateCopy);
  };

  const handleLists = () => {
    const tableOfLists = [];
    choosedUser.table.lists.forEach((item) => {
      tableOfLists.push(<List key={item.id} list={item} />);
    });
    return tableOfLists;
  };

  return (
    <handleListUpdateContext.Provider value={{ handleListUpdate }}>
      <DndProvider backend={HTML5Backend}>
        <div className="relative h-screen flex flex-col overflow-hidden">
          <div>
            <Navbar />
          </div>
          <div className="flex flex-grow">
            <TableSelection />
            <div className="flex flex-grow items-start overflow-x-scroll px-6">
              {handleLists()}
              <div className="w-1/5 flex-shrink-0">
                <button
                  className="border-2 px-2 rounded-md shadow-md w-full h-8 mt-2 bg-white opacity-70"
                  onClick={() => setShowComponent(!showComponent)}
                >
                  Add new list
                </button>
                {showComponent ? (
                  <ListTitleForm
                    setShowComponent={() => setShowComponent(!showComponent)}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </DndProvider>
    </handleListUpdateContext.Provider>
  );
};

export default UserBoard;
