import React, { useState } from "react";

const ListTitleForm = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    props.handleAddingList(title);
    event.preventDefault();
    props.handleShowingTitleForm();
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-black bg-opacity-30 rounded-md my-2 p-2">
        <input
          type="text"
          placeholder="Title of new list"
          onChange={handleChange}
          className="border-2 px-2 rounded-md shadow-md w-full h-8 bg-white mr-2"
        />
        <input
          className="hover:bg-blue-600 bg-blue-500 text-white rounded-md px-1 border-2 border-gray-300 cursor-pointer"
          type="submit"
          value="Add"
        />
      </div>
    </form>
  );
};

export default ListTitleForm;
