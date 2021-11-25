import React, { useContext } from "react";
import userDataContext from "../../context/userDataContext";

const TableSelection = (props) => {
  const { choosedUser, setChoosedUser } = useContext(userDataContext);
  const handleTableSelection = () => {
    const tables = [];

    choosedUser.user.tables.forEach((table) => {
      tables.push(
        <button
          key={table.tableID}
          onClick={() => {
            setChoosedUser({
              user: choosedUser.user,
              table: table,
            });
          }}
        >
          {table.tableName}
        </button>
      );
    });
    return tables;
  };
  return (
    <div className="flex flex-col bg-black bg-opacity-50 w-60 h-60 text-white">
      {handleTableSelection()}
    </div>
  );
};

export default TableSelection;
