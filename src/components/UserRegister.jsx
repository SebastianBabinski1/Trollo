import React, { useState, useContext } from "react";
import userDataContext from "../context/userDataContext";

const UserRegister = (props) => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState({
    active: false,
    src: "",
  });

  const { usersData, setUsersData } = useContext(userDataContext);

  const updateUsers = (newUser, avatar) => {
    let busyID = 0;
    const handleID = (busyID) => {
      usersData.forEach((user) => {
        if (user.userID >= busyID) {
          busyID = user.userID;
        }
      });
      return busyID;
    };

    const newID = handleID(busyID) + 1;
    setUsersData((prevState) => [
      ...prevState,
      {
        userID: newID,
        name: newUser,
        avatar: avatar,
        active: false,
        tables: [
          { tableID: 0, tableName: "Your table", active: false, lists: [] },
        ],
      },
    ]);
  };

  const handleSubmit = (event) => {
    if ((value === "") | (image.src === "")) {
      alert("Please choose name and image");
    } else if (usersData.length > 4) {
      alert(
        "Ups... maximum number of users is 5. Please remove one user and try again"
      );
    } else {
      updateUsers(value, image.src);
      setValue("");
      setImage({ active: false, src: "" });
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChoose = (src) => {
    setImage({ active: true, src: src });
  };

  const Avatar = (props) => {
    return (
      <img
        alt="Farmer"
        src={props.src}
        className={`w-24 rounded-full hover:bg-gray-300 m-4 cursor-pointer ${
          image.active === true && image.src === props.src
            ? "bg-white ring-2 ring-black"
            : null
        }`}
        onClick={() => handleChoose(props.src)}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col items-center m-4 bg-white border-2 border-gray-500 rounded-md p-2 bg-opacity-80">
        <p className="text-lg mt-2">
          You dont have an account yet? Please type your name and choose avatar:
        </p>

        <input
          onChange={handleChange}
          value={value}
          type="text"
          className="w-1/3 m-4 border-2 border-gray-400 rounded-md px-2 py-1"
          placeholder="Your name..."
        />

        <div className="flex">
          <Avatar src="https://www.svgrepo.com/show/125/car.svg" />
          <Avatar src="https://www.svgrepo.com/show/20920/man.svg" />
          <Avatar src="https://www.svgrepo.com/show/31100/woman.svg" />
          <Avatar src="https://www.svgrepo.com/show/120838/dog.svg" />
        </div>
        <input
          value="Add new user"
          type="submit"
          className="m-4 border-2 border-gray-400 rounded-md px-2 py-1 hover:bg-gray-300"
        />
      </label>
    </form>
  );
};

export default UserRegister;
