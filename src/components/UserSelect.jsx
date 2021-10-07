import React, { useState } from "react";

const UserSelect = () => {
  const [users, setUsers] = useState([
    {
      userID: 1,
      userName: "alojzy",
      board: [{}],
    },
    {
      userID: 2,
      userName: "heniek",
      board: [{}],
    },
  ]);

  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    setUsers(value);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Type your name: </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Username"
        ></input>
      </form>
    </div>
  );
};

export default UserSelect;
