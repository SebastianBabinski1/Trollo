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
      <input
        type="text"
        placeholder="Title of new list"
        onChange={handleChange}
        className="border-2 px-2 rounded-md shadow-md w-full h-8 mt-2 bg-white"
      ></input>
    </form>
  );
};

export default ListTitleForm;
