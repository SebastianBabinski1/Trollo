import React from "react";

const ListTitle = (props) => {
  return (
    <div className="flex">
      <h1 className="font-medium text-sm pt-1 pl-4">{props.title}</h1>
      <button
        className="ml-auto mr-4"
        onClick={() => props.handleRemovingList(props.listID)}
      >
        x
      </button>
    </div>
  );
};

export default ListTitle;
